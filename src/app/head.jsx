// app/head.jsx
export default function Head() {
  return (
    <>
      <meta
        name="description"
        content="Portfolio of Hamoudi Benrahal, a professional web developer. Explore projects, technologies, and contact information."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Hamoudi Benrahal",
            url: "https://hamoudibrh.vercel.app",
            image: "https://hamoudibrh.vercel.app/assets/avatar1.webp",
            jobTitle: "Full-Stack Web Developer",
            sameAs: [
              "https://github.com/deko2004",
              "https://www.linkedin.com/in/hamoudi-benrahal",
            ],
          }),
        }}
      />
    </>
  );
}
