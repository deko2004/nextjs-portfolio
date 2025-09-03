const whatsappNumber = "+213674973577";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`;
export const metadata = {
  title: "WhatsApp Chat | Portfolio of Hamoudi Benrahal | تواصل واتساب",
  description:
    "Chat with Hamoudi Benrahal directly on WhatsApp for quick support, collaboration, or inquiries. | تواصل مع حمودي بن رحال مباشرة عبر الواتساب لأي استفسار أو تعاون.",
  openGraph: {
    title: "WhatsApp Chat | Portfolio of Hamoudi Benrahal | تواصل واتساب",
    description:
      "Chat with Hamoudi Benrahal directly on WhatsApp for quick support, collaboration, or inquiries. | تواصل مع حمودي بن رحال مباشرة عبر الواتساب لأي استفسار أو تعاون.",
    type: "website",
    url: "https://hamoudibrh.vercel.app/",
    siteName: "Hamoudi Brh Portfolio",
    images: [
      {
        url: "https://hamoudibrh.vercel.app/assets/avatar1.webp",
        width: 800,
        height: 600,
        alt: "Hamoudi Brh - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Chat | Portfolio of Hamoudi Benrahal | تواصل واتساب",
    description:
      "Chat with Hamoudi Benrahal directly on WhatsApp for quick support, collaboration, or inquiries. | تواصل مع حمودي بن رحال مباشرة عبر الواتساب لأي استفسار أو تعاون.",
    images: ["https://hamoudibrh.vercel.app/assets/avatar1.webp"],
  },
};

const FloatingWhatsApp = () => (
  <>
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg cursor-pointer"
      aria-label="Chat with me on WhatsApp"
      title="Chat with me on WhatsApp"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C13.1 27.13 14.52 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.3 0-2.57-.25-3.75-.74l-.27-.11-4.28 1.38 1.4-4.16-.18-.28C7.25 18.07 7 16.56 7 15c0-5.01 4.06-9.07 9-9.07s9 4.06 9 9.07-4.06 9.07-9 9.07zm5.13-6.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3s.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.74 4.06.66.23 1.18.37 1.58.47.66.17 1.26.15 1.73.09.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
      </svg>
    </a>
  </>
);

export default FloatingWhatsApp;
