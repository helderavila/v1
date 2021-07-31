import { Flex, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { IoIosSquare } from 'react-icons/io'

export function About() {
  return (
    <Flex
      width="100%"
      maxWidth={800}
      direction="column"
      mt="8"
    >
      <Text color="gray.600" fontSize="xl">SOBRE MIM</Text>
      <Text fontSize="lg" mt="4">
        Meu nome é Helder e gosto de criar coisas para internet. Meu interesse em desenvolvimento começou em 2011,
        quando queria descobrir como os sites/blogs eram feitos. Atualmente estou trabalhando como Desenvolvedor Front-end na <Text as="span" color="purple.500">Codeby </Text>
        e já trabalhei em diversas startup’s e projetos. Meu foco principal é construir produtos acessíveis, inclusivos e escaláveis.
      </Text>
      <Text fontSize="lg" mt="3">Aqui estão algumas das tecnologias com as quais tenho trabalhado recentemente:</Text>
      <Stack direction="row" spacing="8" mt="4">
        <List spacing="3">
          <ListItem>
            <ListIcon as={IoIosSquare} color="purple.500" />
            JavaScript
          </ListItem>
          <ListItem>
            <ListIcon as={IoIosSquare} color="purple.500" />
            ReactJS
          </ListItem>
          <ListItem>
            <ListIcon as={IoIosSquare} color="purple.500" />
            NextJS
          </ListItem>
        </List>
        <List spacing="3">
          <ListItem>
            <ListIcon as={IoIosSquare} color="purple.500" />
            React Native
          </ListItem>
          <ListItem>
            <ListIcon as={IoIosSquare} color="purple.500" />
            NodeJS
          </ListItem>
          <ListItem>
            <ListIcon as={IoIosSquare} color="purple.500" />
            VTEX
          </ListItem>
        </List>
      </Stack>
    </Flex>
  )
}