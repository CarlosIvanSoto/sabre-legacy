
import type { ErrorResponse, Actions } from "./interfaces";
import { getSubString } from "./common/utils/get-sub-string";
import { baseUrl, conversationId, domain, userAgent } from "./config";
import type { PostOptions } from "./common/interfaces/post-options.interface";
import type { HeadersRequestOptions } from "./common/interfaces/headers-request-options.interface";
import { Authentication } from "./authentication/authentication.";
import { Queue } from "./queue/queue";
import { DailySales } from "./daily-sales/daily-sales";
import type { SessionCreateOptions } from "./authentication/requests/interfaces/session-create-options.interface";
import { ActionsRQ } from "./common/interfaces/actions.interface";

export class Sabre {
  private readonly headers: Headers;
  private readonly headersRequest: HeadersRequestOptions

  readonly authentication = new Authentication(this)
  readonly queue = new Queue(this)
  readonly dailySales = new DailySales(this)

  constructor(
    private readonly username?: string,
    private readonly password?: string,
    private readonly organization?: string, // PCC
  ) {
    const processEnv = typeof process !== 'undefined' && process.env
    if (!username && processEnv) 
      this.username = processEnv.SABRE_USERNAME
    if (!password && processEnv)
      this.password = processEnv.SABRE_PASSWORD
    if (!organization && processEnv)
      this.organization = processEnv.SABRE_ORGANIZATION

    if (!this.username || !this.password || !this.organization) {
      throw new Error('Missing LegacySabre authorization. Pass it to the constructor `new LegacySabre("USERNAME", "PASSWORD", "ORGANIZATION")')
    }

    this.headers = new Headers({
      'User-Agent': userAgent,
      'Content-Type': 'text/xml; charset="utf-8"',
      'Content-Encoding': 'deflate'
    });
    this.headersRequest = {
      conversationId, authorization: ''
    }
  }

  setAction(action: Actions) {
    this.headers.set('SOAPAction', action)
  }

  async fetchRequest<T>(
    options = {},
  ): Promise<{ data: T | null; error: ErrorResponse | null }> {
    try {
      const response = await fetch(baseUrl, options);
      const xml = await response.text()

      if (!response.ok) {
        try {
          const fault = getSubString(xml, '<faultstring>', '</faultstring>', false)
          return { 
            data: null, 
            error: {
              name: 'fault_error',
              message: fault
            }
          };
        } catch (err) {
          if (err instanceof SyntaxError) {
            return {
              data: null,
              error: {
                name: 'application_error',
                message:
                  'Internal server error. We are unable to process your request right now, please try again later.',
              },
            };
          }

          const error: ErrorResponse = {
            message: response.statusText,
            name: 'application_error',
          };

          if (err instanceof Error) {
            return { data: null, error: { ...error, message: err.message } };
          }
          return { data: null, error };
        }
      }
      const body = getSubString(xml, '<soap-env:Body>', '</soap-env:Body>', false)
      const error = getSubString(body, '<stl:Error>', '</stl:Error>', false) 
      if (error) {
        return { 
          data: null, 
          error: {
            name: 'error_in_response',
            message: getSubString(error, '<stl:Message>', '</stl:Message>', false) 
          }
        };
      }
      const action = this.headers.get('SOAPAction')

      // AUTHORIZATION INTERNAL MANAGEMENT
      if (action === ActionsRQ.SESSION_CREATE || action === ActionsRQ.TOKEN_CREATE) {
        const token = getSubString(xml, '<wsse:BinarySecurityToken valueType="String" EncodingType="wsse:Base64Binary">', '</wsse:BinarySecurityToken>', false);
        this.headersRequest.authorization = token;
        this.headers.set('Authorization', `Bearer ${token}`)
      } else if (action === ActionsRQ.SESSION_CLOSE) {
        this.headersRequest.authorization = '';
        this.headers.delete('Authorization')
      }

      return { data: body as T, error: null };
    } catch (error) {
      return {
        data: null,
        error: {
          name: 'application_error',
          message: 'Unable to fetch data. The request could not be resolved.',
        },
      };
    }
  }

  async post<T>(handlerRequest: (payload: HeadersRequestOptions) => string, options: PostOptions = {}) {
    if (!this.headersRequest.authorization) throw new Error('Missing authorization. Set it in setToken("TOKEN")')
    const requestOptions = {
      method: 'POST',
      headers: this.headers,
      body: handlerRequest(this.headersRequest),
      ...options,
    };

    return this.fetchRequest<T>(requestOptions);
  }

  async auth<T>(handlerRequest:(payload: SessionCreateOptions) => string, options: PostOptions = {}) {
    if (!this.username || !this.password || !this.organization)
      throw new Error('Missing authorization. Pass it to the constructor `new LegacySabre("USERNAME", "PASSWORD", "ORGANIZATION")')

    const requestOptions = {
      method: 'POST',
      headers: this.headers,
      body: handlerRequest({
        conversationId: conversationId,
        authorization: {
          username: this.username,
          password: this.password,
          pcc: this.organization,
          domain: domain
        }
      }),
      ...options,
    };

    return this.fetchRequest<T>(requestOptions);
  }
}