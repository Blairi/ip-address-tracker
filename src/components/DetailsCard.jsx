import { useContext } from "react"
import { IpAddressContext } from "../context/IpAddressContext"

export const DetailsCard = ({ip = '', location = {}, isp = ''}) => {

  const { ipAddress } = useContext( IpAddressContext );

  return (
    <div className='bg-white rounded-lg flex flex-col items-center gap-3 py-5'>

      {
        ipAddress?.isLoading 
        ? (
          <div className="lds-dual-ring"></div>
        )
        : (
          <>
            <div>
              <h3 className='text-xs text-[#969696] text-center'>IP ADDRESS</h3>
              <span className='text-lg font-bold text-[#2b2b2b]'>{ip}</span>
            </div>

            <div>
              <h3 className='text-xs text-[#969696] text-center'>LOCATION</h3>
              <span className='text-lg font-bold text-[#2b2b2b]'>{location.city}, {location.region}, {location.postalCode}</span>
            </div>

            <div>
              <h3 className='text-xs text-[#969696] text-center'>TIMEZONE</h3>
              <span className='text-lg font-bold text-[#2b2b2b]'>{location.timezone}</span>
            </div>

            <div>
              <h3 className='text-xs text-[#969696] text-center'>ISP</h3>
              <span className='text-lg font-bold text-[#2b2b2b]'>{isp}</span>
            </div>
          </>
        )
      }

    </div>
  )
}
