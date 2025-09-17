import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { languageContext } from '../languageContext';
import { getSEOConfig, getPersonStructuredData } from './seoConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  image,
  url,
  noIndex = false
}) => {
  const language = useContext(languageContext);
  const seoConfig = getSEOConfig(language);
  const structuredData = getPersonStructuredData(language);

  const pageTitle = title ? `${title} | ${seoConfig.author}` : seoConfig.title;
  const pageDescription = description || seoConfig.description;
  const pageImage = image || `${seoConfig.url}${seoConfig.image}`;
  const pageUrl = url || seoConfig.url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={seoConfig.keywords.join(', ')} />
      <meta name="author" content={seoConfig.author} />
      <meta name="language" content={language} />

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={seoConfig.type} />
      <meta property="og:site_name" content={seoConfig.author} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1976d2" />
      <meta name="msapplication-navbutton-color" content="#1976d2" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Language alternate tags */}
      <link rel="alternate" hrefLang="fr" href={`${seoConfig.url}?lang=fr`} />
      <link rel="alternate" hrefLang="en" href={`${seoConfig.url}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={seoConfig.url} />
    </Helmet>
  );
};

export default SEOHead;