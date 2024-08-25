import type { MeetupEvent } from "@/interfaces/Event";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";

type EventListItemProps = {
    event: MeetupEvent;
}
export default function EventListItem({ event }: EventListItemProps) {
    return (
        <Box>
            <SimpleGrid columns={4} spacing={1} padding={2}>
                <span>{new Date(event.date).toLocaleString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })}</span>
                <span>{event.location.name}</span>
                <span>{event.host.name}</span>
                <span><Button size={'sm'}>See more</Button></span>
            </SimpleGrid>
        </Box>
    );
}