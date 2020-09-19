import React from "react";
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
          "90%", // 768px upwards
          "85%", // 992px upwards
        ]}
        p={[1, 2, 5, 5]}
      >
        <Heading as="h4" size="md" my={10}>
          BitCoin
          <Divider borderColor="gray.200" />
        </Heading>
        <Box>
          <NewsCard url={requests.bitcoin} />
        </Box>
      </Box>
    </div>
  );
};
