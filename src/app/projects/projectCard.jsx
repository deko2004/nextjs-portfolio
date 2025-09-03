// src/app/projects/projectCard.jsx
import { ArrowRight, Pin } from "lucide-react";
import Image from "next/image";
import STACKS from "@/lib/stackIcons"; // تأكد أن الملف موجود في هذا المسار

const getImageSrc = (src) => {
  if (!src) return "/"; // fallback
  if (typeof src !== "string") return "/";

  // If src starts with 'http' or '/', return as is
  if (src.startsWith("http") || src.startsWith("/")) return src;

  // Remove any leading ../ or ./ or public/ and prepend '/'
  let cleaned = src.replace(/^([.]{1,2}\/+)+/, "");
  if (cleaned.startsWith("public/")) cleaned = cleaned.replace(/^public\//, "");
  return "/" + cleaned;
};

const ProjectCard = ({
  title,
  description = "",
  image,
  stacks = [],
  is_featured = false,
  onClick,
}) => {
  const trimmedContent =
    (description || "").slice(0, 80) + (description?.length > 80 ? "..." : "");

  // keyboard accessibility: allow Enter / Space to activate
  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
      onClick={onClick}
      className="group relative cursor-pointer bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-200 dark:border-neutral-700"
      aria-label={`View project ${title}`}
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
          src={getImageSrc(image)}
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

        <div
          className="flex flex-wrap items-center gap-2 pt-2"
          aria-hidden={false}
        >
          {stacks.length ? (
            stacks.map((stack, index) => (
              <div key={index}>
                {STACKS?.[stack] ?? (
                  <div className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-gray-900 dark:text-gray-300">
                    <span className="whitespace-nowrap">{stack}</span>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-xs text-neutral-500">No stacks listed</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
