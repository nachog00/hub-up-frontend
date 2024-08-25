import type { MeetupEvent } from "@/interfaces/Event";
import { Divider, Flex, SimpleGrid, type FlexProps } from "@chakra-ui/react";
import EventListItem from "./EventListItem";

type ListProps = { events: MeetupEvent[], containerProps?: FlexProps };
export default function ListEvents({ events, containerProps }: ListProps) {
    return (
        <Flex {...containerProps} direction={'column'}>
            <SimpleGrid columns={4} spacing={1} padding={2}>
                <span><b>Date</b></span>
                <span><b>Venue</b></span>
                <span><b>Host</b></span>
                <span></span>
            </SimpleGrid>
            <Divider />
            {events.map((event, i) => <>
                {i > 0 && <Divider />}
                <EventListItem key={event.id} event={event} />
            </>)}
        </Flex>
    );
}