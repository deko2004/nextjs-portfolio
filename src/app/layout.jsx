import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Portfolio of Hamoudi Benrahal | بورتفوليو حمودي بن رحال",
  description:
    "Portfolio of Hamoudi Benrahal, a professional web developer. Explore projects, technologies, and contact information. | بورتفوليو احترافي لعرض المشاريع البرمجية والتقنيات الحديثة باستخدام React وNext.js وTailwind.",
  metadataBase: new URL("https://hamoudicode.vercel.app"),
  openGraph: {
    title: "Portfolio of Hamoudi Benrahal | بورتفوليو حمودي بن رحال",
    description:
      "Portfolio of Hamoudi Benrahal, a professional web developer. Explore projects, technologies, and contact information. | استعرض أفضل المشاريع البرمجية التي أنجزتها.",
    url: "https://hamoudicode.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://hamoudicode.vercel.app/assets/avatar1.webp",
        width: 1200,
        height: 630,
        alt: "Hamoudi Benrahal Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio of Hamoudi Benrahal | بورتفوليو حمودي بن رحال",
    description:
      "Portfolio of Hamoudi Benrahal, a professional web developer. Explore projects, technologies, and contact information. | استعرض أفضل المشاريع البرمجية التي أنجزتها.",
    images: ["https://hamoudicode.vercel.app/assets/avatar1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Hamoudi Benrahal Portfolio",
      url: "https://hamoudicode.vercel.app",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://hamoudicode.vercel.app/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const themeColor = "#121212";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
