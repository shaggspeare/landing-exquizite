import React from 'react';
import { useData } from '../hooks/useData';
import { AppStoreButton, Icon, Lbl, Phone, vars } from './ui';

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Wraps the locale's "actually" in an outline and its "need" in the accent. */
const mark = (text: string, outline: string, accent: string) =>
  text.split(new RegExp(`(${esc(outline)}|${esc(accent)})`)).map((part, i) =>
    part === outline ? <em key={i} className="ol">{part}</em>
      : part === accent ? <em key={i} className="ac">{part}</em>
      : part
  );

const Tape: React.FC<{ items: string[]; className: string }> = ({ items, className }) => (
  <div className={`tape tape-${className}`}>
    <div className={`run${className === 'b' ? ' run-r' : ''}`}>
      {/* four copies so the -50% marquee loops seamlessly; only the first is read out */}
      {[0, 1, 2, 3].flatMap((copy) =>
        items.map((item, i) => (
          <span key={`${copy}-${i}`} aria-hidden={copy > 0 || undefined}>
            {item}<Icon name="star" className="star" />
          </span>
        ))
      )}
    </div>
  </div>
);

const Hero: React.FC = () => {
  const data = useData();
  const d = data.hero;
  const c = d.cards;

  const move = (e: React.MouseEvent<HTMLElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const leave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty('--mx', '0');
    e.currentTarget.style.setProperty('--my', '0');
  };

  return (
    <>
      <section id="top" className="hero" onMouseMove={move} onMouseLeave={leave}>
        <div className="hero-lines" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="hero-meta">
            <Lbl>{d.badge}</Lbl>
            <span className="lbl hide-sm">{d.tagline}</span>
          </div>
          <h1 className="hero-h">
            <span className="ln"><span>{mark(d.titleLine1, d.titleOutline, d.titleAccent)}</span></span>{' '}
            <span className="ln ln2"><span>{mark(d.titleLine2, d.titleOutline, d.titleAccent)}</span></span>
          </h1>
          <div className="hero-sub">
            <p className="lead">{d.subtitle}</p>
            <div className="hero-cta">
              <div className="btn-row">
                <AppStoreButton url={d.appStoreUrl} small={d.appStoreSmall} />
                <a className="btn btn-line" href={d.webAppUrl}><Icon name="monitor" />{d.webAppButton}</a>
              </div>
              <p className="note">{d.freeNote}</p>
            </div>
          </div>
        </div>

        <div className="stage" role="img" aria-label={d.stageLabel}>
          <div className="floor" />
          <div className="scene">
            <Phone className="hp-l" src="/images/screens/practice.webp" delay="-3.1s" eager
              style={vars({ '--pw': '250px', transform: 'translateZ(-30px) rotateY(26deg) rotateZ(-2deg)' })} />
            <Phone className="hp-r" src="/images/screens/quiz.webp" delay="-5.2s" eager
              style={vars({ '--pw': '250px', transform: 'translateZ(-50px) rotateY(-26deg) rotateZ(2deg)' })} />
            {/* Drop /videos/demo.mp4 in and rebuild: the centre phone plays it. */}
            <Phone className="hp-c" src="/images/screens/sets.webp" delay="-1.2s" eager
              video={__HAS_HERO_VIDEO__ ? '/videos/demo.mp4' : undefined}
              style={vars({ '--pw': '290px', transform: 'translateZ(90px) rotateX(5deg) rotateY(-7deg)' })} />

            <div className="fc hc-fl" style={{ transform: 'translateZ(160px) rotateY(16deg) rotateZ(-9deg)' }}>
              <div className="fc-in" style={{ animationDelay: '-2s' }}>
                <div className="c-flight"><small>{c.flashcard}</small><b>viaje</b></div>
              </div>
            </div>
            <div className="fc hc-tr" style={{ transform: 'translateZ(200px) rotateY(-14deg) rotateZ(5deg)' }}>
              <div className="fc-in" style={{ animationDelay: '-4s' }}>
                <div className="card-w c-trans">
                  <span className="k">{c.translate}</span>
                  <b>leche</b>
                  <span className="tr"><Icon name="speaker" />LEH-cheh</span>
                  <div className="ans"><span className="ckd"><Icon name="check" /></span>milk</div>
                </div>
              </div>
            </div>
            <div className="fc hc-pe" style={{ transform: 'translateZ(220px) rotateZ(5deg)' }}>
              <div className="fc-in" style={{ animationDelay: '-1s' }}>
                <div className="card-w c-pill"><b>ciervo</b><span className="w">deer</span><span className="ckd"><Icon name="check" /></span></div>
              </div>
            </div>
            <div className="fc hc-ge" style={{ transform: 'translateZ(240px) rotateZ(-5deg)' }}>
              <div className="fc-in" style={{ animationDelay: '-3s' }}>
                <div className="c-gen"><Icon name="plus" />{c.addWords}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tapes" aria-label={data.tapes.label}>
        <Tape className="a" items={data.bentoFeatures.tiles.learnYourWay.modes} />
        <Tape className="b" items={data.tapes.features} />
      </section>
    </>
  );
};

export default Hero;
