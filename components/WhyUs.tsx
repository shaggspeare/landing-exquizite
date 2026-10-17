import React from 'react';
import { useData } from '../hooks/useData';
import { Icon, IconName, Lbl, Phone } from './ui';

const icons: IconName[] = ['bolt', 'globe', 'shield', 'pulse'];

const WhyUs: React.FC = () => {
  const d = useData().whyUs;

  return (
    <section id="why" className="sec sec-flush">
      <div className="wrap why-grid">
        <div className="why-vis" aria-hidden="true">
          <div className="sun" />
          <div className="why-shadow" />
          <Phone src="/images/screens/words.webp" delay="-2.4s" />
          <div className="card-w why-card">
            <span className="k"><Icon name="sparkle" className="ic icf" />{d.cardLabel}</span>
            <b>leche</b>
            <span className="tr">LEH-cheh</span>
            <span>milk</span>
          </div>
        </div>
        <div className="why-copy rv">
          <Lbl>(04) {d.sectionLabel}</Lbl>
          <h2 className="h2">{d.sectionTitle}</h2>
          <p className="lead">{d.sectionSubtitle}</p>
          <ul className="pts">
            {d.points.map((point: { title: string; description: string }, i: number) => (
              <li key={i}>
                <span className="pi"><Icon name={icons[i]} /></span>
                <div><h3>{point.title}</h3><p>{point.description}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
