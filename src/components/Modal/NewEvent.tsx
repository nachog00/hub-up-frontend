import venues from '@/mock/venues';
import { Card, Divider, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Link, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import InfoTooltip from '../InfoTooltip';
import BaseModal from "./BaseModal";

export default function NewEvent({ children }: { children: React.ReactNode }) {

    const [formData, setFormData] = useState({
        venue: '',
        date: '',
        time: '',
        duration: '',
        minParticipants: '',
        maxParticipants: '',
        description: '',
        atendeeLockupAmount: '',
        price: '',
        costDescription: '',
    });

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
                    <Input type="number" min={2} max={100} placeholder="Min Participants" />
                </FormControl>

                <FormControl>
                    <FormLabel>Max Participants</FormLabel>
                    <Input type="number" min={3} max={101} placeholder="Max Participants" />
                </FormControl>

                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea placeholder='Event info for your atendees' />
                </FormControl>

                <FormControl>
                    <FormLabel style={{ display: 'inline' }}>Atendee lockup amount</FormLabel>
                    <InfoTooltip text="This is the amount of money each attende will pay to attend. You'll get this if you organise well" />
                    <InputGroup>
                        <InputLeftAddon>USDC</InputLeftAddon>
                        <Input type="number" min={0} onChange={e => {
                            setFormData({ ...formData, atendeeLockupAmount: e.target.value })
                        }} />
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <FormLabel style={{ display: 'inline' }}>Price</FormLabel>
                    <InfoTooltip text="This is the amount of money each attende will pay to attend. You'll get this if you organise well" />
                    <InputGroup>
                        <InputLeftAddon>USDC</InputLeftAddon>
                        <Input type="number" min={0} onChange={e => {
                            setFormData({ ...formData, price: e.target.value })
                        }} />
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <FormLabel>Cost description</FormLabel>
                    <Textarea placeholder='Explain your attendees what you need the price money for (for example: booking a cowork spot)' />
                </FormControl>

                <Divider />

                <FormLabel>Summary</FormLabel>

                <InfoPill
                    upperText='each attende pays'
                    middleText={`${Number(formData.atendeeLockupAmount) + Number(formData.price)} USDC`}
                    lowerText='before the event'
                    color='blue.100' />

                <InfoPill
                    upperText='if they attend, they get'
                    middleText={`${formData.atendeeLockupAmount} USDC * #attendees`}
                    lowerText='after the event is over'
                    color='green.100' />

                <InfoPill
                    upperText='if you organise well, you get'
                    middleText={`${formData.price} USDC per attendee`}
                    lowerText='after the event is over'
                    color='red.100' />

                <InfoPill
                    upperText="you'll also get"
                    middleText={`${formData.atendeeLockupAmount} USDC per missing attendee`}
                    lowerText='after the event is over'
                    color='yellow.100' />

                <Divider />

                <Stack>
                    <Text>By hosting an event, you agree to the terms and conditions</Text>
                    <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Read the terms and conditions</Link>
                </Stack>

                <Divider />
                
                <FormControl>
                    <FormLabel>Venue</FormLabel>
                    <Select placeholder='Select a venue'>
                        {venues.map(v => {
                            return <option key={v.id} value={v.id}>{`${v.nombre} - ${v.calle_nombre} ${v.calle_altura}`}</option>
                        })}
                    </Select>
                </FormControl>


            </Stack>
        </BaseModal>
    );
}

import { type BackgroundProps } from '@chakra-ui/react';
import { useState } from 'react';

function InfoPill({ upperText, middleText, lowerText, color }: { upperText: string, middleText: string, lowerText: string, color: BackgroundProps['bg'] }) {
    return (
        <Card padding={2} rounded={5} width={'100%'} height={'100%'} bg={color} borderRadius={'xl'}>
            <Stack spacing={2} align="center">
                <Text fontSize='sm'>{upperText}</Text>
                <Text fontSize='lg'>{middleText}</Text>
                <Text fontSize='sm'>{lowerText}</Text>
            </Stack>
        </Card>
    )
}