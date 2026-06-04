import { useEffect } from 'react';

const SEO = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title || "Dilmi Sooriyaarachchi | Software Developer & QA Portfolio";

    // Helper function to upsert meta tags
    const upsertMeta = (name, property, content) => {
      let element;
      if (name) {
        element = document.querySelector(`meta[name="${name}"]`);
      } else if (property) {
        element = document.querySelector(`meta[property="${property}"]`);
      }

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Update Standard Meta Tags
    upsertMeta('description', null, description || "Dilmi Sooriyaarachchi - Software Developer Intern with experience in Full Stack Development, Manual Testing, and Test Automation.");
    upsertMeta('keywords', null, keywords || "Dilmi Sooriyaarachchi, Software Developer, QA Engineer, Test Automation, Selenium, Spring Boot, React, Sri Lanka Ports Authority, Portfolio");
    upsertMeta('author', null, "Dilmi Sooriyaarachchi");

    // 3. Update Open Graph Meta Tags (SEO / Social Previews)
    upsertMeta(null, 'og:title', title || "Dilmi Sooriyaarachchi | Software Developer & QA Portfolio");
    upsertMeta(null, 'og:description', description || "Dilmi Sooriyaarachchi - Software Developer Intern with experience in Full Stack Development, Manual Testing, and Test Automation.");
    upsertMeta(null, 'og:type', "website");
    if (url) upsertMeta(null, 'og:url', url);
    if (image) upsertMeta(null, 'og:image', image);

    // 4. Update Twitter Card Meta Tags
    upsertMeta('twitter:card', null, "summary_large_image");
    upsertMeta('twitter:title', null, title || "Dilmi Sooriyaarachchi | Software Developer & QA Portfolio");
    upsertMeta('twitter:description', null, description || "Dilmi Sooriyaarachchi - Software Developer Intern with experience in Full Stack Development, Manual Testing, and Test Automation.");
    if (image) upsertMeta('twitter:image', null, image);

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;
