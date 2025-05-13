export function PersonJsonLd() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Md Ashfakul Karim Rahi",
            "url": "https://ashfakulkarim.xyz",
            "jobTitle": "Frontend Developer",
            "sameAs": [
              "https://github.com/ashfak101",
              "https://www.linkedin.com/in/md-ashfakul-karim-rahi-3a0b62211/"
            ]
          })
        }}
      />
    );
  }