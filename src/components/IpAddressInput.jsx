import { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { getIpAddressInfo } from '../services/getIpAddressInfo';
import { IpAddressContext } from '../context/IpAddressContext';

import iconArrow from '../assets/icon-arrow.svg';

const initialForm = {
  ip: ''
}

export const IpAddressInput = () => {

  const { setIpAddress } = useContext( IpAddressContext );

  const [ values, handleInputChange, reset ] = useForm( initialForm );

  const searchIp = async () => {

    try {
      
      setIpAddress({
        errorMessage: null,
        isLoading: true,
        error: false,
        ip: null,
        isp: null,
        location: {
          lat: 0,
          lng: 0,
          city: null,
          region: null,
          postalCode: null,
          timezone: null,
        },
      });

      const data = await getIpAddressInfo({ ipAddress: values.ip });

      if (data.status === 'success'){
        setIpAddress({
          errorMessage: null,
          isLoading: false,
          error: false,
          ip: data.query,
          isp: data.as,
          location: {
            lat: data.lat,
            lng: data.lon,
            city: data.city,
            region: data.regionName,
            postalCode: data.zip,
            timezone: data.timezone,
          },
        });
      }

      else{
        setIpAddress({
          errorMessage: 'Error Invalid IP Address',
          isLoading: false,
          error: true,
          ip: null,
          isp: null,
          location: {
            lat: 0,
            lng: 0,
            city: null,
            region: null,
            postalCode: null,
            timezone: null,
          },
        });
      }

    } catch (error) {
      console.log({error});
    }

    reset();

  }

  return (
    <div className='flex rounded-lg overflow-hidden'>

      <input 
        type='text'
        className="py-3 px-4 w-10/12"
        placeholder="Search for any IP address"
        name='ip'
        value={ values.ip }
        onChange={ handleInputChange }
      />

      <button 
        className={ values.ip.length < 3 ? 'bg-[#878787] w-2/12 flex justify-center items-center' : 'bg-[#2b2b2b] w-2/12 flex justify-center items-center' }
        onClick={ searchIp }
        disabled={ values.ip.length < 3 }
      >
        <img src={ iconArrow } alt="icon arrow" />
      </button>

    </div>
  )
}
