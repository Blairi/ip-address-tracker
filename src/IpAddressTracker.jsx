import { AddressMap } from './components/AddressMap'
import { Header } from './components/Header'
import { IpAddressProvider } from './context/IpAddressProvider'

export const IpAddressTracker = () => {
  return (
    <IpAddressProvider>

      <div className='min-h-screen overflow-hidden'>

        <Header />

        <AddressMap />

      </div>
      
    </IpAddressProvider>
  )
}
