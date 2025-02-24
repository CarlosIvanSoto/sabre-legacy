import { Notification } from "../interfaces"
import { parseWarningsNotificationsOptions } from "./interfaces"

function parseWarningsToNotifications(payload: parseWarningsNotificationsOptions): Array<Notification> {
  return payload.warnings.map(warning => ({ queue: payload.queue, warning }))
}
export { parseWarningsToNotifications }