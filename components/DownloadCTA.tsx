import React from 'react';
import { useData } from '../hooks/useData';
import { AppStoreButton, Icon, Phone } from './ui';

const DownloadCTA: React.FC = () => {
  const data = useData();
  const d = data.downloadCTA;

  return (
    <section id="download" className="cta-sec">
      <div className="wrap">
        <div className="cta rv">
          <div className="cta-copy">
            <h2 className="cta-h">{d.title}</h2>
            <p className="cta-p">{d.subtitle}</p>
            <div className="btn-row">
              <AppStoreButton url={d.appStoreUrl} small={data.hero.appStoreSmall} />
              <a className="btn btn-paper" href={d.webAppUrl}>
                <Icon name="monitor" />{d.webButton}<Icon name="arrowRight" />
              </a>
            </div>
            <p className="cta-note">{d.disclaimer}</p>
          </div>
          <div className="cta-vis" aria-hidden="true">
            <Phone className="p1" src="/images/screens/flashcard.webp" delay="-1.8s" />
            <Phone className="p2" src="/images/screens/quick-generate.webp" delay="-4.4s" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
