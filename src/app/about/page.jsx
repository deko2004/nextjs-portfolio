// ✅ تحسين SEO
export const metadata = {
  title: "About | Hamoudi Brh",
  description:
    "Learn more about Hamoudi Brh, a Full Stack Developer and computer science student at Farhat Abbas Setif 1 University. Discover his journey, skills, and academic background.",
  keywords: [
    "Hamoudi Brh",
    "Hamoudi Benrahal",
    "About Hamoudi",
    "Full Stack Developer",
    "Setif University",
    "Computer Science Student",
    "Algerian Developer",
  ],
  openGraph: {
    title: "About | Hamoudi Brh",
    description:
      "Full s developer and CS student from Setif. Learn more about his background, skills, and projects.",
    url: "https://hamoudibrh.vercel.app/about", // ← عدّل هذا إلى دومينك الحقيقي
    siteName: "Hamoudi Brh Portfolio",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://hamoudibrh.vercel.app/about",
  },
};

import { Briefcase, MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";

export default function About() {
  const careerItems = [
    // مستقبلًا: أضف خبرات العمل هنا
  ];

  const educationItems = [
    {
      id: 1,
      logo: "/assets/uni.webp", // تأكد من وجود الصورة في المسار الصحيح
      degree: "Bachelor of Computer Science",
      university: "Farhat Abbas Setif 1 University",
      major: "Computer Science",
      location: "Setif, Algeria",
      years: "2023 - 2026",
      status: "In Progress",
    },
  ];

  return (
    <main className="flex-1 bg-primary text-white p-4 sm:p-6 md:p-8 overflow-y-auto topmg">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        {/* About Section */}
        <section className="space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-white">About</h1>
          <p className="text-gray-400 text-base sm:text-lg">
            A short story of me
          </p>

          <div className="border-t border-dotted border-gray-600 my-6 sm:my-8"></div>

          <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed">
            <p>
              Hello and welcome to my personal website! I'm Hamoudi Brh, a
              passionate student specializing in Computer Sciences at Farhat
              Abbas Setif 1 University. My primary focus lies in Full s
              development, where I’ve built a solid foundation in JavaScript and
              TypeScript, and gained hands-on experience with modern libraries
              and frameworks like React, Vite, and Next.js.
            </p>

            <p>
              I enjoy crafting web applications that are not only visually
              appealing but also intuitive and user-centric. My approach
              combines technical precision with a strong commitment to usability
              and performance. I’m a fast learner who thrives in dynamic
              environments, always eager to adopt new tools and improve my skill
              set. Collaboration is at the heart of how I work. I believe in
              open communication, team synergy, and staying humble—qualities
              that allow me to integrate effectively into any team environment.
            </p>

            <p>
              I strongly believe that effective communication is crucial for
              success in any role. I am adaptable, think efficiently, and always
              strive for the best. My experiences have equipped me with
              analytical skills and strong leadership abilities. I am
              comfortable working collaboratively in a team and am excited about
              the opportunity to contribute to team success. Looking forward to
              the possibility of collaboration!
            </p>

            <p>
              I’m always open to exciting opportunities and meaningful
              collaborations. Let’s build something great together!
            </p>
          </div>
        </section>

        <hr className="border-gray-700" />

        {/* Career Section */}
        {careerItems.length > 0 && (
          <section className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Career
              </h2>
            </div>
            <p className="text-gray-400">My professional career journey.</p>
            <div className="space-y-4 sm:space-y-6">
              {/* مستقبلًا: عرض المسارات المهنية */}
            </div>
          </section>
        )}

        {/* Education */}
        {educationItems.length > 0 && (
          <section className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Education
              </h2>
            </div>

            <p className="text-gray-400">My academic education journey.</p>

            <div className="space-y-4 sm:space-y-6">
              {educationItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-secondary border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-gray-750 transition-colors"
                >
                  <div className="flex gap-3 sm:gap-4 flex-col sm:flex-row">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.logo}
                        alt={`${item.university} logo`}
                        loading="lazy"
                        width={64}
                        height={64}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover bg-white"
                      />
                    </div>

                    <div className="flex-1 space-y-2 sm:space-y-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                          {item.degree}
                        </h3>
                        <p className="text-gray-300 font-medium mb-1">
                          {item.university}
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.years}</span>
                        </div>
                        <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                          {item.major}
                        </span>
                        <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
