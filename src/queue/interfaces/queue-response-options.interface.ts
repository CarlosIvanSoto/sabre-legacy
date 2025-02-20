import { BookingText, QueueAccessRS } from "./get-queue-access-options.interface";
import { Notification } from "./notification.interface";

export interface QueueResponseOptions {
  queue: string
  paragraph: BookingText
  bookingId: string
}
export interface QueueResponse {
  bookingId: string
  notifications: Array<Notification>
}