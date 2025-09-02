import { ArrowRight, Pin } from "lucide-react";
import { FaReact, FaNodeJs, FaDatabase, FaNetworkWired } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiChartdotjs,
  SiD3Dotjs,
  SiJavascript,
  SiReactrouter,
  SiExpress,
} from "react-icons/si";
import Image from "next/image";

// Stack icons mapping
const STACKS = {
  React: (
    <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-blue-900 dark:text-blue-300">
      <FaReact className="text-blue-500" /> React
    </div>
  ),
  ExpressJs: (
    <div className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-gray-900 dark:text-gray-300">
      <SiExpress className="text-gray-700" /> Express.js
    </div>
  ),
  ReactRouter: (
    <div className="flex items-center gap-1 bg-blue-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-red-900 dark:text-red-300">
      <SiReactrouter className="text-red-500" /> React Router
    </div>
  ),
  WebSocket: (
    <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-blue-900 dark:text-blue-300">
      <FaNetworkWired className="text-blue-500" /> WebSocket
    </div>
  ),
  "Node.js": (
    <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-green-900 dark:text-green-300">
      <FaNodeJs className="text-green-600" /> Node.js
    </div>
  ),
  MongoDB: (
    <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-green-900 dark:text-green-300">
      <SiMongodb className="text-green-500" /> MongoDB
    </div>
  ),
  "Vue.js": (
    <div className="flex items-center gap-1 bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-emerald-900 dark:text-emerald-300">
      💚 Vue.js
    </div>
  ),
  Firebase: (
    <div className="flex items-center gap-1 bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-orange-900 dark:text-orange-300">
      <SiFirebase className="text-orange-500" /> Firebase
    </div>
  ),
  Tailwind: (
    <div className="flex items-center gap-1 bg-sky-100 text-sky-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-sky-900 dark:text-sky-300">
      <SiTailwindcss className="text-sky-500" /> Tailwind
    </div>
  ),
  "Chart.js": (
    <div className="flex items-center gap-1 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-purple-900 dark:text-purple-300">
      <SiChartdotjs className="text-purple-500" /> Chart.js
    </div>
  ),
  API: (
    <div className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-gray-900 dark:text-gray-300">
      🔌 API
    </div>
  ),
  "Next.js": (
    <div className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-full text-xs font-medium dark:bg-white dark:text-black">
      <SiNextdotjs className="text-white dark:text-black" /> Next.js
    </div>
  ),
  PostgreSQL: (
    <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-blue-900 dark:text-blue-300">
      <FaDatabase className="text-blue-500" /> PostgreSQL
    </div>
  ),
  "D3.js": (
    <div className="flex items-center gap-1 bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-orange-900 dark:text-orange-300">
      <SiD3Dotjs className="text-orange-500" /> D3.js
    </div>
  ),
  TS: (
    <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-blue-900 dark:text-blue-300">
      <span className="font-bold">TS</span> TypeScript
    </div>
  ),
  Framer: (
    <div className="flex items-center gap-1 bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-pink-900 dark:text-pink-300">
      <span className="font-bold">🎞️</span> Framer
    </div>
  ),
  DevTools: (
    <div className="flex items-center gap-1 bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-gray-900 dark:text-gray-300">
      <span className="font-bold">🛠️</span> DevTools
    </div>
  ),
  Kotlin: (
    <div className="flex items-center gap-1 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-purple-900 dark:text-purple-300">
      <span className="font-bold">🟣</span> Kotlin
    </div>
  ),
  PHP: (
    <div className="flex items-center gap-1 bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-indigo-900 dark:text-indigo-300">
      <span className="font-bold">🐘</span> PHP
    </div>
  ),
  Laravel: (
    <div className="flex items-center gap-1 bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-red-900 dark:text-red-300">
      <span className="font-bold">🌐</span> Laravel
    </div>
  ),
  MySQL: (
    <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-blue-900 dark:text-blue-300">
      <FaDatabase className="text-blue-500" /> MySQL
    </div>
  ),
  Astro: (
    <div className="flex items-center gap-1 bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-indigo-900 dark:text-indigo-300">
      <span className="font-bold">🪐</span> Astro
    </div>
  ),
  HTML: (
    <div className="flex items-center gap-1 bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-orange-900 dark:text-orange-300">
      <span className="font-bold">&lt;/&gt;</span> HTML
    </div>
  ),
  CSS: (
    <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-blue-900 dark:text-blue-300">
      <span className="font-bold">#</span> CSS
    </div>
  ),
  JavaScript: (
    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-yellow-900 dark:text-yellow-300">
      <span className="font-bold">JS</span> JavaScript
    </div>
  ),
  "Three.js": (
    <div className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-full text-xs font-medium dark:bg-white dark:text-black">
      <span className="font-bold">🔺</span> Three.js
    </div>
  ),
  WebGL: (
    <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-green-900 dark:text-green-300">
      <span className="font-bold">🟩</span> WebGL
    </div>
  ),
  JS: (
    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-yellow-900 dark:text-yellow-300">
      <SiJavascript className="text-yellow-500" /> JS
    </div>
  ),
};

const getImageSrc = (src) => {
  // If src starts with 'http', return as is (external image)
  if (src.startsWith("http")) return src;
  // If src starts with '/', return as is (public folder)
  if (src.startsWith("/")) return src;
  // Remove any leading '../', './', or 'public/' and prepend '/'
  let cleaned = src.replace(/^([.]{1,2}\/+)+/, "");
  if (cleaned.startsWith("public/")) {
    cleaned = cleaned.replace(/^public\//, "");
  }
  return "/" + cleaned;
};

// Project Card Component
const ProjectCard = ({
  title,
  description,
  image,
  stacks = [],
  is_featured = false,
  onClick,
}) => {
  const trimmedContent =
    description.slice(0, 80) + (description.length > 80 ? "..." : "");

  return (
    <>
      <div
        className="group relative    cursor-pointer bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-200 dark:border-neutral-700"
        onClick={onClick}
      >
        {is_featured && (
          <div className="absolute right-0 top-0 z-10 flex items-center gap-x-1 rounded-bl-lg rounded-tr-lg bg-cyan-500 px-2 py-1 text-sm font-medium text-neutral-900">
            <Pin size={15} />
            <span>Featured</span>
          </div>
        )}
        <div className="relative">
          <Image
            width={500}
            height={300}
            src={image}
            loading="lazy"
            alt={`project image ${title}`}
            className="h-48 w-full object-cover rounded-xl"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-80">
            <span>View Project</span>
            <ArrowRight size={20} />
          </div>
        </div>
        <div className="space-y-2 p-5">
          <h3 className="text-lg text-neutral-700 transition-all duration-300 group-hover:text-teal-500 dark:text-neutral-300 dark:group-hover:text-teal-400 font-semibold">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
            {trimmedContent}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {stacks.map((stack, index) => (
              <div key={index}>{STACKS[stack]}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
