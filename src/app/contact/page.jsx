"use client";
import { useState } from "react";
import { Mail, Instagram, Linkedin, Github } from "lucide-react";

// ContactCard Component
const ContactCard = ({
  title,
  description,
  name,
  href,
  icon,
  backgroundIcon,
  gradientClasses,
  textColor,
  buttonBgColor,
  buttonTextColor,
  isFullWidth,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-1 border-white/60 p-6 ${
        isFullWidth ? "col-span-full" : ""
      } ${gradientClasses} shadow-lg`}
    >
      {/* Background Icon */}
      <div className="absolute -right-4 -top-4 opacity-20 text-white/30">
        {backgroundIcon}
      </div>

      {/* Content */}
      <div className={`relative z-10 ${textColor} flex flex-col h-full`}>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm opacity-90 mb-6">{description}</p>
        </div>

        <div className="mt-auto">
          <button
            className={`${buttonBgColor} ${buttonTextColor} px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:scale-105 hover:shadow-md flex items-center gap-2 ${
              !href ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
            }`}
            disabled={!href}
          >
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Go to {name}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <span className="flex items-center gap-2">Go to {name}</span>
            )}
          </button>
        </div>
      </div>

      {/* Icon Container */}
      <div className="absolute bottom-6 right-6">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
  };

  // Social media data
  const socialMediaCards = [
    {
      name: "Gmail",
      title: "Stay in Touch",
      description: "Reach out via email for any inquiries or collaborations.",
      href: "mailto:hamoudicode9@gmail.com",
      icon: <Mail size={24} className="text-white" />,
      backgroundIcon: <Mail size={80} />,
      gradientClasses: "bg-gradient-to-br from-red-500 via-red-600 to-red-700",
      textColor: "text-white",
      buttonBgColor: "bg-white/20",
      buttonTextColor: "text-white",
    },
    {
      name: "Instagram",
      title: "Follow My Journey",
      description:
        "Stay updated with my latest posts and stories on Instagram.",
      //   href: "mailto:hamoudicode9@gmail.com",

      icon: <Instagram size={24} className="text-white" />,
      backgroundIcon: <Instagram size={80} />,
      gradientClasses:
        "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
      textColor: "text-white",
      buttonBgColor: "bg-white/20",
      buttonTextColor: "text-white",
    },
    {
      name: "Linkedin",
      title: "Let's Connect",
      description:
        "Connect for collaboration or explore my professional experience.",
      // href: "https://linkedin.com",
      icon: <Linkedin size={24} className="text-white" />,
      backgroundIcon: <Linkedin size={80} />,
      gradientClasses: "bg-gradient-to-br from-blue-600 to-blue-700",
      textColor: "text-white",
      buttonBgColor: "bg-white/20",
      buttonTextColor: "text-white",
    },
    {
      name: "Tiktok",
      title: "Join the Fun",
      description: "Follow me on TikTok for entertaining and engaging content.",
      // href: "https://tiktok.com",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      backgroundIcon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      gradientClasses: "bg-gradient-to-br from-gray-700 to-secondary",
      textColor: "text-white",
      buttonBgColor: "bg-white/20",
      buttonTextColor: "text-white",
    },
    {
      name: "Github",
      title: "Explore the Code",
      description: "Explore the source code for all my projects on GitHub.",
      href: "https://github.com/deko2004",
      icon: <Github size={24} className="text-white" />,
      backgroundIcon: <Github size={80} />,
      gradientClasses: "bg-gradient-to-br from-secondary to-slate-900",
      textColor: "text-white",
      buttonBgColor: "bg-white/20",
      buttonTextColor: "text-white",
      isFullWidth: true,
    },
  ];

  return (
    <>
      <div className="bg-primary text-white topmg min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-2xl font-light mb-4 text-gray-300">
              Let's get in touch
            </h1>
            <div className="w-full h-px bg-gray-700"></div>
          </div>

          {/* Find me on social media */}
          <div className="mb-16">
            <h2 className="text-xl font-medium mb-8 text-white">
              Find me on social media
            </h2>

            {/* GitHub Card - Full Width */}
            <div className="mb-6">
              <ContactCard {...socialMediaCards[4]} />
            </div>
            {/* Instagram and LinkedIn Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ContactCard {...socialMediaCards[0]} />
              <ContactCard {...socialMediaCards[1]} />
            </div>

            {/* TikTok and Gmail Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactCard {...socialMediaCards[2]} />
              <ContactCard {...socialMediaCards[3]} />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-medium mb-8 text-white">
              Or send me a message
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-secondary border border-gray-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-secondary border border-gray-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-secondary border border-gray-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-200"
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-200 font-medium text-lg hover:scale-105 hover:shadow-lg"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
