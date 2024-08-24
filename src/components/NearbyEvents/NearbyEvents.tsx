"use client"

import { Card, Heading } from "@chakra-ui/react";
import { useState } from "react";

export default function NearbyEvents() {
    const [displayMode, setDisplayMode] = useState<'map' | 'list'>('map');

    return (
        <Card padding={2}>
            <Heading size="md" as='h2' className='mb-4'>Nearby Events</Heading>
            <div className="flex col gap-1">
                <div className="flex gap-1">
                    <button onClick={() => setDisplayMode('map')}>Map</button>
                    <button onClick={() => setDisplayMode('list')}>List</button>
                </div>
                {displayMode === 'map' ? <Map /> : <List />}
            </div>
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

function List() {
    return (
        <div>
            <h2>List</h2>
        </div>
    );
}