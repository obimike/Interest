import React from "react";
import Favicon from "../favico.ico";

import { Link } from "react-router-dom";

import {
  Box,
  Heading,
  Flex,
  useColorMode,
  IconButton,
  Stack,
} from "@chakra-ui/core";

export default (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      boxShadow="md"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <img
            rounded="full"
            width="32px"
            height="32px"
            src={Favicon}
            alt="logo"
          />
        </Link>

        <Heading
          color="teal.700"
          mx={3}
          as="h1"
          size="xl"
          letterSpacing={"-.1rem"}
        >
          <Link to="/">Interest</Link>
        </Heading>
      </Flex>

      <Box
        display="flex"
        width="auto"
        alignItems="center"
        flexGrow={1}
        fontWeight="bold"
        fontSize="sm"
        letterSpacing="wide"
        color="teal.600"
        my={2}
      >
        <Stack spacing={4} align="center" isInline>
          <Box>
            <Link to="/bitcoin">BitCoin</Link>
          </Box>
          <Box>
            <Link to="/technology">Technology</Link>
          </Box>
          <Box>
            <Link to="/forex">Forex</Link>
          </Box>
          <Box>
            <Link to="/look-up">Look-up</Link>
          </Box>
        </Stack>
      </Box>

      <IconButton
        bg="transparent"
        variant="outline"
        variantColor="teal"
        aria-label="toggle color mode"
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
        color="teal.600"
      />
    </Flex>
  );
};
