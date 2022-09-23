import { useEffect, useState, useContext } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { IpAddressContext } from '../context/IpAddressContext';
import 'leaflet/dist/leaflet.css';

export const Map = () => {

  const { ipAddress } = useContext( IpAddressContext );
  const [position, setPosition] = useState([0, 0]);

  function ChangeView({ pos }) {
    const map = useMap();
    map.setView(pos, map.getZoom());
    return null;
  }

  useEffect(() => {
    if ( ipAddress && !ipAddress.isLoading ){ 
      setPosition([ipAddress.location.lat, ipAddress.location.lng]);
    }
  }, [ipAddress])
  

  return (
    <MapContainer center={ position } zoom={15} scrollWheelZoom={true} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={ position }>
        <Popup>
          { ipAddress?.isp }
        </Popup>
      </Marker>
      <ChangeView pos={ position }/>
    </MapContainer>
  )
}
