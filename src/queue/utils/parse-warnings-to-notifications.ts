import { parseWarningsNotificationsOptions } from "../interfaces/warnings-notifications-options.interface";

function parseWarningsToNotifications(payload: parseWarningsNotificationsOptions) {
  return payload.warnings.map(warning => ({ queue: payload.queue, warning }))
}
export { parseWarningsToNotifications }