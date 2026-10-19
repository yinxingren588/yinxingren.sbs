import React, { useEffect } from 'react';

interface TemporaryNoindexProps {
  title?: string;
}

export const TemporaryNoindex: React.FC<TemporaryNoindexProps> = ({ title }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    let created = false;

    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
      created = true;
    }

    const previousContent = meta.content;
    meta.content = 'noindex, nofollow';

    return () => {
      if (created && meta && meta.parentNode) {
        meta.parentNode.removeChild(meta);
      } else if (meta) {
        meta.content = previousContent;
      }
    };
  }, [title]);

  return null;
};
