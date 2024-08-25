"use client"

import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
// import {Sidebar} from "./Sidebar";

export default function BaseLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <Flex flexDirection="column" minHeight="100vh">
            <Header />

            <Box as="main" flex={1} p={4}>
                {children}
            </Box>

            <Footer />
        </Flex>
    );
}