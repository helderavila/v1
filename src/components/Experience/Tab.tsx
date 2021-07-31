import { ReactNode } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

interface TabProps {
  title: string;
  subtitle: string;
  children: ReactNode
}

export function Tab({ children, subtitle, title, ...rest }: TabProps) {
  return (
    <Flex align="flex-start" w="100%" ml="8" direction="column" mt={["8", "0"]} {...rest}>
      <Heading size="md">{title}</Heading>
      <Text size="sm">{subtitle}</Text>
      {children}
    </Flex>
  )
}