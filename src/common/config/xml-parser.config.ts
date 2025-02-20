import { X2jOptions, XMLParser } from "fast-xml-parser";

const options: X2jOptions = {
  textNodeName: "content",
  attributeNamePrefix : "",
  removeNSPrefix: true,
  ignoreAttributes: [/^xmlns:/, /^eb:/, /^soap-env:/, /^xmlns/, /^Version/],
  transformTagName: (tagName) => tagName[0].toLowerCase() + tagName.slice(1),
  transformAttributeName: (attributeName) => attributeName[0].toLowerCase() + attributeName.slice(1)
};

// function parseXML<T>(xml: string): T {
//   return new XMLParser(options).parse(xml)
// } 
// export { parseXML }

export const parseXML = (() => {
  const parser = new XMLParser(options);
  return <T>(xml: string):T => parser.parse(xml);
})();
