import React from 'react';

/** Shared bits of the editorial design: icons, the 3D phone, section labels. */

const ICONS = {
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
  download: <><path d="M12 4v11" /><path d="m7 10 5 5 5-5" /><path d="M5 20h14" /></>,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2.5" /><path d="M8 21h8" /><path d="M12 17v4" /></>,
  speaker: <><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4Z" /><path d="M15.5 9a4 4 0 0 1 0 6" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  star: <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1" />,
  layers: <><path d="M12 3 21 8l-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>,
  swap: <><path d="M4 8h13l-3-3" /><path d="M20 16H7l3 3" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9.4a2.5 2.5 0 1 1 3.6 2.3c-.7.4-1.2.9-1.2 1.7v.4" /><path d="M12 17h.01" /></>,
  blank: <><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><path d="m9 15 1-3 5-5 2 2-5 5-3 1Z" /></>,
  headphones: <><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><rect x="3" y="14" width="4.5" height="6.5" rx="1.6" /><rect x="16.5" y="14" width="4.5" height="6.5" rx="1.6" /></>,
  pen: <><path d="M15.5 4.5 19.5 8.5 9 19H5v-4L15.5 4.5Z" /><path d="m13.5 6.5 4 4" /></>,
  sparkle: <path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5-6.5-2L10 9l2-6.5Z" />,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2.5" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
  bolt: <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8Z" />,
  shield: <><path d="M12 3 19.5 6v6c0 4.6-3.2 7.9-7.5 9-4.3-1.1-7.5-4.4-7.5-9V6L12 3Z" /><path d="m9 12 2 2 4-4" /></>,
  pulse: <path d="M3 12h4l2.5-6 5 12 2.5-6H21" />,
  arrowLeft: <><path d="M19 12H5" /><path d="m11 6-6 6 6 6" /></>,
  arrowRight: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  pause: <><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></>,
  play: <path d="M7 4.5v15l12.5-7.5L7 4.5Z" />,
};

export type IconName = keyof typeof ICONS;

export const Icon: React.FC<{ name: IconName; className?: string }> = ({ name, className = 'ic' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">{ICONS[name]}</svg>
);

/** Inline style with CSS custom properties (`--k`, `--pw`, …). */
export const vars = (v: Record<string, string | number>) => v as React.CSSProperties;

export const pad = (n: number) => String(n).padStart(2, '0');

export const Lbl: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="lbl"><span className="dot" />{children}</span>
);

export const SectionHead: React.FC<{ n: number; label: string; title: string; lead?: string }> = ({ n, label, title, lead }) => (
  <div className="sh rv">
    <Lbl>({pad(n)}) {label}</Lbl>
    <h2 className="h2">{title}</h2>
    {lead && <p className="lead">{lead}</p>}
  </div>
);

export const ICON_SRC = '/images/calleo-icon.webp';

/** The six practice modes, in app order: icon and disc colours. */
const MODES: { icon: IconName; bg: string; fg?: string }[] = [
  { icon: 'layers', bg: '#FF4A1A' },
  { icon: 'swap', bg: '#E04CF2' },
  { icon: 'help', bg: '#13A355' },
  { icon: 'blank', bg: '#2D49E8', fg: '#FBFAF7' },
  { icon: 'headphones', bg: '#C8EC2C' },
  { icon: 'pen', bg: '#FF5C5C' },
];

export const ModeDisc: React.FC<{ k: number }> = ({ k }) => (
  <span className="mdisc" style={{ background: MODES[k].bg, color: MODES[k].fg ?? '#0A0A0A' }}>
    <Icon name={MODES[k].icon} />
  </span>
);

export const AppStoreButton: React.FC<{ url: string; small: string }> = ({ url, small }) => (
  <a className="btn btn-ink" href={url}>
    <Icon name="download" />
    <span className="stk"><small>{small}</small><b>App Store</b></span>
  </a>
);

/** A 3D iPhone: stacked edge layers for thickness, a back with the app icon,
 *  and the screenshot (or a looping video) on the front. */
export const Phone: React.FC<{
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: string;
  edges?: number;
  eager?: boolean;
  video?: string;
}> = ({ src, alt = '', className = '', style, delay, edges = 14, eager, video }) => (
  <div className={`ph ${className}`} style={style}>
    <div className="ph-b" style={delay ? { animationDelay: delay } : undefined}>
      {Array.from({ length: edges }, (_, i) => <i key={i} className="ph-e" style={vars({ '--i': i })} />)}
      <div className="ph-bk"><img src={ICON_SRC} alt="" width={512} height={512} loading="lazy" decoding="async" /></div>
      <div className="ph-fr">
        {video ? (
          <video src={video} poster={src} aria-label={alt || undefined} width={660} height={1435} autoPlay muted loop playsInline />
        ) : (
          <img src={src} alt={alt} width={660} height={1435} loading={eager ? 'eager' : 'lazy'} decoding="async" />
        )}
        <span className="ph-gl" />
      </div>
    </div>
  </div>
);

/** Shell for the support and legal pages: editorial header, optional sticky
 *  table of contents, and a paper sheet that styles plain prose (`.doc`). */
export const ContentPage: React.FC<{
  label: string;
  meta?: string;
  title: string;
  lead?: string;
  toc?: { title: string; items: { id: string; label: string }[] };
  children: React.ReactNode;
}> = ({ label, meta, title, lead, toc, children }) => (
  <div className="page">
    <div className="wrap">
      <div className="hero-meta">
        <Lbl>{label}</Lbl>
        {meta && <span className="lbl">{meta}</span>}
      </div>
      <h1 className="page-h">{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      <div className={`page-grid${toc ? '' : ' solo'}`}>
        {toc && (
          <nav className="page-aside" aria-label={toc.title}>
            <span className="lbl">{toc.title}</span>
            <ol className="toc">
              {toc.items.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}
            </ol>
          </nav>
        )}
        <div className="doc">{children}</div>
      </div>
    </div>
  </div>
);
