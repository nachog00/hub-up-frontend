import { FormControl, FormHelperText, FormLabel, Input, Select, Stack, Text } from "@chakra-ui/react";
import BaseModal from "./BaseModal";
import venues from '@/mock/venues';

export default function NewEvent({ children }: { children: React.ReactNode }) {
    return (
        <BaseModal title="New Event" target={children}>
            <Stack spacing={4}>
                <Text>By hosting an event, you have to pick up a venue and decide on the event's prices</Text>

                <FormControl>
                    <FormLabel>Venue</FormLabel>
                    <Select placeholder='Select a venue'>
                        {venues.map(v => {
                            return <option key={v.id} value={v.id}>{`${v.nombre} - ${v.calle_nombre} ${v.calle_altura}`}</option>
                        })}
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel>Date</FormLabel>
                    <Input type="date" placeholder="Date" />
                </FormControl>

                <FormControl>
                    <FormLabel>Time</FormLabel>
                    <Input type="time" />
                </FormControl>

                <FormControl>
                    <FormLabel>Duration</FormLabel>
                    <Input type="number" placeholder="Duration" />
                </FormControl>

                <FormControl>
                    <FormLabel>Min Participants</FormLabel>
                    <Input type="number" placeholder="Min Participants" />
                </FormControl>

                <FormControl>
                    <FormLabel>Max Participants</FormLabel>
                    <Input type="number" placeholder="Max Participants" />
                </FormControl>
                
            </Stack>
        </BaseModal>
    );
}