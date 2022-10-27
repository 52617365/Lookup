export default function isValidQuery(
  lookupQuery: string | undefined,
  lookupOption: string
): boolean {
  if (lookupQuery == undefined || lookupQuery == "") {
    return false;
  }
  if (lookupOption == "") {
    return false;
  }
  return true;
}
