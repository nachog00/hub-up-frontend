"use client";
import { type FC } from "react";

import { Box, Text } from "@chakra-ui/react";

const Footer: FC = () => {
  return (
    <Box as="footer" p={"1rem"} position="sticky" bottom={0} zIndex={10} textAlign={"center"}>
      <Text fontSize={"sm"}>
        Made with ❤️ in Buenos Aires, Argentina.
      </Text>
    </Box>
  );
};

export default Footer;
