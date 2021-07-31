import { Flex, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100%"
      maxW={1000}
    >
      <Heading size="2xl" color="gray.50">Olá 👋</Heading>
    </Flex>
  )
}