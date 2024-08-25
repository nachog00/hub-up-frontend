"use client"

import { Flex, Box } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import type { ReactNode } from "react";
import Sidebar from "./ui/sideBar";
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