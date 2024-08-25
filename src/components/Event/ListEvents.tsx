import type { MeetupEvent } from "@/interfaces/Event";
import { Divider, Flex, type FlexProps } from "@chakra-ui/react";
import EventListItem from "./EventListItem";

type ListProps = { events: MeetupEvent[], containerProps?: FlexProps };
export default function ListEvents({ events, containerProps }: ListProps) {
    return (
        <Flex {...containerProps} direction={'column'}>
            {events.map((event,i) => <>
                {i > 0 && <Divider />}
                <EventListItem key={event.id} event={event} />
            </>)}
        </Flex>
    );
}