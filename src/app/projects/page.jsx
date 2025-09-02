"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
const ProjectCard = dynamic(() => import("./projectCard"));

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Anime Web",
      category: "web",
      image: "/assets/animee.webp",
      featured: true,

      link: "https://another-anime-app.vercel.app/",
      description:
        "Interactive anime web application with search functionality and user profiles.",
      tags: ["React", "Tailwind", "API"],
      gradient: "from-gray-800 to-primary",
    },
    {
      id: 2,
      title: "TShop",
      category: "ecommerce",
      image: "/assets/tshop.webp",
      featured: true,

      link: "https://tshopone.netlify.app/",
      description:
        "Modern e-commerce platform for trendy fashion and accessories.",
      tags: ["React", "Tailwind", "ReactRouter"],
    },
    {
      id: 3,
      title: "D-Crypto App",
      category: "web",
      image: "/assets/dcrypto.webp",
      featured: true,

      link: "https://multiverse.ltd/",
      description:
        "Real-time cryptocurrency tracking and portfolio management application.",
      tags: [
        "React",
        "Tailwind",
        "Chart.js",
        "WebSocket",
        "ExpressJs",
        "MongoDB",
      ],
    },
    {
      id: 4,
      title: "Customizable Landing",
      category: "web",
      image: "/assets/yotalanding.webp",
      featured: true,
      link: "https://yotalanding.vercel.app",
      description:
        "Modern and customizable landing page platform with multiple mode, built with Next.js and Tailwind CSS. Features responsive design and theme customization.",
      tags: ["Next.js", "TS", "Tailwind", "React"],
    },
    {
      id: 5,
      title: "TeckShop",
      category: "ecommerce",
      image: "/assets/store.webp",
      featured: false,

      link: "https://teckshop.fwh.is/",
      description:
        "Full-featured tech e-commerce store with product reviews and comparisons.",
      tags: ["React", "Tailwind", "PHP", "MySQL"],
    },

    {
      id: 6,
      title: "DekoFlix",
      category: "web",
      image: "/assets/nclone.webp",
      featured: false,

      link: "https://dekoflix.netlify.app/",
      description: "Premium streaming service for movies and TV shows.",
      tags: ["React", "Tailwind", "API"],
    },
    {
      id: 7,
      title: "ToShop",
      category: "ecommerce",
      image: "/assets/toshop.webp",
      featured: false,

      link: "https://toshop-deko.netlify.app/",
      description:
        "Premium shopping experience with intuitive navigation and secure checkout.",
      tags: ["HTML", "CSS", "JS"],
    },
  ];

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
