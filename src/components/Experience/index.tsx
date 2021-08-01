import { useState } from "react";
import { Flex, List, ListIcon, ListItem, SlideFade, Stack, Text } from "@chakra-ui/react";
import { IoIosSquare } from "react-icons/io";

import { Tab } from "./Tab";
import { TabButton } from "./TabButton";

import { ExperienceData } from "../../@types/experience";

interface ExperienceProps {
  experiences: ExperienceData[];
}

export function Experience({ experiences }: ExperienceProps) {
  const [tab, setTab] = useState(0)

  return (
    <Flex
      width="100%"
      maxWidth={800}
      direction="column"
      mt="8"
    >
      <Text color="gray.600" fontSize="xl">EXPERIÊNCIA</Text>
      <Flex align="flex-start" mt="4" direction={["column", "row"]}>
        <Stack direction={["row-reverse", "column"]} align="center" >
          {experiences.map((item, index) => (
            <TabButton key={index} isActive={index === tab} onClick={() => setTab(index)}>
              {item.company}
            </TabButton>
          ))}
        </Stack>
        {experiences.map((item, index) => {
          if (tab === index) {
            return (
              <SlideFade key={index} delay={0.2} offsetY="-40px" in={tab === index} >
                <Tab title={item.occupation} subtitle={item.date}>
                  <List spacing="3" mt="4">
                    {item.responsibilities.map((responsability, index) => (
                      <ListItem key={index}>
                        <ListIcon as={IoIosSquare} color="purple.500" />
                        {responsability}
                      </ListItem>
                    ))}
                  </List>
                </Tab>
              </SlideFade>
            )
          }
        })}
      </Flex>
    </Flex>
  )
}