import React, { useEffect, useRef, useState } from 'react';
import { useData } from '../hooks/useData';
import { Icon, Phone, SectionHead, pad, vars } from './ui';

// Order matches screenshotGallery.screenshots in the locale files.
const SHOTS = ['sets', 'practice', 'flashcard', 'quiz', 'fill-blank', 'learn-path', 'quick-generate', 'ai-suggestions', 'set-details', 'words'];

const ScreenshotGallery: React.FC = () => {
  const d = useData().screenshotGallery;
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);
  const hover = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused || focused) return;
    const timer = setInterval(() => { if (!hover.current) setSlide((s) => s + 1); }, 4200);
    return () => clearInterval(timer);
  }, [paused, focused]);

  const idx = ((slide % SHOTS.length) + SHOTS.length) % SHOTS.length;

  return (
    <section id="app" className="sec dark">
      <div className="wrap">
        <SectionHead n={5} label={d.sectionLabel} title={d.sectionTitle} lead={d.sectionSubtitle} />
      </div>
      <div
        className="car"
        role="region"
        aria-roledescription={d.roledescription}
        aria-label={d.carouselLabel}
        onMouseEnter={() => { hover.current = true; }}
        onMouseLeave={() => { hover.current = false; }}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false); }}
      >
        <div className="car-stage">
          <div className="car-floor" />
          <div className="car-tilt">
            <div className="car-ring" style={{ transform: `translateZ(calc(var(--R) * -1)) rotateY(${slide * -36}deg)` }}>
              {SHOTS.map((shot, k) => (
                <div key={shot} className="car-item" style={vars({ '--k': k })}>
                  <Phone src={`/images/screens/${shot}.webp`} alt={d.screenshots[k].alt} edges={10} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="wrap car-ctl">
          <div className="car-nav">
            <button type="button" className="car-btn" aria-label={d.prev} onClick={() => setSlide((s) => s - 1)}>
              <Icon name="arrowLeft" />
            </button>
            <div className="car-cap" aria-live={paused || focused ? 'polite' : 'off'} aria-atomic="true">
              <span className="lbl">{pad(idx + 1)} / {SHOTS.length}</span>
              <b>{d.screenshots[idx].name}</b>
            </div>
            <button type="button" className="car-btn" aria-label={d.next} onClick={() => setSlide((s) => s + 1)}>
              <Icon name="arrowRight" />
            </button>
          </div>
          <button type="button" className="car-play" aria-label={paused ? d.playLabel : d.pauseLabel} onClick={() => setPaused(!paused)}>
            <Icon name={paused ? 'play' : 'pause'} className="ic icf" />
            <span>{paused ? d.play : d.pause}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotGallery;
