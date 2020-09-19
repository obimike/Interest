import React from "react";

import { Box, Flex, Text, Link } from "@chakra-ui/core";

import { SocialIcon } from "react-social-icons";

export default () => {
  const MenuItems = ({ children }) => (
    <Link mt={{ base: 4, md: 0 }} mr={6} display="flex">
      {children}
    </Link>
  );
  return (
    <div>
      <Box
        position="relative"
        display="block"
        width="100%"
        height="auto"
        flexGrow={1}
        style={{ bottom: 0 }}
        color="teal.700"
        // backgroundColor="gray.50"
        py={5}
      >
        <Flex justify="center">
          <Box>
            <Text fontSize="lg" mb={2}>
              Follow Us On Socials
            </Text>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              network="twitter"
              url=""
            />
            <SocialIcon
              style={{ marginLeft: 15, marginRight: 15, height: 40, width: 40 }}
              network="facebook"
              url=""
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              network="github"
              url=""
            />
          </Box>
        </Flex>
        <Flex justify="center" mt={2}>
          <MenuItems>Home</MenuItems>
          <MenuItems>BitCoin</MenuItems>
          <MenuItems>Technology</MenuItems>
          <MenuItems>Forex</MenuItems>
        </Flex>
        <Flex justify="center" mt={5}>
          <Text>&#169; Copyright - Interest</Text>
        </Flex>
      </Box>
    </div>
  );
};
