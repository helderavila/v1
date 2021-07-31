import { useState } from "react";
import { Flex, List, ListIcon, ListItem, SlideFade, Stack, Text } from "@chakra-ui/react";
import { IoIosSquare } from "react-icons/io";

import { Tab } from "./Tab";
import { TabButton } from "./TabButton";

const DATA = [
  {
    company: 'CODEBY',
    title: 'Desenvolvedor Front-end',
    subtitle: 'Abril 2021 - até momento'
  },
  {
    company: 'CRIA',
    title: 'Desenvolvedor Front-end',
    subtitle: 'Junho 2020 - Agosto 2021'
  },
  {
    company: 'PROFT',
    title: 'Desenvolvedor Front-end',
    subtitle: 'Março 2020 - Abril 2021'
  }
]

export function Experience() {
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
          {DATA.map((item, index) => (
            <TabButton key={index} isActive={index === tab} onClick={() => setTab(index)}>
              {item.company}
            </TabButton>
          ))}
        </Stack>
        {DATA.map((item, index) => {
          if (tab === index) {
            return (
              <SlideFade key={index} delay={0.2} offsetY="-40px" in={tab === index} >
                <Tab title={item.title} subtitle={item.subtitle}>
                  <List spacing="3" mt="4">
                    <ListItem>
                      <ListIcon as={IoIosSquare} color="purple.500" />
                      Desenvolvimento e manutenção de código moderno, de alto desempenho e sustentável.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={IoIosSquare} color="purple.500" />
                      Trabalhei com uma variedade de ferramentas, estruturas e plataformas,
                      como JavaScript, React, React Native, NodeJS, Storybook e Figma.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={IoIosSquare} color="purple.500" />
                      Comunicação síncrona e assíncrona com a equipe de design, engenharia e comercial.
                    </ListItem>
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