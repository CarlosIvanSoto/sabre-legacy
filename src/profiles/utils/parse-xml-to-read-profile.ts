import { parseXML } from "../../common/config/xml-parser.config"
import { SabreOTAProfileReadRS } from "../interfaces/read-profile-options.interface"

function parseXMLToReadProfile(payload: string) {
  return parseXML<SabreOTAProfileReadRS>(payload)
}

export { parseXMLToReadProfile }