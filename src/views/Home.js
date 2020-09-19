import React from "react";
import Panel from "../components/Panel";

import { Box, Heading, Divider } from "@chakra-ui/core";

import NewsCard from "../components/NewsCard";

import requests from "../utils/requests";

export default () => {
  return (
    <div>
      <Box
        height="auto"
        margin="auto"
        width={[
          "100%", // base
          "100%", // 480px upwards
          "95%", // 768px upwards
          "95%", // 992px upwards
        ]}
        p={[1, 2, 5, 5]}
      >
        <Panel />
        <Heading as="h4" size="md" my={10}>
          Top News
          <Divider borderColor="gray.200" />
        </Heading>
        <Box>
          <NewsCard url={requests.home} />
        </Box>
      </Box>
    </div>
  );
};
