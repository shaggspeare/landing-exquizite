import React from 'react';
import { useData } from '../hooks/useData';
import { useSeo } from '../hooks/useSeo';
import { ContentPage } from './ui';

const PrivacyPolicy: React.FC = () => {
  useSeo('privacy-policy');
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
              <ul>{item.subItems.map((sub: string, j: number) => <li key={j}>{sub}</li>)}</ul>
            )}
          </>
        )}
      </li>
    ));

  const renderSection = (section: any, idx: number) => (
    <section key={idx}>
      <h2>{section.title}</h2>
      {section.content && <p>{section.content}</p>}
      {section.intro && <p>{section.intro}</p>}
      {section.intro2 && <p>{section.intro2}</p>}
      {section.items && <ul>{renderItems(section.items)}</ul>}

      {section.subsections?.map((sub: any, j: number) => (
        <div key={j}>
          <h3>{sub.title}</h3>
          {sub.intro && <p>{sub.intro}</p>}
          {sub.items && <ul>{renderItems(sub.items)}</ul>}
          {sub.note && <p className="i">{sub.note}</p>}
          {sub.privacyUrl && (
            <p><a href={sub.privacyUrl} target="_blank" rel="noopener noreferrer">{sub.privacyUrl}</a></p>
          )}
        </div>
      ))}

      {section.rights?.map((right: any, j: number) => (
        <div key={j}>
          <h3>{right.title}</h3>
          <p>{right.description}</p>
          {right.steps && <ol>{renderItems(right.steps)}</ol>}
          {right.items && <ul>{right.items.map((item: string, k: number) => <li key={k}>{item}</li>)}</ul>}
        </div>
      ))}

      {section.note && <p>{section.note}</p>}

      {section.contactInfo && (
        <div className="box">
          <p><strong>Email</strong>: <a href={`mailto:${section.contactInfo.email}`}>{section.contactInfo.email}</a></p>
          <p><strong>Developer</strong>: {section.contactInfo.developer}</p>
          <p><strong>Response Time</strong>: {section.contactInfo.responseTime}</p>
        </div>
      )}
    </section>
  );

  return (
    <ContentPage label={data.footer.columns.legal.title} meta={d.lastUpdated} title={d.title}>
      {d.sections.map(renderSection)}
      <section>
        <h2>{d.summary.title}</h2>
        <div className="box">
          <p>{d.summary.intro}</p>
          <ul>
            {d.summary.items.map((item: any, i: number) => (
              <li key={i}><strong>{item.label}</strong>: {item.value}</li>
            ))}
          </ul>
          <p className="i">{d.summary.thankYou}</p>
        </div>
      </section>
    </ContentPage>
  );
};

export default PrivacyPolicy;
