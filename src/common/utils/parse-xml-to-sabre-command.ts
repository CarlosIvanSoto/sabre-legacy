import { parseXML } from '../config/xml-parser.config';
import { SabreCommandResponseSuccess } from '../interfaces/sabre-command.interface';

function parseXMLToSabreCommand(payload: string) {
    return parseXML<SabreCommandResponseSuccess>(payload).sabreCommandLLSRS
} 

export {parseXMLToSabreCommand}