"use client"

import events from "@/mock/events";
import { Card, Divider, Heading } from "@chakra-ui/react";
import EventListItem from "../Event/EventListItem";

export default function UpcommingEvents() {

    return (
        <Card padding={2} rounded={5} height={'100%'}>
            <Heading className="mb-4" as={'h4'} size='md'>Upcoming Events</Heading>
            <div className="flex col gap-1">
                {events.map((event, i) => {
                    return (<>
                        {i != 0 && <Divider />}
                        <EventListItem event={event} />
                    </>)
                })}
            </div>
        </Card>
    );
}
