import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Project } from "../../@types/project";
import { Card } from "./Card";

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Flex
      width="100%"
      maxWidth={800}
      direction="column"
      mt="8"
    >
      <Text color="gray.600" fontSize="xl">PROJETOS</Text>
      <SimpleGrid mt="4" flex="1" gap="6" minChildWidth="320px" align="flex-start" justifyContent="space-between">
        {projects.map(project => (
          <Card
            key={project.name}
            name={project.name}
            description={project.description}
            url={project.url}
            tags={project.tags}
          />
        ))}
      </SimpleGrid>
    </Flex>
  )
}