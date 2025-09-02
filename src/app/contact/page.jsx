"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Instagram,
  Linkedin,
  Github,
  CheckCircle,
  X,
} from "lucide-react";
const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY;
const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY;
const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

// Success Modal Component
const SuccessModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-secondary border border-gray-600 rounded-2xl p-8 max-w-md mx-4 relative animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Success Animation */}
        <div className="text-center">
          <div className="relative mb-6">
            <div className="animate-bounce">
              <CheckCircle
                size={64}
                className="text-green-500 mx-auto animate-pulse"
              />
            </div>
            {/* Ripple Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-green-500/30 rounded-full animate-ping"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-20 h-20 border-2 border-green-500/20 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-300 mb-6">
            Thank you! Your message has been sent successfully and I will get
            back to you soon.
          </p>

          <button
            onClick={onClose}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all duration-200 font-medium hover:scale-105"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

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
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    // تحقق من الحقول
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all fields before sending.");
      return;
    }

    // تحقق من صحة البريد
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (result) => {
          setShowSuccessModal(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("An error occurred while sending: " + error.text);
        }
      )
      .finally(() => setLoading(false));
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
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-200 font-medium text-lg hover:scale-105 hover:shadow-lg"
                >
                  {loading ? "Sending..." : "Send Email"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isVisible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </>
  );
}
