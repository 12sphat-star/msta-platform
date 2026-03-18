import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  canonical,
}) {
  const siteName = "MSTA Platform";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || ""} />
      <meta name="keywords" content={keywords || ""} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || ""} />

      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}