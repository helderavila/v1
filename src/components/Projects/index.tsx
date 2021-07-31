import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Card } from "./Card";

export function Projects() {
  return (
    <Flex
      width="100%"
      maxWidth={800}
      direction="column"
      mt="8"
    >
      <Text color="gray.600" fontSize="xl">PROJETOS</Text>
      <SimpleGrid mt="4" flex="1" gap="6" minChildWidth="320px" align="flex-start" justifyContent="space-between">
        <Card />
        <Card />
      </SimpleGrid>
    </Flex>
  )
}