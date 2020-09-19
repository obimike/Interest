import React, { useState } from "react";
import NewsCard from "../components/NewsCard";

import {
  Stack,
  Button,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
  Heading,
} from "@chakra-ui/core";

export default () => {
  const [url, setUrl] = useState("");
  const [mQuery, setMquery] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { search_query } = e.target;

    if (search_query.value.trim() !== "") {
      const query = search_query.value.trim();
      setMquery(query);
      search_query.value = "";
      fetchSearch(query);
    }
  };

  const fetchSearch = (query) => {
    const newsApiKey = "7ad5acec044f4b19a84c3b197b32a6f0";
    const searchURL = `newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&pageSize=30&apiKey=${newsApiKey}`;
    setUrl(searchURL);
  };

  return (
    <Box
      margin="auto"
      width={[
        "100%", // base
        "100%", // 480px upwards
        "90%", // 768px upwards
        "85%", // 992px upwards
      ]}
      p={[1, 2, 5, 5]}
    >
      <form onSubmit={(e) => onSubmitForm(e)}>
        <Stack alignItems="center" m={5}>
          <Heading as="h3">Look-Up</Heading>
          <InputGroup
            width={[
              "75%", // base
              "75%", // 480px upwards
              "50%", // 768px upwards
              "50%", // 992px upwards
            ]}
            variant="outline"
            size="lg"
          >
            <InputLeftElement
              children={<Icon name="search" color="gray.300" />}
            />
            <Input
              name="search_query"
              focusBorderColor="teal.500"
              placeholder="LookUp Interest..."
              rounded="lg"
            />
          </InputGroup>
          <Button
            width={[
              "25%", // base
              "25%", // 480px upwards
              "15%", // 768px upwards
              "15%", // 992px upwards
            ]}
            variantColor="teal"
            size="md"
            rounded="lg"
            type="submit"
          >
            Search
          </Button>
        </Stack>
      </form>
      {url && (
        <Box>
          <Text my={5} textAlign="center" fontSize="24px">
            Showing Results for "<b>{mQuery}</b>"
          </Text>
          <NewsCard url={url} />
        </Box>
      )}
    </Box>
  );
};
