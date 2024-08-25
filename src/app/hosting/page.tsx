"use client";

// import { MainPane } from "@/components";
import BaseLayout from "@/components/BaseLayout";
import { UpcommingEvents } from "@/components/UpcommingEvents";
import { GridItem, SimpleGrid, Stack } from "@chakra-ui/react";

export default function Hosting() {
  return (
    <BaseLayout>
      <Stack spacing={2} align='center'>
        <SimpleGrid columns={[1, null, 4]} spacing={2}>
          <GridItem colSpan={[1, null, 3]}>
            <UpcommingEvents />
          </GridItem>
        </SimpleGrid>
      </Stack>
    </BaseLayout>
  );
}
