"use client"

import { Card, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { EventListItem } from "../Event";
import events from "@/mock/events";
import type { MeetupEvent } from "@/interfaces/Event";

export default function NearbyEvents() {

    const [displayMode, setDisplayMode] = useState<'map' | 'list'>('map');

    return (
        <Card padding={2}>
            <div className="flex space-between">
                <Heading size="md" as='h2' className='mb-4'>Nearby Events</Heading>
                    <div className="flex gap-1">
                        <button onClick={() => setDisplayMode('map')}>Map</button>
                        <button onClick={() => setDisplayMode('list')}>List</button>
                    </div>
            </div>
            {displayMode === 'map' ? <Map /> : <List events={events} />}
        </Card>
    );
}

function Map() {
    return (
        <div>
            <h2>Map</h2>
        </div>
    );
}

type ListProps = { events: MeetupEvent[] }

function List({ events }: ListProps) {
    return (
        <div>
            {events.map((event) => <EventListItem event={event} />)}
        </div>
    );
}