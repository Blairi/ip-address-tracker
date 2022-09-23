import { useContext } from "react";
import { IpAddressInput } from "./IpAddressInput"
import { DetailsCard } from './DetailsCard';
import { IpAddressContext } from "../context/IpAddressContext";
import { useEffect } from "react";
import { getOwnerIp } from "../services/getOwnerIp";
import { getIpAddressInfo } from "../services/getIpAddressInfo";

export const Header = () => {

  const { setIpAddress } = useContext( IpAddressContext );
  
  useEffect(() => {

    (async () => {
      
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

      try 
      {
        //
        const { ip } = await getOwnerIp();
        const data = await getIpAddressInfo({ ip: ip });

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
      catch (error) {
        setIpAddress({
          errorMessage: 'Error, try disable the Ad Blocker or try another browser',
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
        })
      }

    })();

  }, [])
  

  return (
    <header
      className='bg-pattern pt-5 py-20 relative z-20'
    >

      <div className="w-[88%] max-w-[1280px] mx-auto">
        <h1 className="font-bold text-white text-2xl md:text-4xl text-center mb-5">IP Address Tracker</h1>

        <div className="mx-auto max-w-[800px]">
          <IpAddressInput />
        </div>

        <div className='absolute top-[50%] w-[88%] max-w-[1280px] mt-10'>
          <DetailsCard />
        </div>
        
      </div>


    </header>
  )
}
