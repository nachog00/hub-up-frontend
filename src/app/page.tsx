"use client";

// import { MainPane } from "@/components";
import BaseLayout from "@/components/BaseLayout";
import { HostAnEventCard } from "@/components/HostAnEventCard";
import { NearbyEvents } from "@/components/NearbyEvents";
import { UpcommingEvents } from "@/components/UpcommingEvents";
import { GridItem, SimpleGrid, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <BaseLayout>

      <Stack spacing={2}>


        <SimpleGrid columns={[1, null, 4]} spacing={2}>
          <GridItem colSpan={[1, null, 3]}>
            <UpcommingEvents />
          </GridItem>
          <GridItem colSpan={[1, null, 1]}>
            <HostAnEventCard />
          </GridItem>
        </SimpleGrid>

        <NearbyEvents />

      </Stack>
    
    </BaseLayout>
  );
}
