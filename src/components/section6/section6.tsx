"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Flex } from "@chakra-ui/react";

function Section6() {
  const defaultContent: string = "this is default content";
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      className="scroll-effect bella"
    >
      <div className="container">
        <Flex className="bella-wrap">
          <div className="bella-figure">
            <img src="images/bella.svg" />
            <div className="bella-field">
              <select name="cars" id="cars">
                <option value="volvo">Ani</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <button>Login to create a character</button>
            </div>
          </div>
          <div className="bella-cnt">
            <div className="bella-title">ANI</div>
            <p>
              Raised in Palangkaraya Indonesia. Srimulyani or Ani for short has
              detailed oriented and passionate financial guru. Ani has 3 years
              of experience working at IMF to manage and validate applications
              from all over the world. After brief work at IMF, Ani was working
              in Indonesia as treasury minister and will be retiring in 2024.
            </p>
            <p className="trying">
              You are trying to find the love of your life.
            </p>
            <div className="accordion">
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Top conversations"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Recent tasks"
                >
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Flex>
      </div>

      <div className="copyright">
        <div className="container">
          <p>Copyright 2024 Lumbung IO / dESA AltaVerse</p>
        </div>
      </div>
    </Flex>
  );
}

export default Section6;
