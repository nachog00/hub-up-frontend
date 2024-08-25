"use client"

import events from "@/mock/events";
import { Box, Button, Card, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { ListEvents } from "../Event";
import MapComponent from "../Map/Map";

export default function NearbyEvents() {

    const [displayMode, setDisplayMode] = useState<'map' | 'list'>('map');

    return (
        <Card padding={2}>
            <Flex justify={'space-between'} marginBottom={4}>
                <Heading size="md" as='h2' className='mb-4'>Nearby Events</Heading>
                <Button size={'sm'} onClick={() => setDisplayMode(prev => prev == 'list' ? 'map' : 'list')}>
                    {displayMode === 'map' ? 'List View' : 'Map View'}
                </Button>
            </Flex>
            {displayMode === 'map' ? <Map /> : <ListEvents events={events} />}
        </Card>
    );
}

function Map() {
    return (
        <Box>
            <MapComponent />
        </Box>
    );
}