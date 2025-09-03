export const metadata = {
  title: "Services | Hamoudi Brh - Full Stack Developer",
  description:
    "Discover the full range of web development services offered by Hamoudi Brh including UI/UX design, responsive design, performance optimization, API integration, backend development, and more.",
  openGraph: {
    title: "Services | Hamoudi Brh - Full Stack Developer",
    description:
      "Explore modern web development solutions by Hamoudi Brh: frontend, backend, optimization, testing, and real-time applications.",
    url: "https://hamoudibrh.vercel.app/services",
    siteName: "Hamoudi Brh Portfolio",
    images: [
      {
        url: "https://hamoudibrh.vercel.app/assets/avatar1.webp",
        width: 800,
        height: 600,
        alt: "Hamoudi Brh Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Hamoudi Brh - Web Developer",
    description:
      "Professional web services by Hamoudi Brh: responsive websites, APIs, testing, and backend systems.",
    images: ["https://hamoudibrh.vercel.app/assets/avatar1.webp"],
  },
};

import {
  Code,
  Smartphone,
  Globe,
  Zap,
  Link,
  Bug,
  Database,
} from "lucide-react";

// ServiceCard Component
const ServiceCard = ({
  title,
  description,
  icon,
  backgroundIcon,
  gradientClasses,
  iconColor,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl p-4  sm:p-5 ${gradientClasses} shadow-md hover:scale-105 transition-all duration-300 group min-h-[220px]`}
    >
      {/* Background Icon */}
      <div className="absolute -right-6 -top-6 opacity-10 text-white/20 group-hover:opacity-20 transition-opacity duration-300">
        {backgroundIcon}
      </div>
      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Icon Container */}
        <div className="mb-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 w-fit border border-white/30">
            <div className={iconColor}>{icon}</div>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-white/90 leading-relaxed text-xs line-clamp-3">
          {description}
        </p>
        {/* Hover Effect Arrow */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default function Services() {
  const servicesData = [
    {
      title: "UI Development",
      description:
        "We specialize in crafting visually appealing and highly intuitive user interfaces using modern front-end technologies such as React, Vue, and Angular. Our UI development process includes wireframing, prototyping, and implementing interactive components to ensure an optimal user experience. We follow best practices in UI/UX design, ensuring accessibility, responsiveness, and performance-driven designs that captivate users and drive engagement.",
      icon: <Code size={32} />,
      backgroundIcon: <Code size={120} />,
      gradientClasses:
        "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800",
      iconColor: "text-white",
    },
    {
      title: "Responsive Web Design",
      description:
        "Our responsive web design service ensures that your website looks and functions flawlessly across all screen sizes, including desktops, tablets, and mobile phones. We utilize CSS Grid, Flexbox, and media queries to create fluid layouts that adapt seamlessly to different resolutions. Additionally, we focus on optimizing touch gestures, navigation structures, and accessibility features to enhance the user experience for all visitors.",
      icon: <Smartphone size={32} />,
      backgroundIcon: <Smartphone size={120} />,
      gradientClasses:
        "bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700",
      iconColor: "text-white",
    },
    {
      title: "Web Application Development",
      description:
        "We develop high-performance web applications tailored to meet business needs. Our development stack includes cutting-edge frameworks such as React, Angular, and Vue.js. We focus on building scalable, maintainable, and efficient applications with seamless API integration, dynamic UI updates, and real-time data handling. Security, performance, and cross-browser compatibility are at the core of our development approach.",
      icon: <Globe size={32} />,
      backgroundIcon: <Globe size={120} />,
      gradientClasses:
        "bg-gradient-to-br from-purple-600 via-violet-600 to-purple-800",
      iconColor: "text-white",
    },
    {
      title: "Performance Optimization",
      description:
        "We optimize websites for maximum speed and performance by implementing best practices such as image compression, lazy loading, minification of CSS and JavaScript files, and efficient caching strategies. Our optimization techniques help reduce load times, improve Core Web Vitals, and ensure a smooth browsing experience. Additionally, we analyze bottlenecks using performance monitoring tools to enhance responsiveness and scalability.",
      icon: <Zap size={32} />,
      backgroundIcon: <Zap size={120} />,
      gradientClasses:
        "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600",
      iconColor: "text-white",
    },
    {
      title: "API Integration",
      description:
        "We provide seamless API integration services to connect front-end applications with powerful back-end services. Our experience includes working with RESTful APIs, GraphQL, and WebSockets to enable real-time communication and data synchronization. Whether integrating third-party APIs such as payment gateways, social authentication, or custom-built APIs, we ensure efficient data handling and security best practices.",
      icon: <Link size={32} />,
      backgroundIcon: <Link size={120} />,
      gradientClasses:
        "bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700",
      iconColor: "text-white",
    },
    {
      title: "Testing & Debugging",
      description:
        "Our testing and debugging services guarantee that your web applications run smoothly and remain bug-free. We use automated testing tools such as Jest, Cypress, and Selenium for unit, integration, and end-to-end testing. Additionally, we conduct manual testing to identify usability issues and ensure cross-browser compatibility. Our debugging process involves analyzing performance issues, fixing logical errors, and improving code efficiency to maintain stability and reliability.",
      icon: <Bug size={32} />,
      backgroundIcon: <Bug size={120} />,
      gradientClasses:
        "bg-gradient-to-br from-rose-600 via-pink-600 to-red-700",
      iconColor: "text-white",
    },
    {
      title: "Back End Development",
      description:
        "Our back-end development services focus on creating scalable and secure server-side applications using Node.js, Express, and MongoDB. We design efficient database schemas, develop RESTful APIs, implement authentication and authorization, and ensure data integrity and protection. With a focus on clean architecture and performance, our solutions support seamless front-end integration and business logic execution.",
      icon: <Database size={32} />,
      backgroundIcon: <Database size={120} />,
      gradientClasses:
        "bg-gradient-to-br from-gray-700 via-slate-700 to-gray-900",
      iconColor: "text-white",
    },
  ];

  return (
    <>
      <main className="flex-1 bg-primary text-white p-4 topmg sm:p-6 md:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <section className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r text-white bg-clip-text ">
              Services
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              We provide comprehensive web development solutions tailored to
              bring your digital vision to life. From stunning user interfaces
              to robust back-end systems, we've got you covered.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </section>

          {/* Services Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 relative overflow-hidden mt-12">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10">
                  <Code size={60} className="text-white/20" />
                </div>
                <div className="absolute bottom-10 right-10">
                  <Globe size={80} className="text-white/20" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Zap size={100} className="text-white/10" />
                </div>
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  Ready to Start Your Project?
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help bring your ideas to life with
                  cutting-edge technology and exceptional design.
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  Get Started Today
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "13+", label: "Projects Completed" },
                { number: "6+", label: "Happy Clients" },
                { number: "3+", label: "Years Experience" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-secondary backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
