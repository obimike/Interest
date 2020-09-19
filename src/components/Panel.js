import React from "react";
import SportPanel from "./SportPanel";
import WeatherPanel from "./WeatherPanel";
import ExchangePanel from "./ExchangePanel";
import requests from "../utils/requests";

import { SimpleGrid, Stack } from "@chakra-ui/core";

export default () => {
  return (
    <div>
      <SimpleGrid justifyContent="center" minChildWidth="360px" spacing="10px">
        <SportPanel width={["auto"]} height="320px" />
        <Stack height="320px" spacing={5}>
          <WeatherPanel fetchUrl={requests.weather} />
          <ExchangePanel />
        </Stack>
      </SimpleGrid>
    </div>
  );
};
