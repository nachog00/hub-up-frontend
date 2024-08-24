"use client"

import events from "@/mock/events";
import { Box, Card, Divider, SimpleGrid } from "@chakra-ui/react";

export default function UpcommingEvents() {

    return (
        <Box>
            <div className="flex flex col gap-2">
                {events.map((event) => {
                    return (<>
                        <EventItem event={event} />
                        <Divider />
                    </>)
                })}
            </div>
        </Box>
    );
}

type Event = typeof events[0];

function EventItem({ event }: { event: Event }) {
    return (
        <Card>
            <SimpleGrid columns={3} spacing={2} padding={2}>
                <span>{new Date(event.date).toLocaleString()}</span>
                <span>{event.location.name}</span>
                <span>{event.host.name}</span>
            </SimpleGrid>
        </Card>
    );
}