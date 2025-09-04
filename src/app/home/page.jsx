"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

import skills from "@/lib/skillsicons";
import { MapPin, Circle, Code2, Briefcase, Sparkles, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="flex-1 bg-primary text-white p-4 sm:p-6 topmg md:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {/* Header Section */}
          <section className="space-y-4 sm:space-y-6">
            {/* تخطيط متجاوب: عمودي للشاشات الصغيرة، أفقي للكبيرة */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
              {/* النص الرئيسي */}
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Hi, I'm Hamoudi Benrahal
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-gray-400 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>Based in Setif, Algeria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-3 h-3 fill-green-500 text-green-500 animate-pulse" />
                    <span>Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              Passionate and seasoned Software Engineer with a strong focus on
              frontend development. Proficient in TypeScript and well-versed in
              all aspects of web technologies. Collaborative team player
              dedicated to delivering efficient, scalable, and visually
              appealing web applications.
            </p>
          </section>
          <hr className="border-gray-700" />
          {/* Skills Section */}
          <section className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Skills
              </h2>
            </div>
            <p className="text-gray-400">My professional skills.</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <div className="px-1 sm:px-2" key={index}>
                  <div
                    className={`flex w-full items-center space-x-2 rounded-full border px-3 sm:px-4 py-2 shadow-sm transition-opacity cursor-pointer
      ${skill.color} text-white 
      dark:border-neutral-600 dark:bg-neutral-800
    `}
                  >
                    <div className="h-6 w-6 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <div className="whitespace-nowrap text-sm font-medium">
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <hr className="border-gray-700" />
          {/* Service Section */}
          <section className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Service
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I work as a freelancer to develop exceptional websites for brands,
              companies, institutions, and startups, focusing on strategic web
              solutions.
            </p>
          </section>
          {/* CTA Section */}
          <section className="bg-secondary border border-gray-700 rounded-xl p-4 sm:p-8 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Let's work together!
              </h2>
            </div>
            <p className="text-gray-300">
              I'm open for freelance projects, feel free to email me to see how
              can we collaborate.
            </p>
            <Link
              href="/contact"
              className="flex items-center gap-2 w-fit bg-gray-700 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact me
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
