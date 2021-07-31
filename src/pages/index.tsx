import { Flex } from "@chakra-ui/react";

import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <Flex
      w="100%"
      justify="flex-start"
      align="center"
      direction="column"
      py="24"
      px="8"
    >
      <Header />
      <About />
      <Experience />
      <Projects />
    </Flex>
  )
}
