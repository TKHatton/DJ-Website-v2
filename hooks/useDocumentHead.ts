import { useEffect } from 'react';
import type { PageMeta } from '../lib/schemas';

/**
 * Updates document title and meta description when the page changes.
 * Important for accessibility (screen readers announce page title)
 * and for search engines / AI systems reading the page.
 */
export function useDocumentHead(meta: PageMeta): void {
  useEffect(() => {
    // Update title
    document.title = meta.title;

    // Update or create meta description
    let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.name = 'description';
      document.head.appendChild(descTag);
    }
    descTag.content = meta.description;

    // Handle robots meta tag (noindex for private pages)
    let robotsTag = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (meta.noindex) {
      if (!robotsTag) {
        robotsTag = document.createElement('meta');
        robotsTag.name = 'robots';
        document.head.appendChild(robotsTag);
      }
      robotsTag.content = 'noindex, nofollow';
    } else if (robotsTag) {
      // Remove noindex if page should be indexed
      robotsTag.remove();
    }

    // Update or create Open Graph tags
    setMetaProperty('og:title', meta.title);
    setMetaProperty('og:description', meta.description);
    setMetaProperty('og:type', 'website');
    setMetaProperty('og:site_name', 'Digital Jaywalking');
  }, [meta.title, meta.description, meta.noindex]);
}

function setMetaProperty(property: string, content: string): void {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.content = content;
}
