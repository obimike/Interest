import React, { useState, useEffect } from "react";
import { Box, Image, Text, Flex, Skeleton } from "@chakra-ui/core";
import FormatDate from "../utils/FormatDate";
import axios from "../utils/axios";
import ImagePlaceHolder from "../OIP.jfif";

export default (props) => {
  const [newsFeeds, setNewsFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchFeeds() {
      const request = await axios.get(props.url);
      setNewsFeed(request.data.articles);
      setLoading(false);
    }
    fetchFeeds();
  }, [props.url]);

  return (
    <div>
      {loading && (
        <Flex justify="center" wrap="wrap">
          <Skeleton
            minW="302px"
            height="150px"
            width={[["100%", 1 / 2, 1 / 4]]}
            m={5}
          />
          <Skeleton
            minW="302px"
            height="150px"
            width={[["100%", 1 / 2, 1 / 4]]}
            m={5}
          />
          <Skeleton
            minW="302px"
            height="150px"
            width={[["100%", 1 / 2, 1 / 4]]}
            m={5}
          />
        </Flex>
      )}
      {!loading && (
        <Flex justify="center" wrap="wrap">
          {newsFeeds.map((item, i) => (
            <Box
              boxShadow="md"
              minW="320px"
              height="305px"
              width={[["100%", 1 / 2, 1 / 4]]}
              m={5}
              key={i}
              rounded="lg"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.urlToImage}
                  rounded="lg"
                  width="100%"
                  height={240}
                  fallbackSrc={ImagePlaceHolder}
                  alt={item.source.name}
                />
              </a>

              <Box p={2}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Text className="title" p={1} fontSize="md" isTruncated>
                    {item.title}
                  </Text>
                </a>
                <Flex justify="space-between" mt={4}>
                  <Text fontSize="xs" as="b" color="teal.700">
                    {item.source.name}
                  </Text>
                  <Text fontSize="xs" as="i">
                    <FormatDate pubDate={item} />
                  </Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </Flex>
      )}
    </div>
  );
};
