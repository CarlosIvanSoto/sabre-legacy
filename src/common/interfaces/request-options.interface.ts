import { HeaderOptions } from "./header-options.interface"

export interface RequestOptions extends HeaderOptions {
  body: string
}