import { Box, Flex, Heading, Icon, IconButton, HStack, Tag, Text } from "@chakra-ui/react";

import { RiExternalLinkLine } from 'react-icons/ri'

export function Card() {
  return (
    <Box
      bg="gray.700"
      height={290}
      p="8"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Flex justifyContent="space-between">
        <Heading size="lg">Noxus</Heading>
        <IconButton
          aria-label="Open noxus"
          bg="transparent"
          _hover={{
            bg: 'transparent',
            color: 'purple.500'
          }}
          icon={<Icon as={RiExternalLinkLine} fontSize="32" />}
        />
      </Flex>
      <Text>
        Noxus é um aplicativo que estou desenvolvendo voltado para o público gamer com o objetivo de conectar jogadores.
      </Text>
      <HStack>
        <Tag variant="outline" colorScheme="purple">ReactJS</Tag>
        <Tag variant="outline" colorScheme="purple">NodeJS</Tag>
      </HStack>
    </Box>
  )
}