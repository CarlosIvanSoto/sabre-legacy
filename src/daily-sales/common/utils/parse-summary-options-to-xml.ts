import { SummaryOptions } from "../requests/interfaces/summary-options.interface";
import { parseSummaryOptionsToSelectionCriteria } from "./parse-summary-options-to-selection-criteria";

function parseSummaryOptionsToXML(payload: SummaryOptions) {
  const SelectionCriteria = parseSummaryOptionsToSelectionCriteria(payload)

  const {XMLBuilder} = require('fast-xml-parser');

  const builder = new XMLBuilder();
  return builder.build({ SelectionCriteria });
}

export { parseSummaryOptionsToXML }