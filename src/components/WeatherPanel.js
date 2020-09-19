import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

import {
  Box,
  Image,
  Skeleton,
  Flex,
  Stack,
  Heading,
  Text,
  Divider,
  SimpleGrid,
} from "@chakra-ui/core";

const d = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default ({ fetchUrl }) => {
  const [weather, setWeather] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState([]);
  const [weatherDesc, setWeatherDesc] = useState([]);
  const [weatherMain, setWeatherMain] = useState([]);
  const [country, setCountry] = useState([]);
  const [wind, setWind] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchWeather() {
      const request = await axios.get(fetchUrl);
      setWeather(request.data);
      const icon = request.data.weather[0].icon;
      setWeatherIcon(`http://openweathermap.org/img/wn/${icon}@2x.png`);
      setWeatherDesc(request.data.weather[0].main);
      setWeatherMain(request.data.main);
      setCountry(request.data.sys.country);
      setWind(request.data.wind);
      setLoading(false);
    }
    fetchWeather();
  }, [fetchUrl]);

  return (
    <Box
      my="5px"
      height={180}
      objectFit="cover"
      borderRadius="lg"
      border="1px"
      borderColor="gray.200"
      p={2}
    >
      <Box>
        {loading && (
          <Box justifyItems="center">
            <Skeleton height="20px" my="10px" />
            <Skeleton height="20px" my="10px" />
            <Skeleton height="20px" my="10px" />
            <Skeleton height="20px" my="10px" />
            <Skeleton height="20px" my="10px" />
          </Box>
        )}

        {!loading && (
          <Flex>
            <Stack>
              <Box className="dateHolder">
                <Heading as="h4" size="md">
                  {days[d.getDay()]}
                </Heading>
                <Text mt={2}>
                  {d.getDate()}, {months[d.getMonth()]} {d.getFullYear()}
                </Text>
              </Box>
              <Box className="tempHolder" borderColor="gray">
                <Stack isInline>
                  <Box>
                    <Image size={80} src={weatherIcon} alt="Weather Icon" />
                    <Text textAlign="center" fontWeight="700" fontSize="md">
                      {weatherDesc}
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      textAlign="center"
                      size="lg"
                      fontSize="70px"
                      my="auto"
                    >
                      {weatherMain.temp}
                      <sup fontSize="50px">&#8728;c</sup>
                    </Heading>
                  </Box>
                </Stack>
              </Box>
            </Stack>
            <Divider borderColor="gray.200" orientation="vertical" />
            <Stack>
              <Heading as="h4" size="md" textAlign="center">
                {weather.name}, {country}
                <Divider borderColor="gray.200" />
              </Heading>
              <SimpleGrid columns={2} spacing={2}>
                <Text>Humidity</Text>
                <Text>{weatherMain.humidity}%</Text>

                <Text>Pressure</Text>
                <Text>{weatherMain.pressure}hPa</Text>

                <Text>Wind Direction</Text>
                <Text>
                  {wind.deg}
                  <sup>&#8728;</sup>
                </Text>

                <Text>Wind Speed</Text>
                <Text>{wind.speed}m/s</Text>
              </SimpleGrid>
            </Stack>
          </Flex>
        )}
      </Box>
    </Box>
  );
};
