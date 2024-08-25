'use client';

import BaseLayout from '@/components/BaseLayout';
import HostSummary from '@/components/Details/components/HostSummary';
import type { MeetupEvent } from '@/interfaces/Event';
import events from '@/mock/events';
import { Avatar, Card, Divider, Flex, Grid, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

const getEventData = (id: number): MeetupEvent => {
  const event = events.find(event => event.id === id);
  if (!event) {
    throw new Error('Event not found');
  }
  return event
}

const EventPage = () => {

  const { id } = useParams();

  const eventData = getEventData(Number(id));

  return <BaseLayout>
    <Heading size='md'>
      Event details
    </Heading>
    <p>{eventData?.host.name} is hosting this event.</p>
    <HostSummaryComponent event={eventData} />
    
  </BaseLayout>
};

export default EventPage;

type HostSummaryComponentProps = {
  event: MeetupEvent;
}

function HostSummaryComponent({
  event
}: HostSummaryComponentProps) {
  const { host } = event
  return (
    <Card padding={2} marginY={2}>
      <SimpleGrid columns={12} spacing={2}>
        <GridItem colSpan={[12,4,2]}>
          <Flex direction="column" alignItems="center" mb={{ base: 4, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold">Hosted events</Text>
            <Text fontSize="2xl">7</Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={[12,4,2]}>
          <Flex direction="column" alignItems="center" mb={{ base: 4, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold">Reputation</Text>
            <Text fontSize="2xl">4.8</Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={[12,4,2]}>
          <Flex direction="column" alignItems="center" mb={{ base: 4, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold">Last event hosted</Text>
            <Text fontSize="2xl">1 month ago</Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={[12,12,6]}>
          <SimpleGrid columns={4}>
            <GridItem colSpan={1} justifyContent={'end'}>
              <Avatar size="lg" name={host.name} />
            </GridItem>
            <GridItem colSpan={3}>
              <Flex direction="column">
                <Text fontSize="lg" fontWeight="bold">{host.id}</Text>
                <Text fontSize="sm">"{host.bio}"</Text>
              </Flex>
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Card>
  );
}
