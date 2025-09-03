import { FaReact, FaNodeJs, FaDatabase, FaNetworkWired } from "react-icons/fa";

import {
  SiExpress,
  SiReactrouter,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiChartdotjs,
  SiNextdotjs,
  SiD3Dotjs,
  SiJavascript,
  SiFramer,
  SiKotlin,
  SiPhp,
  SiLaravel,
  SiAstro,
  SiMysql,
} from "react-icons/si";

import React from "react";

/**
 * Small helper to create consistent badges.
 * You can change classes here to update badge design globally.
 */
function Badge({
  icon,
  children,
  bgClass = "bg-gray-100",
  textClass = "text-gray-800",
  iconClass = "",
}) {
  // dark: classes kept minimal; tweak to your design system
  return (
    <div
      className={`flex items-center gap-1 ${bgClass} ${textClass} px-2 py-1 rounded-full text-xs font-medium dark:opacity-95`}
    >
      {icon ? <span className={iconClass}>{icon}</span> : null}
      <span className="whitespace-nowrap">{children}</span>
    </div>
  );
}

export const STACKS = {
  React: (
    <Badge
      icon={<FaReact className="text-blue-500" />}
      bgClass="bg-blue-100"
      textClass="text-blue-800"
    >
      React
    </Badge>
  ),
  ExpressJs: (
    <Badge
      icon={<SiExpress className="text-gray-700" />}
      bgClass="bg-gray-100"
      textClass="text-gray-800"
    >
      Express.js
    </Badge>
  ),
  ReactRouter: (
    <Badge
      icon={<SiReactrouter className="text-red-500" />}
      bgClass="bg-red-100"
      textClass="text-red-800"
    >
      React Router
    </Badge>
  ),
  WebSocket: (
    <Badge
      icon={<FaNetworkWired className="text-blue-500" />}
      bgClass="bg-blue-100"
      textClass="text-blue-800"
    >
      WebSocket
    </Badge>
  ),
  "Node.js": (
    <Badge
      icon={<FaNodeJs className="text-green-600" />}
      bgClass="bg-green-100"
      textClass="text-green-800"
    >
      Node.js
    </Badge>
  ),
  MongoDB: (
    <Badge
      icon={<SiMongodb className="text-green-500" />}
      bgClass="bg-green-100"
      textClass="text-green-800"
    >
      MongoDB
    </Badge>
  ),
  "Vue.js": (
    <Badge bgClass="bg-emerald-100" textClass="text-emerald-800">
      💚 Vue.js
    </Badge>
  ),
  Firebase: (
    <Badge
      icon={<SiFirebase className="text-orange-500" />}
      bgClass="bg-orange-100"
      textClass="text-orange-800"
    >
      Firebase
    </Badge>
  ),
  Tailwind: (
    <Badge
      icon={<SiTailwindcss className="text-sky-500" />}
      bgClass="bg-sky-100"
      textClass="text-sky-800"
    >
      Tailwind
    </Badge>
  ),
  "Chart.js": (
    <Badge
      icon={<SiChartdotjs className="text-purple-500" />}
      bgClass="bg-purple-100"
      textClass="text-purple-800"
    >
      Chart.js
    </Badge>
  ),
  API: (
    <Badge bgClass="bg-gray-100" textClass="text-gray-800">
      🔌 API
    </Badge>
  ),
  "Next.js": (
    <Badge
      icon={<SiNextdotjs className="text-white" />}
      bgClass="bg-black"
      textClass="text-white"
    >
      Next.js
    </Badge>
  ),
  PostgreSQL: (
    <Badge
      icon={<FaDatabase className="text-blue-500" />}
      bgClass="bg-blue-100"
      textClass="text-blue-800"
    >
      PostgreSQL
    </Badge>
  ),
  "D3.js": (
    <Badge
      icon={<SiD3Dotjs className="text-orange-500" />}
      bgClass="bg-orange-100"
      textClass="text-orange-800"
    >
      D3.js
    </Badge>
  ),
  TS: (
    <Badge bgClass="bg-blue-100" textClass="text-blue-800">
      <span className="font-bold">TS</span> TypeScript
    </Badge>
  ),
  Framer: (
    <Badge
      icon={<SiFramer className="text-pink-500" />}
      bgClass="bg-pink-100"
      textClass="text-pink-800"
    >
      Framer
    </Badge>
  ),
  DevTools: (
    <Badge bgClass="bg-gray-200" textClass="text-gray-800">
      🛠️ DevTools
    </Badge>
  ),
  Kotlin: (
    <Badge bgClass="bg-purple-100" textClass="text-purple-800">
      🟣 Kotlin
    </Badge>
  ),
  PHP: (
    <Badge bgClass="bg-indigo-100" textClass="text-indigo-800">
      🐘 PHP
    </Badge>
  ),
  Laravel: (
    <Badge bgClass="bg-red-100" textClass="text-red-800">
      🌐 Laravel
    </Badge>
  ),
  MySQL: (
    <Badge
      icon={<SiMysql className="text-blue-500" />}
      bgClass="bg-blue-100"
      textClass="text-blue-800"
    >
      MySQL
    </Badge>
  ),
  Astro: (
    <Badge bgClass="bg-indigo-100" textClass="text-indigo-800">
      🪐 Astro
    </Badge>
  ),
  HTML: (
    <Badge bgClass="bg-orange-100" textClass="text-orange-800">
      &lt;/&gt; HTML
    </Badge>
  ),
  CSS: (
    <Badge bgClass="bg-blue-100" textClass="text-blue-800">
      # CSS
    </Badge>
  ),
  JavaScript: (
    <Badge
      icon={<SiJavascript className="text-yellow-500" />}
      bgClass="bg-yellow-100"
      textClass="text-yellow-800"
    >
      JavaScript
    </Badge>
  ),
  "Three.js": (
    <Badge bgClass="bg-black" textClass="text-white">
      🔺 Three.js
    </Badge>
  ),
  WebGL: (
    <Badge bgClass="bg-green-100" textClass="text-green-800">
      🟩 WebGL
    </Badge>
  ),
  JS: (
    <Badge
      icon={<SiJavascript className="text-yellow-500" />}
      bgClass="bg-yellow-100"
      textClass="text-yellow-800"
    >
      JS
    </Badge>
  ),
};

export default STACKS;
