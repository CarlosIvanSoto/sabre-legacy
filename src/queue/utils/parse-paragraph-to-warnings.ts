import { BookingText } from "../interfaces/get-queue-access-options.interface";
import { Warning } from "../interfaces/warning.interface";

function parseParagraphToWarnings(payload: BookingText): Array<Warning> {
  const LIMIT_NOTIFICATIONS = 5
  const WARNING_REGEX = /\d{3}\s{2}.+/g
  
  return payload.text
    .slice(0, LIMIT_NOTIFICATIONS)
    .filter(text => text.match(WARNING_REGEX))
    .map(warningInLine => {
      const [code, message] = warningInLine.split('  ')
      return { code, message }
    })
}
export { parseParagraphToWarnings }