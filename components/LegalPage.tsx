import React from 'react';
import { useData } from '../hooks/useData';
import { useSeo, SeoPage } from '../hooks/useSeo';
import { ContentPage } from './ui';

/** Terms and Cookie policy: plain prose + bullet lists, same shell as the
 *  privacy policy. Content lives in locales/<lang>/translation.json[page]. */
const LegalPage: React.FC<{ page: Extract<SeoPage, 'terms' | 'cookies'> }> = ({ page }) => {
  useSeo(page);
  const data = useData();
  const d = data[page];

  return (
    <ContentPage label={data.footer.columns.legal.title} meta={d.lastUpdated} title={d.title}>
      {d.sections.map((section: any, i: number) => (
        <section key={i}>
          <h2>{section.title}</h2>
          {section.content && <p>{section.content}</p>}
          {section.intro && <p>{section.intro}</p>}
          {section.items && (
            <ul>{section.items.map((item: string, j: number) => <li key={j}>{item}</li>)}</ul>
          )}
        </section>
      ))}
    </ContentPage>
  );
};

export default LegalPage;
