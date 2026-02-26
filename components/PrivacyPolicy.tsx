import React from 'react';
import { useData } from '../hooks/useData';

const PrivacyPolicy: React.FC = () => {
  const data = useData();
  const d = data.privacyPolicy;

  const renderItems = (items: any[]) =>
    items.map((item: any, i: number) => (
      <li key={i}>
        {typeof item === 'string' ? (
          item
        ) : (
          <>
            <strong>{item.bold}</strong>: {item.text}
            {item.subItems && (
              <ul className="list-disc pl-6 mt-2 space-y-1">
                {item.subItems.map((sub: string, j: number) => (
                  <li key={j}>{sub}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </li>
    ));

  const renderSection = (section: any, idx: number) => {
    if (section.content) {
      return (
        <section key={idx} className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
          <p className="text-slate-600 leading-relaxed">{section.content}</p>
        </section>
      );
    }

    return (
      <section key={idx} className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>

        {section.intro && <p className="text-slate-600 mb-3">{section.intro}</p>}
        {section.intro2 && <p className="text-slate-600 mb-3">{section.intro2}</p>}

        {section.items && (
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            {renderItems(section.items)}
          </ul>
        )}

        {section.subsections?.map((sub: any, j: number) => (
          <div key={j}>
            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">{sub.title}</h3>
            {sub.intro && <p className="text-slate-600 mb-3">{sub.intro}</p>}
            {sub.items && (
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                {renderItems(sub.items)}
              </ul>
            )}
            {sub.note && <p className="text-slate-600 mt-3 italic">{sub.note}</p>}
            {sub.privacyUrl && (
              <p className="text-slate-600 mt-2">
                <a href={sub.privacyUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  {sub.privacyUrl}
                </a>
              </p>
            )}
          </div>
        ))}

        {section.rights?.map((right: any, j: number) => (
          <div key={j}>
            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">{right.title}</h3>
            <p className="text-slate-600 mb-3">{right.description}</p>
            {right.steps && (
              <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
                {renderItems(right.steps)}
              </ol>
            )}
            {right.items && (
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                {right.items.map((item: string, k: number) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {section.note && <p className="text-slate-600 mt-3">{section.note}</p>}

        {section.contactInfo && (
          <div className="mt-4 text-slate-600 space-y-2">
            <p><strong>Email</strong>: <a href={`mailto:${section.contactInfo.email}`} className="text-primary-600 hover:underline">{section.contactInfo.email}</a></p>
            <p><strong>Developer</strong>: {section.contactInfo.developer}</p>
            <p><strong>Response Time</strong>: {section.contactInfo.responseTime}</p>
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{d.title}</h1>
          <p className="text-sm text-slate-500 mb-8">{d.lastUpdated}</p>

          {d.sections.map((section: any, idx: number) => renderSection(section, idx))}

          <div className="bg-slate-50 rounded-xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{d.summary.title}</h2>
            <p className="text-slate-600 mb-4">{d.summary.intro}</p>
            <ul className="space-y-2 text-slate-600">
              {d.summary.items.map((item: any, i: number) => (
                <li key={i}>
                  <strong>{item.label}</strong>: {item.value}
                </li>
              ))}
            </ul>
            <p className="text-slate-600 mt-4 italic">{d.summary.thankYou}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
