export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lamarje Investments",
    alternateName: "Lamarje Investments (Pty) Ltd",
    url: "https://lamarje.com",
    logo: "https://lamarje.com/images/logoH.jpg",
    description:
      "Diversified company established in 2010 with competencies in Consulting, Supply Chain, Trading, Infrastructure Development and Financing across Africa.",
    foundingDate: "2010",
    founder: {
      "@type": "Person",
      name: "M.S. Mobwano",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+27-87-970-5555",
        contactType: "Head Office",
        areaServed: "ZA",
        availableLanguage: ["English", "French"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+243-85-123-8586",
        contactType: "DRC Office",
        areaServed: "CD",
        availableLanguage: ["French", "English"],
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "356 Rivonia Boulevard, Edenburg",
        addressLocality: "Sandton",
        addressRegion: "Gauteng",
        postalCode: "2125",
        addressCountry: "ZA",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "18 Kingu, Av de la Liberation, UPN",
        addressLocality: "Kinshasa",
        addressCountry: "CD",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "South Africa" },
      { "@type": "Country", name: "Democratic Republic of Congo" },
      { "@type": "Country", name: "Republic of Congo" },
      { "@type": "Country", name: "Angola" },
      { "@type": "Country", name: "Uganda" },
      { "@type": "Country", name: "Central African Republic" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
