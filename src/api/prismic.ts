import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../services/prismic";

export async function getProjects() {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.predicates.at("document.type", "project")],
    {
      fetch: ["project.name", "project.description", "project.url"],
      pageSize: 4,
    }
  );

  const projects = projectResponse.results.map((project) => {
    return {
      name: RichText.asText(project.data.name),
      description: RichText.asText(project.data.description),
      url: RichText.asText(project.data.url),
      tags: project.tags,
    };
  });

  return projects;
}

export async function getExperiences() {
  const prismic = getPrismicClient();

  const experienceResponse = await prismic.query(
    [Prismic.predicates.at("document.type", "experience")],
    {
      fetch: [
        "experience.company",
        "experience.occupation",
        "experience.date",
        "experience.responsibilities",
      ],
      pageSize: 100,
      orderings: "[document.first_publication_date desc]",
    }
  );
  const experiences = experienceResponse.results.map((experience) => {
    return {
      company: RichText.asText(experience.data.company),
      occupation: RichText.asText(experience.data.occupation),
      date: RichText.asText(experience.data.date),
      responsibilities: experience.data.responsibilities.map((r) => r.text),
    };
  });

  return experiences;
}
