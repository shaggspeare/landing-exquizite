import React from 'react';
import { useData } from '../hooks/useData';
import { Lbl, pad } from './ui';

const FAQ: React.FC = () => {
  const d = useData().faq;

  return (
    <section id="faq" className="sec sec-flush">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <Lbl>(08) {d.sectionLabel}</Lbl>
          <h2 className="h2">{d.sectionTitle}</h2>
        </div>
        <div>
          {d.items.map((item: { q: string; a: string }, i: number) => (
            <details key={i} className="qa">
              <summary>
                <span className="qn">{pad(i + 1)}</span>
                <span>{item.q}</span>
                <span className="qp" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
