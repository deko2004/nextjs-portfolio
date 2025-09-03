"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
const ProjectCard = dynamic(() => import("./projectCard"));
import projects from "@/data/projects.data";
export default function Projects() {
  return (
    <main className="flex-1 bg-primary text-white topmg p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <section className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Projects
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Several projects that I have worked on, both private and open
            source.
          </p>

          <div className="border-t border-dotted border-gray-600 my-6 sm:my-8"></div>
        </section>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`View project: ${project.title}`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                stacks={project.tags}
                isFeatured={project.featured}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
