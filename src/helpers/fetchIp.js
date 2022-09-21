import { testIp } from "./testIp";

export const fetchIp = async ({ ip }) => {
  const response = await testIp();
  // const data = await response.json();
  return response;
}