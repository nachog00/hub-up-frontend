'use client'; 

import BaseLayout from '@/components/BaseLayout';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react'
import Component from '@/components/Details/components/HostSummary';

const fetchEventData = async (id: string) => {

  return {
    id,
    // name: `Event ${id}`,
    // date: '2024-08-24',
    // location: 'Online',
    // description: 'Description of the event.',

  };
};

const EventPage = () => {
  const { id } = useParams(); 
//   const [eventData, setEventData] = useState<any>(null); 

//   useEffect(() => {
//     if (id) {
//       fetchEventData(id).then(data => setEventData(data));
//     }
//   }, [id]);

  return <BaseLayout>
    <Heading size='2xl'>
        Event details
    </Heading>
    <p>is hosting this event.</p>
    <Component/>
  </BaseLayout>
};

export default EventPage;
