import { NavigationAction } from "./interfaces/navigation-actions.interface";
import { queueAccess } from "./queue-access.helper"

function navigationAction(action: NavigationAction): string {
  const queueInfo = `<Navigation Action="${action}"/>`;
  const body = queueAccess(queueInfo);
  return body
}
export { navigationAction }