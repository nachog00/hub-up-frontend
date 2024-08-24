"use client"
import { Button, Card, Stack, Text } from "@chakra-ui/react";

export default function HostAnEventCard() {
    return (
        <Card padding={4} rounded={5} height={'100%'}>
            <Stack height={'100%'} justify={'center'} align={'center'}>
                <Button colorScheme="blue" size="lg" width="100%" className="mb-4">Host an Event</Button>
                <Text align={'center'}>You'll be in charge of organising it</Text>
            </Stack>
        </Card>
    );
}