"use client"

import BaseLayout from "@/components/BaseLayout";
import MapComponent from "@/components/Map/Map";
import { Text, SimpleGrid, Box} from '@chakra-ui/react'

export default function EventNew(){
    return <BaseLayout>
        <Text as="b" fontSize={"4xl"} >NEW EVENT</Text>
        <p>By hosting an event, you have to pick up a venue and decide on the event's prices</p>
        <SimpleGrid columns={[2, null, 3]} spacing='center'spacing='40px' >
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'>
                <MapComponent/>
            </Box>
        </SimpleGrid>
    </BaseLayout>
}