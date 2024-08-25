import { Card, Divider, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Select, Stack, Textarea, Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { useState } from "react";
import InfoTooltip from "@/components/InfoTooltip";

export default function HostSummary() {
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

    const venues = [
        { id: 1, nombre: 'Venue 1', calle_nombre: 'Main St', calle_altura: '123' },
        { id: 2, nombre: 'Venue 2', calle_nombre: 'Second St', calle_altura: '456' },
    ];

    return (
        <>
            <Flex 
                boxShadow="lg"
                borderRadius="md" 
                p={4} 
                direction={{ base: 'column', md: 'row' }} 
                alignItems="center" 
                justifyContent="space-between"
                w="full"
                wrap="wrap" 
            >
                <Flex direction="column" alignItems="center" mb={{ base: 4, md: 0 }}>
                    <Text fontSize="lg" fontWeight="bold">Hosted events</Text>
                    <Text fontSize="2xl">7</Text>
                </Flex>

                <Flex direction="column" alignItems="center" mb={{ base: 4, md: 0 }}>
                    <Text fontSize="lg" fontWeight="bold">reputation</Text>
                    <Flex alignItems="center">
                        <Text fontSize="2xl">4.8</Text>
                    </Flex>
                </Flex>

                <Flex direction="column" alignItems="center" mb={{ base: 4, md: 0 }}>
                    <Text fontSize="lg" fontWeight="bold">last event</Text>
                    <Text fontSize="2xl">1 month</Text>
                    <Text fontSize="md">ago</Text>
                </Flex>

                <Flex alignItems="center" mb={{ base: 4, md: 0 }}>
                    <Avatar size="lg" name="Oxasda" src="/path-to-image.jpg" />
                    <Box ml={{ base: 0, md: 3 }} textAlign={{ base: 'center', md: 'left' }}>
                        <Text fontSize="lg" fontWeight="bold">Oxasda...2s3</Text>
                        <Text fontSize="sm">"I like to meet cryptopunks and talk about zk"</Text>
                    </Box>
                </Flex>
            </Flex>

            <FormControl>
                <FormLabel>Venue</FormLabel>
                <Select placeholder="Select a venue">
                    {venues.map(v => (
                        <option key={v.id} value={v.id}>
                            {`${v.nombre} - ${v.calle_nombre} ${v.calle_altura}`}
                        </option>
                    ))}
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
                <Textarea placeholder="Event info for your atendees" />
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
                <Textarea placeholder="Explain your attendees what you need the price money for (for example: booking a cowork spot)" />
            </FormControl>

            <Divider />

            <FormLabel>Summary</FormLabel>

            <InfoPill
                upperText="each attende pays"
                middleText={`${Number(formData.atendeeLockupAmount) + Number(formData.price)} USDC`}
                lowerText="before the event"
                color="blue.100" 
            />

            <InfoPill
                upperText="if they attend, they get"
                middleText={`${formData.atendeeLockupAmount} USDC * #attendees`}
                lowerText="after the event is over"
                color="green.100" 
            />

            <InfoPill
                upperText="if you organise well, you get"
                middleText={`${formData.price} USDC per attendee`}
                lowerText="after the event is over"
                color="red.100" 
            />

            <InfoPill
                upperText="you'll also get"
                middleText={`${formData.atendeeLockupAmount} USDC per missing attendee`}
                lowerText="after the event is over"
                color="yellow.100" 
            />
        </>
    );
}

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