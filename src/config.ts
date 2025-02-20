import { version } from '../package.json';

const defaultBaseUrl = 'https://webservices.platform.sabre.com';
const defaultUserAgent = `sabre-client-node:${version}`;
const defaultConversationId = `sabre.client.node:${version}`
const defaultDomain = 'AA'

const baseUrl =
  typeof process !== 'undefined' && process.env
    ? process.env.SABRE_SOAP_URL || defaultBaseUrl
    : defaultBaseUrl;

const userAgent =
  typeof process !== 'undefined' && process.env
    ? process.env.SABRE_USER_AGENT || defaultUserAgent
    : defaultUserAgent;

const domain =
  typeof process !== 'undefined' && process.env
    ? process.env.SABRE_DOMAIN || defaultDomain
    : defaultDomain;

const conversationId = 
  typeof process !== 'undefined' && process.env
    ? process.env.SABRE_CONVERSATION_ID || defaultConversationId
    : defaultConversationId

export { baseUrl, userAgent, domain, conversationId };