import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  InputGroup,
  InputLeftAddon,
  Input,
  Stack,
  Icon,
} from "@chakra-ui/core";

export default () => {
  const [NGN, setNGN] = useState("");
  const [US, setUS] = useState("");

  function formatCurrency(num) {
    var p = num.toFixed(3).split(".");
    return (
      p[0]
        .split("")
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "") +
      "." +
      p[1]
    );
  }

  const handleNGNToUS = (event) => {
    setNGN(event.target.value);
    let convertedValue = event.target.value / 381.68;
    setUS(formatCurrency(convertedValue));
    event.preventDefault();
  };

  const handleUSToNGN = (event) => {
    setUS(event.target.value);
    let convertedValue = 381.68 * event.target.value;
    setNGN(formatCurrency(convertedValue));
    event.preventDefault();
  };

  return (
    <Box
      my="5px"
      height="100%"
      objectFit="cover"
      borderRadius="lg"
      border="1px"
      borderColor="gray.200"
      p={2}
    >
      <Heading as="h4" opacity={0.5} size="md" textAlign="center">
        <span>{NGN}</span> Nigerian Naira = US Dollar <span>{US}</span>
      </Heading>

      <Flex mt={10}>
        <InputGroup variant="outline">
          <InputLeftAddon children="NGN (₦)" />
          <Input
            focusBorderColor="teal.500"
            type="number"
            roundedLeft="0"
            placeholder="0.00"
            onChange={handleNGNToUS}
            value={NGN}
          />
        </InputGroup>

        <Stack mx={3}>
          <Icon name="arrow-forward" />
          <Icon name="arrow-back" />
        </Stack>

        <InputGroup variant="outline">
          <InputLeftAddon children="US ($)" />
          <Input
            focusBorderColor="teal.500"
            type="number"
            roundedLeft="0"
            onChange={handleUSToNGN}
            placeholder="0.00"
            value={US}
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};
