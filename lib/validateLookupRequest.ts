import { NextApiRequest, NextApiResponse } from "next";
import { WithId } from "mongodb";

function lookUpModeIsInvalid(mode: string): boolean {
  const allowedModes = [
    "all",
    "username",
    "password",
    "ipaddress",
    "facebookid",
    "linkedin",
    "zipcode",
    "phonenumber",
  ];
  return !allowedModes.includes(mode);
}

function requestBodyIsInvalid(
  req: NextApiRequest,
  res: NextApiResponse<WithId<Document> | unknown>
): boolean {
  const body: RequestBody = req.body;
  return (
    body.query == null ||
    body.query == "" ||
    body.queryType == null ||
    lookUpModeIsInvalid(body.queryType)
  );
}

function requestTypeIsInvalid(
  req: NextApiRequest,
  res: NextApiResponse<WithId<Document> | unknown>
): boolean {
  return req.method !== "POST";
}

function userRequestIsInvalid(
  req: NextApiRequest,
  res: NextApiResponse<WithId<Document> | unknown>
): boolean {
  if (requestTypeIsInvalid(req, res)) {
    res.status(405).send({ data: "Only POST requests allowed" });
    return true;
  }
  if (requestBodyIsInvalid(req, res)) {
    res.status(400).send({ data: "Request body format was invalid" });
    return true;
  }
  return false;
}

export default userRequestIsInvalid;
