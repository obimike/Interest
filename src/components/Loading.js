import React from "react";

import { Skeleton, Flex, SimpleGrid } from "@chakra-ui/core";

export default () => {
  return (
    <div>
      <SimpleGrid justifyContent="center" minChildWidth="360px" spacing="10px">
        <Skeleton width={["auto"]} height="150px" />
        <Skeleton width={["auto"]} height="150px" />
      </SimpleGrid>

      <Skeleton
        width={[
          "90%", // base
          "80%", // 480px upwards
          "50%", // 768px upwards
          "39%", // 992px upwards
        ]}
        height="20px"
        my={5}
      />

      <Flex justify="center" wrap="wrap">
        <Skeleton
          minW="302px"
          height="150px"
          width={[["100%", 1 / 2, 1 / 4]]}
          m={1.5}
        />
        <Skeleton
          minW="302px"
          height="150px"
          width={[["100%", 1 / 2, 1 / 4]]}
          m={1.5}
        />
        <Skeleton
          minW="302px"
          height="150px"
          width={[["100%", 1 / 2, 1 / 4]]}
          m={1.5}
        />
      </Flex>
    </div>
  );
};
