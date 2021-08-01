import { Flex } from "@chakra-ui/react";

import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

import { ProjectData } from "../@types/project";
import { ExperienceData } from "../@types/experience";
import { getExperiences, getProjects } from "../api/prismic";

interface HomeProps {
  projects: ProjectData[]
  experiences: ExperienceData[]
}

export default function Home({ projects, experiences }: HomeProps) {
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
      <Experience experiences={experiences} />
      <Projects projects={projects} />
    </Flex>
  )
}

export async function getStaticProps() {
  const projects = await getProjects()
  const experiences = await getExperiences()

  return {
    props: {
      projects,
      experiences
    }
  }
}
