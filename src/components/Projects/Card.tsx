import { Box, Flex, Heading, Icon, IconButton, HStack, Tag, Text } from "@chakra-ui/react";

import { RiExternalLinkLine } from 'react-icons/ri'

interface CardProps {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export function Card({ name, description, url, tags }: CardProps) {

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
        <Heading size="lg">{name}</Heading>
        <a target="_blank" href={url} rel="noreferrer">
          <IconButton
            aria-label="Open noxus"
            bg="transparent"
            _hover={{
              bg: 'transparent',
              color: 'purple.500'
            }}
            icon={<Icon as={RiExternalLinkLine} fontSize="32" />}
          />
        </a>
      </Flex>
      <Text>
        {description}
      </Text>
      <HStack>
        {tags.map(tag => (
          <Tag key={tag} variant="outline" colorScheme="purple" textTransform="uppercase">{tag}</Tag>
        ))}
      </HStack>
    </Box>
  )
}