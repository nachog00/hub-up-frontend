"use client"

import events from "@/mock/events";
import { Card, Heading } from "@chakra-ui/react";
import { ListEvents } from "../Event";

export default function UpcommingEvents() {

    return (
        <Card padding={2} rounded={5} height={'100%'}>
            <Heading marginBottom={2} as={'h4'} size='md'>Upcoming Events</Heading>
            <ListEvents events={events} />
        </Card>
    );
}
