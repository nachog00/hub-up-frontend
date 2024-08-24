"use client"

import events from "@/mock/events";
import { Box, Button, Card, Divider, Heading, SimpleGrid } from "@chakra-ui/react";

export default function UpcommingEvents() {

    return (
        <Card padding={2} rounded={5} height={'100%'}>
            <Heading className="mb-4" as={'h4'} size='lg'>Upcoming Events</Heading>
            <div className="flex col gap-1">
                {events.map((event,i) => {
                    return (<>
                        {i != 0 && <Divider />}
                        <EventItem event={event} />
                    </>)
                })}
            </div>
        </Card>
    );
}

type Event = typeof events[0];

function EventItem({ event }: { event: Event }) {
    return (
        <Box>
            <SimpleGrid columns={4} spacing={1} padding={2}>
                <span>{new Date(event.date).toLocaleString()}</span>
                <span>{event.location.name}</span>
                <span>{event.host.name}</span>
                <span><Button size={'sm'}>See more</Button></span>
            </SimpleGrid>
        </Box>
    );
}