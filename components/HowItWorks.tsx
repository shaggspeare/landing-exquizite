import React from 'react';
import { useData } from '../hooks/useData';
import { SectionHead } from './ui';

const HowItWorks: React.FC = () => {
  const d = useData().howItWorks;

  return (
    <section id="how-it-works" className="sec">
      <div className="wrap">
        <SectionHead n={6} label={d.sectionLabel} title={d.sectionTitle} lead={d.sectionSubtitle} />
        <ol className="steps">
          {d.steps.map((step: { title: string; desc: string }, i: number) => (
            <li key={i} className="step rv">
              <span className="num" aria-hidden="true">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
