import { Flex } from "@chakra-ui/react";
import Prismic from '@prismicio/client'

import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { getPrismicClient } from "../services/prismic";

import { RichText } from 'prismic-dom'

import { Project } from "../@types/project";

interface HomeProps {
  projects: Project[]
}

export default function Home({ projects }: HomeProps) {
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
      <Projects projects={projects} />
    </Flex>
  )
}

export async function getStaticProps() {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'project')],
    {
      fetch: ['project.name', 'project.description', 'project.url'],
      pageSize: 4
    }
  )

  const projects = response.results.map(project => {
    return {
      name: RichText.asText(project.data.name),
      description: RichText.asText(project.data.description),
      url: RichText.asText(project.data.url),
      tags: project.tags
    }
  })

  return {
    props: {
      projects
    }
  }
}
