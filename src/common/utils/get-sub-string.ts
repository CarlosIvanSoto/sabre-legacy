export function getSubString (strSearch: string, strBegin: string, strEnd: string, withEnd: boolean) {
  let strSub = ''
  const intBegin = strSearch.indexOf(strBegin)
  if (intBegin !== -1) {
    const startIndex = withEnd ? intBegin : intBegin + strBegin.length
    const endIndex = strSearch.indexOf(strEnd, startIndex)
    if (endIndex !== -1) strSub = strSearch.substring(startIndex, endIndex + (withEnd ? strEnd.length : 0))
  }
  return strSub
}