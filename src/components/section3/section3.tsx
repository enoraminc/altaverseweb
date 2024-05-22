import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function Section3() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      className="scroll-effect era"
    >
      <div className="container">
        <div className="era-wrap">
          <Text textAlign={"center"} className="title">
            Era 2022 - Robinhood
          </Text>
          <div className="era-img">
            <img src="images/era.svg" />
          </div>
        </div>
      </div>
    </Flex>
  );
}

export default Section3;
