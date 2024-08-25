'use client'; 

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const fetchEventData = async (id: string) => {

  return {
    id,
    name: `Event ${id}`,
    date: '2024-08-24',
    location: 'Online',
    description: 'Description of the event.',

  };
};

const EventPage = () => {
  const { id } = useParams(); 
  const [eventData, setEventData] = useState<any>(null); 

  useEffect(() => {
    if (id) {
      fetchEventData(id).then(data => setEventData(data));
    }
  }, [id]);

  return (
    <div>
      <h1>{eventData.name}</h1>
      <p>Date: {eventData.date}</p>
      <p>Location: {eventData.location}</p>
      <p>Description: {eventData.description}</p>
    </div>
  );
};

export default EventPage;
