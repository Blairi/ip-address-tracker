export const getIpAddressInfo = async ({ ipAddress = '' }) => {
  const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
  const data = await response.json();
  return data;
}