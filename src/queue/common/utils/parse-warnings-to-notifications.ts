import { parseWarningsNotificationsOptions } from "./interfaces"

function parseWarningsToNotifications(payload: parseWarningsNotificationsOptions) {
  return payload.warnings.map(warning => ({ queue: payload.queue, warning }))
}
export { parseWarningsToNotifications }