import React, { useState, useEffect } from "react";

import axios from "../utils/axios";
import requests from "../utils/requests";
import ImagePlaceHolder from "../OIP.jfif";
import FormatDate from "../utils/FormatDate";

import { Box, Text, Flex, Skeleton } from "@chakra-ui/core";

import Carousel from "nuka-carousel";

export default () => {
  const [newsFeeds, setNewsFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  const sportURL = requests.sport;

  useEffect(() => {
    setLoading(true);
    async function fetchFeeds() {
      const request = await axios.get(sportURL);
      setNewsFeed(request.data.articles);
      setLoading(false);
    }
    fetchFeeds();
  }, [sportURL]);

  return (
    <Box>
      {loading && (
        <Box justifyItems="center">
          <Skeleton height="40px" my="10px" />
          <Skeleton height="20px" my="10px" />
          <Skeleton height="50px" my="10px" />
          <Skeleton height="20px" my="10px" />
          <Skeleton height="50px" my="10px" />
          <Skeleton height="20px" my="10px" />
          <Skeleton height="40px" my="10px" />
        </Box>
      )}
      {!loading && (
        <Carousel height="320px" autoplay>
          {newsFeeds.map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </Carousel>
      )}
    </Box>
  );
};

function Card({ item, key }) {
  return (
    <Box
      fallbackSrc={ImagePlaceHolder}
      height={320}
      style={{
        backgroundImage: `url(${item.urlToImage})`,
      }}
      backgroundSize="100%"
      backgroundRepeat="no-repeat"
      objectFit="cover"
    >
      <Box h={240}></Box>
      <Box p={3} backgroundColor="gray.900">
        <Text
          fontSize="md"
          opacity={1.5}
          fontWeight="bold"
          color="white"
          p={1}
          isTruncated
        >
          {item.title}
        </Text>

        <Flex justify="space-between" mt={5}>
          <Text fontSize="md" as="b" color="teal.400">
            {item.source.name}
          </Text>
          <Text fontSize="md" as="i" color="#FFF">
            <FormatDate pubDate={item} />
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
