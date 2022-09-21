import { useContext } from "react";
import { IpAddressInput } from "./IpAddressInput"
import { DetailsCard } from './DetailsCard';
import { IpAddressContext } from "../context/IpAddressContext";
import { useEffect } from "react";
import { getOwnerIp } from "../services/getOwnerIp";
import { getIpAddressInfo } from "../services/getIpAddressInfo";

export const Header = () => {

  const { ipAddress, setIpAddress } = useContext( IpAddressContext );
  
  useEffect(() => {

    (async () => {
      
      setIpAddress({
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
        console.log({error});
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
          <DetailsCard 
            ip={ ipAddress?.ip }
            isp={ ipAddress?.isp }
            location={ ipAddress?.location }
          />
        </div>
      </div>


    </header>
  )
}
