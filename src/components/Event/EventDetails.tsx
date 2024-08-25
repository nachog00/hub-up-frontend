import { Button, Card, Divider, Flex, FormControl, FormLabel, GridItem, Input, InputGroup, InputLeftAddon, Select, SimpleGrid, Stack, Text, Textarea } from "@chakra-ui/react";
import InfoTooltip from '../InfoTooltip';
export default function EventDetails({ event }: { event: MeetupEvent }) {

    return (
        <Stack spacing={4} marginTop={43}>

            <SimpleGrid columns={2} spacing={2}>

                <GridItem colSpan={[2, 1]}>

                    <SimpleGrid columns={2} spacing={2} alignItems={'center'} alignContent={'center'}>

                        <FormControl>
                            <FormLabel>Venue</FormLabel>
                            <Input type="text" value={event.location.name} readOnly />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Date</FormLabel>
                            <Input type="date" placeholder="Date" value={event.date} readOnly />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Time</FormLabel>
                            <Input type="time" value={event.date} readOnly />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Duration</FormLabel>
                            <Input type="number" placeholder="Duration" value={event.duration} readOnly />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Min Participants</FormLabel>
                            <Input type="number" min={2} max={100} placeholder="Min Participants" value={event.minParticipants} readOnly />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Max Participants</FormLabel>
                            <Input type="number" min={3} max={101} placeholder="Max Participants" value={event.maxParticipants} readOnly />
                        </FormControl>

                    </SimpleGrid>

                </GridItem>

                <GridItem colSpan={[2, 1]}>
                    <MapComponent events={[event]} />
                </GridItem>

                <GridItem colSpan={2}>

                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Textarea placeholder='Event info for your atendees' value={event.description} readOnly />
                    </FormControl>

                </GridItem>

                <GridItem colSpan={[2, 1]}>
                    <FormControl>
                        <FormLabel style={{ display: 'inline' }}>Atendee lockup amount</FormLabel>
                        <InfoTooltip text="This is the amount of money each attende will pay to attend. You'll get this if you organise well" />
                        <InputGroup>
                            <InputLeftAddon>USDC</InputLeftAddon>
                            <Input type="number" min={0} value={event.atendeeLockupAmount} readOnly />
                        </InputGroup>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={[2, 1]}>
                    <FormControl>
                        <FormLabel style={{ display: 'inline' }}>Price</FormLabel>
                        <InfoTooltip text="This is the amount of money each attende will pay to attend. You'll get this if you organise well" />
                        <InputGroup>
                            <InputLeftAddon>USDC</InputLeftAddon>
                            <Input type="number" min={0} value={event.price} readOnly />
                        </InputGroup>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>

                    <FormControl>
                        <FormLabel>Cost description</FormLabel>
                        <Textarea placeholder='Explain your attendees what you need the price money for (for example: booking a cowork spot)' value={event.costDescription} readOnly />
                    </FormControl>

                </GridItem>


                <GridItem colSpan={2}>
                    <FormLabel>Summary</FormLabel>
                </GridItem>

                <GridItem colSpan={[2,1]}>
                    <InfoPill
                        upperText='you pay'
                        middleText={`${Number(event.atendeeLockupAmount) + Number(event.price)} USDC`}
                        lowerText='before the event'
                        color='blue.50' />
                </GridItem>

                <GridItem colSpan={[2,1]}>
                    <InfoPill
                        upperText='if you attend, you get back'
                        middleText={`${event.atendeeLockupAmount} USDC`}
                        lowerText='after the event is over'
                        color='green.50' />
                </GridItem>

                {/* <GridItem colSpan={[2,1]}>
                    <InfoPill
                        upperText='if you organise well, you get'
                        middleText={`${event.price} USDC per attendee`}
                        lowerText='after the event is over'
                        color='red.100' />
                </GridItem>

                <GridItem colSpan={[2,1]}>
                    <InfoPill
                        upperText="you'll also get"
                        middleText={`${event.atendeeLockupAmount} USDC per missing attendee`}
                        lowerText='after the event is over'
                        color='yellow.100' />
                </GridItem> */}

                <GridItem colSpan={2}>
                    <Divider />
                </GridItem>

                <FormControl>
                    <FormLabel>Venue</FormLabel>
                    <Select placeholder='Protocol' value={event.protocol} isReadOnly disabled>
                        <option value='avalanche'>Avalanche</option>
                        <option value='polygon'>Polygon</option>
                        <option value='arbitrum'>Arbitrum</option>
                    </Select>
                </FormControl>

                <Flex direction='column' align='center' marginTop={4}>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                        Join event
                    </Button>
                </Flex>

            </SimpleGrid>

        </Stack>
    );
}

import type { MeetupEvent } from '@/interfaces/Event';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { type BackgroundProps } from '@chakra-ui/react';
import MapComponent from '../Map/Map';

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