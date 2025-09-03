import {
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaNpm,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaPython,
  FaPhp,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiCss3,
  SiFramer,
  SiReactrouter,
  SiShadcnui,
} from "react-icons/si";
import { SiMui } from "react-icons/si";
const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={20} color="#e34c26" />,
    color: "bg-orange-600",
  },
  {
    name: "CSS",
    icon: <SiCss3 size={20} color="#1572b6" />,
    color: "bg-blue-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={20} color="#f7df1e" />,
    color: "bg-yellow-500",
  },
  {
    name: "React",
    icon: <FaReact size={20} color="#61dafb" />,
    color: "bg-blue-400",
  },

  {
    name: "Next.js",
    icon: <SiNextdotjs size={20} color="#000" />,
    color: "bg-neutral-800",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={20} color="#7952b3" />,
    color: "bg-purple-700",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={20} color="#06b6d4" />,
    color: "bg-cyan-500",
  },
  {
    name: "npm",
    icon: <FaNpm size={20} color="#cb3837" />,
    color: "bg-red-600",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={20} color="#3c873a" />,
    color: "bg-green-700",
  },
  {
    name: "Express.js",
    icon: <SiExpress size={20} color="#000" />,
    color: "bg-neutral-800",
  },
  {
    name: "SQL",
    icon: <FaDatabase size={20} color="#336791" />,
    color: "bg-blue-700",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={20} color="#47a248" />,
    color: "bg-green-600",
  },
  {
    name: "PHP",
    icon: <FaPhp size={20} color="#777bb4" />,
    color: "bg-indigo-700",
  },
  {
    name: "Python",
    icon: <FaPython size={20} color="#3776ab" />,
    color: "bg-yellow-700",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={20} color="#e65bff" />,
    color: "bg-gray-700",
  },
  {
    name: "ShadcnUI",
    icon: <SiShadcnui size={20} color="#111" />,
    color: "bg-gray-200 text-black",
  },
  {
    name: "Material UI",
    icon: <SiMui size={20} color="#007fff" />,
    color: "bg-blue-800",
  },
  {
    name: "React Router",
    icon: <SiReactrouter size={20} color="#f44250" />,
    color: "bg-red-500",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={20} color="#f34f29" />,
    color: "bg-orange-700",
  },
  {
    name: "Github",
    icon: <FaGithub size={20} color="#fff" />,
    color: "bg-neutral-900",
  },
  {
    name: "WebSocket",
    icon: <FaNetworkWired size={20} color="#4db6ac" />,
    color: "bg-teal-600",
  },
];

export default skills;
