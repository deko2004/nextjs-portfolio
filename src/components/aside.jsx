"use client";
import {
  Home,
  User,
  FolderOpen,
  Mail,
  ChevronRight,
  CheckCircle,
  Menu,
  X,
  Briefcase,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function PortfolioAside() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: FolderOpen, label: "Projects", href: "/projects" },
    { icon: Mail, label: "Contact", href: "/contact" },
    { icon: Briefcase, label: "Services", href: "/services" },
  ];

  // Sidebar content
  const asideContent = (
    <>
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-900">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <Image
              width={80}
              height={80}
              src={"/assets/avatar1.webp"}
              loading="lazy"
              alt="Hamoudi Brh"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>

          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-1">
              <h2 className="text-xl font-semibold text-white">Hamoudi Brh</h2>
              <CheckCircle className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-gray-400 text-sm">@Hamoudi Brh</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border-white border text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
              <span className="h-2 w-2 absolute bg-green-500 rounded-full grow-shrink"></span>
              <div className="pl-2 bg-white rounded-full"></div>
              Hire me .
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                scroll={true}
                prefetch={true}
                className="w-full text-left flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer group text-gray-300 hover:bg-[#262626] hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 group-hover:-rotate-8" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-center text-gray-400 text-sm">
          <p>COPYRIGHT © 2025</p>
          <p>Hamoudi Brh . All rights reserved.</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 bg-primary p-2 rounded-full border border-gray-700 shadow-lg"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className="w-7 h-7 text-white" />
      </button>

      {/* Sidebar for desktop */}
      <aside className="hidden md:flex w-84 bg-primary text-white h-screen flex-col fixed top-0 left-0 z-30">
        {asideContent}
      </aside>

      {/* Sidebar for mobile (drawer) */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-72 bg-primary h-full flex flex-col shadow-2xl animate-slideInLeft">
            <button
              className="absolute top-4 right-4 z-50 bg-gray-800 p-2 rounded-full"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            {asideContent}
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={() => setOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
}
