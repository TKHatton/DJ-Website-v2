import React, { useEffect } from 'react';

interface JsonLdProps {
  schemas: object[];
}

/**
 * Renders JSON-LD structured data into the document head.
 * Cleans up on unmount so schemas swap when pages change.
 */
const JsonLd: React.FC<JsonLdProps> = ({ schemas }) => {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];

    for (const schema of schemas) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.setAttribute('data-jsonld', 'true');
      document.head.appendChild(script);
      scripts.push(script);
    }

    return () => {
      for (const script of scripts) {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      }
    };
  }, [schemas]);

  return null;
};

export default JsonLd;
