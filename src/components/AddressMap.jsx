import { useContext } from 'react';
import { IpAddressContext } from '../context/IpAddressContext';
import { Map } from './Map';

export const AddressMap = () => {

  const { ipAddress } = useContext( IpAddressContext );

  return (
    <div className='bg-red-500 h-full'>
      <Map  />
    </div>
  )
}
