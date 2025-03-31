import { HeadersRequestOptions } from "../../../common/interfaces/headers-request-options.interface";

export interface CurrencyOptions  extends HeadersRequestOptions {
    from: string;
    to: string;
    date: string;
}