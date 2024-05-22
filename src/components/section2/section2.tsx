import { Flex } from "@chakra-ui/react";
import React from "react";

function Section2() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      className="scroll-effect coinbase "
    >
      <div className="container">
        <div className="coinbase-wrap">
          <div className="coinbase-cnt title">
            Era 2012
            <br />- Coinbase
          </div>
          <div className="coinbase-figure">
            <img src="images/mobile.svg" />
          </div>
        </div>
      </div>
    </Flex>
  );
}

export default Section2;
