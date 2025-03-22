import { parseXML } from '../config/xml-parser.config';
import { SabreCommandResponseSuccess } from '../interfaces/sabre-command.interface';
function parseXMLToSabreCommands(payload: string) {
    return parseXML<SabreCommandResponseSuccess>(payload).sabreCommandRS
} 

export {parseXMLToSabreCommands}