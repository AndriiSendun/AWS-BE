import { EFFECT } from "../constants/aim-policy";
import { createAIMPolicy } from "../services/aim-policy.service";
import { parseAuthorizationHeader, validateCredential } from "../services/authorization.service";

export const basicAuthorization = async (event) => {
  console.log(event, 'basicAuthorization eventt');

  if(!event.headers.authorization) {
    return createAIMPolicy(event.routeArn, EFFECT.deny);
  }

  const token = parseAuthorizationHeader(event.headers.authorization);
  const isValid = validateCredential(token);

  if(isValid) {
    return createAIMPolicy(event.routeArn, EFFECT.allow);
  } else {
    return createAIMPolicy(event.routeArn, EFFECT.deny);
  }
};
