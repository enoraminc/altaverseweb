import { Flex } from "@chakra-ui/react";
import React from "react";

function Section1() {
  return (
    <Flex
      alignItems={"center"}
      className="scroll-effect your-invest justify-between"
    >
      <div className="container">
        <div className="invest-wrap">
          <div className="invest-img">
            <img src="images/invest.svg" />
          </div>
          <div className="invest-cnt title">
            <span>Where will</span>
            you invest in 2025?
          </div>
        </div>
      </div>
    </Flex>
  );
}

export default Section1;
