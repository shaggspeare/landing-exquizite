import React from 'react';
import { useData } from '../hooks/useData';
import { ModeDisc, SectionHead, pad, vars } from './ui';

const WhatsNew: React.FC = () => {
  const data = useData();
  const d = data.whatsNew;
  const q = d.quickGenerate;
  const { modes, hints } = data.bentoFeatures.tiles.learnYourWay;

  const visuals = [
    // 01: Listening + Writing
    <div className="v-in v1">
      <div className="mrow">
        <ModeDisc k={4} />
        <span className="mtx"><b>{modes[4]}</b><small>{hints[4]}</small></span>
        <span className="eq"><i /><i /><i /><i /><i /></span>
      </div>
      <div className="mrow">
        <ModeDisc k={5} />
        <span className="mtx"><b>{modes[5]}</b><small>{hints[5]}</small></span>
        <span className="typ"><span>flight</span><i /></span>
      </div>
    </div>,
    // 02: Quick Generate starting points
    <div className="v-in v2">
      <div className="qg qg-topic"><span className="qg-in">Doctor visit<i /></span><b>{q.newTopic}</b><small>{q.newTopicHint}</small></div>
      <div className="qg"><span className="qg-chip">Viajes</span><b>{q.fromSet}</b><small>{q.fromSetHint}</small></div>
      <div className="qg"><span className="qg-menu">café con leche</span><b>{q.scan}</b><small>{q.scanHint}</small></div>
      <div className="qg"><span className="qg-paste">El <em>tren</em> sale del <em>andén</em></span><b>{q.paste}</b><small>{q.pasteHint}</small></div>
    </div>,
    // 03: CEFR staircase
    <div className="v-in v3">
      {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level, i) => (
        <div key={level} className={`st${i === 5 ? ' on' : ''}`} style={vars({ '--h': `${50 + i * 26}px` })}>
          {i === 5 && <span className="st-flag">{level}</span>}{level}
        </div>
      ))}
    </div>,
  ];

  return (
    <section id="updates" className="sec">
      <div className="wrap">
        <SectionHead n={1} label={d.sectionLabel} title={d.sectionTitle} />
        <div className="upd">
          {d.items.map((item: { title: string; description: string }, i: number) => (
            <article key={i} className="upd-row rv">
              <span className="upd-n">{pad(i + 1)}</span>
              <h3 className="upd-t">{item.title}</h3>
              <p className="upd-d">{item.description}</p>
              <div className="upd-v" aria-hidden="true">{visuals[i]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
