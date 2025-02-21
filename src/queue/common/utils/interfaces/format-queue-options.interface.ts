import { Notification } from "../../interfaces"
import { BookingText } from "./booking-text.interface"

export interface FormatQueueOptions {
  queue: string
  paragraph: BookingText
  bookingId: string
}

export interface FormatQueueResponse {
  bookingId: string
  notifications: Array<Notification>
}