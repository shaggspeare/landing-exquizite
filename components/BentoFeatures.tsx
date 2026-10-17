import React from 'react';
import { useData } from '../hooks/useData';
import { ICON_SRC, Icon, Lbl, ModeDisc, Phone, SectionHead, pad, vars } from './ui';

const Head: React.FC<{ label: string; title: string; description: string }> = ({ label, title, description }) => (
  <div className="tile-head">
    <Lbl>{label}</Lbl>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const BentoFeatures: React.FC = () => {
  const d = useData().bentoFeatures;
  const t = d.tiles;

  return (
    <section id="features" className="sec sec-flush">
      <div className="wrap">
        <SectionHead n={3} label={d.sectionLabel} title={d.sectionTitle} lead={d.sectionSubtitle} />
        <div className="bento">

          <article className="tile t-modes rv">
            <Head {...t.learnYourWay} />
            <div className="fan" aria-hidden="true">
              <div className="fan-in">
                {t.learnYourWay.modes.map((mode: string, k: number) => (
                  <div key={k} className="mc" style={vars({ '--k': k })}>
                    <span className="mi">{pad(k + 1)}</span>
                    <ModeDisc k={k} />
                    <b>{mode}</b>
                    <small>{t.learnYourWay.hints[k]}</small>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="tile t-ai rv">
            <Head {...t.aiPowered} />
            <div className="ai-vis" aria-hidden="true">
              <div className="ai-glow" />
              <Phone src="/images/screens/ai-suggestions.webp" />
              <div className="ai-chip"><Icon name="sparkle" className="ic icf" />{t.aiPowered.chip}</div>
            </div>
          </article>

          <article className="tile t-sm rv">
            <Head {...t.nativeIos} />
            <div className="ios-vis" aria-hidden="true">
              <div className="ios-shadow" />
              <div className="appi">
                {Array.from({ length: 13 }, (_, i) => <i key={i} className="appi-l" style={vars({ '--i': i })} />)}
                <div className="appi-f"><img src={ICON_SRC} alt="" width={512} height={512} loading="lazy" decoding="async" /></div>
                <div className="appi-f appi-k"><img src={ICON_SRC} alt="" width={512} height={512} loading="lazy" decoding="async" /></div>
              </div>
            </div>
          </article>

          <article className="tile t-sm rv">
            <Head {...t.shareDiscover} />
            <div className="share-vis" aria-hidden="true">
              <div className="tk tk-ghost" />
              <div className="tk">
                <span className="lbl">{t.shareDiscover.codeLabel}</span>
                <div className="tk-code">{t.shareDiscover.code}<Icon name="copy" /></div>
                <div className="tk-cut" />
                <div className="tk-stats">
                  {t.shareDiscover.stats.map((s: { label: string; value: string }, i: number) => (
                    <div key={i}><b>{s.value}</b><span>{s.label}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="tile t-sm rv">
            <Head {...t.seamlessSync} />
            <div className="sync-vis" aria-hidden="true">
              <div className="sync-in">
                <div className="bw">
                  <div className="bw-top"><i /><i /><i /><span className="bw-url">app.calleo.xyz</span></div>
                  <div className="bw-body">
                    <b>food</b>
                    <div className="bw-row">pan<span>bread</span></div>
                    <div className="bw-row">arroz<span>rice</span></div>
                    <div className="bw-row">pollo<span>chicken</span></div>
                  </div>
                </div>
                <svg className="sync-arc" viewBox="0 0 170 64"><path d="M6 58C40 4 120 -2 164 40" /><circle cx="164" cy="40" r="4" /></svg>
                <div className="mp"><img src="/images/screens/set-details.webp" alt="" width={660} height={1435} loading="lazy" decoding="async" /></div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
