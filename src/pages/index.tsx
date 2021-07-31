import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex
      w="100%"
      height="100vh"
      justify="flex-start"
      align="center"
      direction="column"
      py="24"
    >
      <Header />
    </Flex>
  )
}
