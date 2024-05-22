import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function Section4() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      className="scroll-effect verse"
    >
      <div className="container">
        <div className="verse-wrap">
          <Text textAlign={"center"} className="title">
            2025 - AltaVerse
          </Text>
          <div className="verse-img">
            <img src="images/ultra-verse.svg" />
          </div>
        </div>
      </div>
    </Flex>
  );
}

export default Section4;
