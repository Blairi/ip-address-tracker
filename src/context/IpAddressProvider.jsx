import { useState } from 'react'
import { IpAddressContext } from './IpAddressContext';

export const IpAddressProvider = ({ children }) => {

  const [ipAddress, setIpAddress] = useState();
  
  return (
    <IpAddressContext.Provider value={{ ipAddress, setIpAddress }}>
      { children }
    </IpAddressContext.Provider>
  )
}
