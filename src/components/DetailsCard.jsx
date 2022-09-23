import { useContext } from "react"
import { IpAddressContext } from "../context/IpAddressContext"

export const DetailsCard = () => {

  const { ipAddress } = useContext( IpAddressContext );

  return (
    <div className='bg-white rounded-lg flex flex-col items-center gap-3 py-5'>

      {
        ipAddress?.error && (
          <p className="font-bold text-red-500 text-lg">{ipAddress?.errorMessage}</p>
        )
      }

      {

        ipAddress?.isLoading
        ? (
          <div className="lds-dual-ring"></div>
        )
        : (
          !ipAddress?.error 
          &&
          <>
            <div>
              <h3 className='text-xs text-[#969696] text-center'>IP ADDRESS</h3>
              <span className='text-lg font-bold text-[#2b2b2b]'>{ipAddress?.ip}</span>
            </div>

            <div>
              <h3 className='text-xs text-[#969696] text-center'>LOCATION</h3>
              <span className='text-lg font-bold text-[#2b2b2b]'>
                {ipAddress?.location.city}, {ipAddress?.location.region}, {ipAddress?.location.postalCode}
              </span>
            </div>

            <div>
              <h3 className='text-xs text-[#969696] text-center'>TIMEZONE</h3>
              <span className='text-lg font-bold text-[#2b2b2b]'>{ipAddress?.location.timezone}</span>
            </div>

            <div>
              <h3 className='text-xs text-[#969696] text-center'>ISP</h3>
              <span className='text-lg font-bold text-[#2b2b2b]'>{ipAddress?.isp}</span>
            </div>
          </>
        )
      }

    </div>
  )
}
