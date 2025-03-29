import { HeadersRequestOptions } from "../../common/interfaces";


export interface CurrencyOptions  extends HeadersRequestOptions {
    from: string;
    to: string;
    date: string;
}