import React from 'react';
import { useData } from '../hooks/useData';
import { Icon, Lbl } from './ui';

const Pricing: React.FC = () => {
  const d = useData().pricing;

  return (
    <section id="pricing" className="sec sec-flush">
      <div className="wrap free-grid">
        <div className="rv">
          <Lbl>(07) {d.sectionLabel}</Lbl>
          <h2 className="free-h"><span>{d.sectionTitle}</span>{' '}<span className="x">{d.sectionTitleAccent}</span></h2>
          <p className="lead">{d.sectionSubtitle}</p>
        </div>
        <div className="plan-wrap rv">
          <div className="sheet sheet-2" />
          <div className="sheet sheet-1" />
          <div className="plan">
            <Lbl>{d.planLabel}</Lbl>
            <h3>{d.planName}</h3>
            <p>{d.planDescription}</p>
            <ul className="checks">
              {d.features.map((feature: string, i: number) => (
                <li key={i}><span className="ckd"><Icon name="check" /></span>{feature}</li>
              ))}
            </ul>
            <a className="btn btn-ink" href="#download">{d.ctaButton}<Icon name="arrowRight" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
