import React from 'react';
import { useData } from '../hooks/useData';
import { Phone, SectionHead, vars } from './ui';

// Each cube's four faces spell hello in English, French, Polish and Ukrainian.
const CUBES = [['H', 'S', 'C', 'В'], ['E', 'A', 'Z', 'І'], ['L', 'L', 'E', 'Т'], ['L', 'U', 'Ś', 'А'], ['O', 'T', 'Ć', 'Ю']];

const Languages: React.FC = () => {
  const d = useData().languages;

  return (
    <section id="languages" className="sec sec-flush">
      <div className="wrap">
        <SectionHead n={2} label={d.sectionLabel} title={d.sectionTitle} lead={d.sectionSubtitle} />
        <div className="lang-grid">
          <div className="lang-main">
            <div className="cubes-stage" role="img" aria-label={d.cubesLabel}>
              <div className="cubes-floor" />
              <div className="cubes">
                {CUBES.map((faces, ci) => (
                  <div key={ci} className={`cube${ci === 2 ? ' acc' : ''}`} style={vars({ '--ci': ci })}>
                    {faces.map((f, i) => <span key={i} className={`cf f${i}`}>{f}</span>)}
                    <span className="cf fl" /><span className="cf fr" />
                  </div>
                ))}
              </div>
            </div>
            <ul className="langs" aria-hidden="true">
              <li>English</li><li>Français</li><li>Polski</li><li>Українська</li>
            </ul>
          </div>
          <figure className="lang-phone">
            <div className="lang-vis"><Phone src="/images/screens/home-uk.webp" alt={d.phoneAlt} delay="-3.6s" /></div>
            <figcaption className="lbl"><span className="dot" />{d.phoneCaption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Languages;
