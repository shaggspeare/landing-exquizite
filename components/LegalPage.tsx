import React from 'react';
import { useData } from '../hooks/useData';
import { useSeo, SeoPage } from '../hooks/useSeo';

/** Terms and Cookie policy: plain prose + bullet lists, same shell as the
 *  privacy policy. Content lives in locales/<lang>/translation.json[page]. */
const LegalPage: React.FC<{ page: Extract<SeoPage, 'terms' | 'cookies'> }> = ({ page }) => {
  useSeo(page);
  const d = useData()[page];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{d.title}</h1>
          <p className="text-sm text-slate-500 mb-8">{d.lastUpdated}</p>

          {d.sections.map((section: any, i: number) => (
            <section key={i} className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
              {section.content && <p className="text-slate-600 leading-relaxed">{section.content}</p>}
              {section.intro && <p className="text-slate-600 mb-3">{section.intro}</p>}
              {section.items && (
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  {section.items.map((item: string, j: number) => <li key={j}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
