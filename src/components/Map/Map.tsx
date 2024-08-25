import type { MeetupEvent } from '@/interfaces/Event';
import mockEvents from '@/mock/events';
import L, { type LatLngExpression } from 'leaflet'; // Import Leaflet directly
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

type MapProps = {
  events?: MeetupEvent[];
}

function calculateCenter(events: MeetupEvent[]): LatLngExpression {
  const latSum = events.reduce((acc, event) => acc + event.location.coordinates[0], 0);
  const lngSum = events.reduce((acc, event) => acc + event.location.coordinates[1], 0);
  return [latSum / events.length, lngSum / events.length];
}

const MapComponent = ({ events = mockEvents }: MapProps) => {


  const center = calculateCenter(events);
  const [zoom] = useState(5);

  // Create a custom icon (optional)
  const customIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png', // Replace with your icon URL
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  return (
    <div className="map-container">
      <MapContainer center={center} zoom={zoom} style={{ height: "260px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {events.map((event) => (
          <Marker key={event.id} position={event.location.coordinates} icon={customIcon}>
            <Popup>
              {event.location.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;