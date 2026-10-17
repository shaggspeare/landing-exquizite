import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { useLanguagePrefix } from '../hooks/useLanguagePrefix';
import { useSeo } from '../hooks/useSeo';
import { ContentPage } from './ui';

const Steps: React.FC<{ steps: string[] }> = ({ steps }) => (
  <ol>
    {steps.map((step, i) => (
      <li key={i} dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
    ))}
  </ol>
);

const BoldItems: React.FC<{ items: any[] }> = ({ items }) => (
  <ul>
    {items.map((item: any, i: number) => (
      <li key={i}>{typeof item === 'string' ? item : <><strong>{item.bold}</strong>: {item.text}</>}</li>
    ))}
  </ul>
);

const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
);

const Support: React.FC = () => {
  useSeo('support');
  const data = useData();
  const d = data.support;
  const prefix = useLanguagePrefix();
  const gs = d.gettingStarted;
  const al = d.accountLogin;
  const cv = d.creatingVocabularySets;
  const gm = d.gameModes;
  const ss = d.sharingSets;
  const sp = d.settingsPreferences;
  const ts = d.troubleshooting;
  const pd = d.privacyData;

  return (
    <ContentPage label={data.footer.columns.support.title} meta={d.lastUpdated} title={d.title} lead={d.subtitle} toc={d.toc}>
      <section id="getting-started">
        <h2>{gs.title}</h2>
        <h3>{gs.whatIs.title}</h3>
        <p>{gs.whatIs.content}</p>
        <h3>{gs.needAccount.title}</h3>
        <p>{gs.needAccount.intro}</p>
        <BoldItems items={gs.needAccount.options} />
        <h3>{gs.howToStart.title}</h3>
        <Steps steps={gs.howToStart.steps} />
      </section>

      <section id="account-login">
        <h2>{al.title}</h2>
        <h3>{al.createAccount.title}</h3>
        <Steps steps={al.createAccount.steps} />
        <h3>{al.forgotPassword.title}</h3>
        <Steps steps={al.forgotPassword.steps} />
        <h3>{al.guestToAccount.title}</h3>
        <p>{al.guestToAccount.intro}</p>
        <Steps steps={al.guestToAccount.steps} />
        <p className="i">{al.guestToAccount.note}</p>
        <h3>{al.logout.title}</h3>
        <Steps steps={al.logout.steps} />
        <h3>{al.deleteAccount.title}</h3>
        <p>{al.deleteAccount.content}</p>
      </section>

      <section id="creating-vocabulary-sets">
        <h2>{cv.title}</h2>
        <h3>{cv.createNew.title}</h3>
        <Steps steps={cv.createNew.steps} />
        <h3>{cv.wordLimit.title}</h3>
        <p>{cv.wordLimit.content}</p>
        <h3>{cv.aiGeneration.title}</h3>
        <p>{cv.aiGeneration.intro}</p>
        <Steps steps={cv.aiGeneration.steps} />
        <h3>{cv.bulkImport.title}</h3>
        <p>{cv.bulkImport.intro}</p>
        {cv.bulkImport.formats.map((fmt: any, i: number) => (
          <div key={i} className="box">
            <h4>{fmt.name}</h4>
            <code>{fmt.example}</code>
          </div>
        ))}
        <h3>{cv.editSet.title}</h3>
        <Steps steps={cv.editSet.steps} />
        <h3>{cv.deleteSet.title}</h3>
        <Steps steps={cv.deleteSet.steps} />
        <p><strong>{cv.deleteSet.warning}</strong></p>
        <h3>{cv.differentLanguages.title}</h3>
        <p>{cv.differentLanguages.intro}</p>
        <Steps steps={cv.differentLanguages.steps} />
      </section>

      <section id="game-modes">
        <h2>{gm.title}</h2>
        <h3>{gm.available.title}</h3>
        <p>{gm.available.intro}</p>
        <BoldItems items={gm.available.modes} />
        <h3>{gm.howToPlay.title}</h3>
        <Steps steps={gm.howToPlay.steps} />
        {gm.modeDetails.map((mode: any, i: number) => (
          <div key={i} className="box">
            <h4>{mode.title}</h4>
            <List items={mode.items} />
          </div>
        ))}
        <h3>{gm.replay.title}</h3>
        <p>{gm.replay.content}</p>
      </section>

      <section id="sharing-sets">
        <h2>{ss.title}</h2>
        <h3>{ss.howToShare.title}</h3>
        <Steps steps={ss.howToShare.steps} />
        <h3>{ss.useShared.title}</h3>
        <Steps steps={ss.useShared.steps} />
        <h3>{ss.viewStats.title}</h3>
        <p>{ss.viewStats.intro}</p>
        <BoldItems items={ss.viewStats.items} />
        <p>{ss.viewStats.note}</p>
        <h3>{ss.stopSharing.title}</h3>
        <p>{ss.stopSharing.intro}</p>
        <Steps steps={ss.stopSharing.steps} />
        <p>{ss.stopSharing.note}</p>
        <h3>{ss.autoUpdate.title}</h3>
        <p>{ss.autoUpdate.content}</p>
      </section>

      <section id="settings-preferences">
        <h2>{sp.title}</h2>
        <h3>{sp.appLanguage.title}</h3>
        <p>{sp.appLanguage.intro}</p>
        <Steps steps={sp.appLanguage.steps} />
        <p>{sp.appLanguage.note}</p>
        <h3>{sp.learningLanguages.title}</h3>
        <Steps steps={sp.learningLanguages.steps} />
        <p>{sp.learningLanguages.note}</p>
        <h3>{sp.darkMode.title}</h3>
        <Steps steps={sp.darkMode.steps} />
        <p>{sp.darkMode.note}</p>
        <h3>{sp.tour.title}</h3>
        <p>{sp.tour.intro}</p>
        <Steps steps={sp.tour.steps} />
      </section>

      <section id="troubleshooting">
        <h2>{ts.title}</h2>
        <h3>{ts.syncIssue.title}</h3>
        <p><strong>{ts.syncIssue.accountSteps.label}</strong></p>
        <Steps steps={ts.syncIssue.accountSteps.steps} />
        <p>{ts.syncIssue.guestNote}</p>
        <h3>{ts.crashing.title}</h3>
        <p>{ts.crashing.intro}</p>
        <Steps steps={ts.crashing.steps} />
        <p>{ts.crashing.note}</p>
        <h3>{ts.aiNotWorking.title}</h3>
        <p>{ts.aiNotWorking.intro}</p>
        <Steps steps={ts.aiNotWorking.steps} />
        <h3>{ts.sharedSetNotFound.title}</h3>
        <p>{ts.sharedSetNotFound.intro}</p>
        <BoldItems items={ts.sharedSetNotFound.items} />
        <h3>{ts.wrongLanguage.title}</h3>
        <Steps steps={ts.wrongLanguage.steps} />
        <h3>{ts.lostSets.title}</h3>
        <p>{ts.lostSets.content}</p>
        <p>{ts.lostSets.recommendation}</p>
        <h3>{ts.keyboardIssue.title}</h3>
        <p>{ts.keyboardIssue.intro}</p>
        <Steps steps={ts.keyboardIssue.steps} />
        <p className="i">{ts.keyboardIssue.note}</p>
      </section>

      <section id="privacy-data">
        <h2>{pd.title}</h2>
        <h3>{pd.isSecure.title}</h3>
        <p>{pd.isSecure.intro}</p>
        <List items={pd.isSecure.items} />
        <p><Link to={`${prefix}/privacy-policy`}>{data.privacyPolicy.title}</Link></p>
        <h3>{pd.whatCollected.title}</h3>
        <BoldItems items={pd.whatCollected.collected} />
        <p>{pd.whatCollected.notCollectedIntro}</p>
        <List items={pd.whatCollected.notCollected} />
        <h3>{pd.thirdPartySharing.title}</h3>
        <p>{pd.thirdPartySharing.intro}</p>
        <BoldItems items={pd.thirdPartySharing.services} />
        <h3>{pd.downloadData.title}</h3>
        <p>{pd.downloadData.intro}</p>
        <Steps steps={pd.downloadData.steps} />
        <h3>{pd.deleteAccountData.title}</h3>
        <p><strong>{pd.deleteAccountData.label}</strong></p>
        <Steps steps={pd.deleteAccountData.steps} />
        <List items={pd.deleteAccountData.importantNotes} />
        <p className="i">{pd.deleteAccountData.comingSoon}</p>
      </section>

      <section id="contact-us">
        <h2>{d.contactUs.title}</h2>
        {d.contactUs.categories.map((cat: any, i: number) => (
          <div key={i} className="box">
            <h3>{cat.title}</h3>
            <p><strong>Email</strong>: <a href={`mailto:${cat.email}`}>{cat.email}</a></p>
            <p>{cat.responseTime}</p>
            {cat.subject && <p><strong>Subject</strong>: {cat.subject}</p>}
            {cat.includeItems && <List items={cat.includeItems} />}
          </div>
        ))}
      </section>

      <section>
        <h2>{d.supportFaq.title}</h2>
        {d.supportFaq.items.map((item: any, i: number) => (
          <div key={i}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>{d.learningTips.title}</h2>
        {d.learningTips.tips.map((tip: any, i: number) => (
          <div key={i}>
            <h3>{tip.title}</h3>
            <p>{tip.content}</p>
          </div>
        ))}
        <p className="doc-foot">{d.thankYou}</p>
      </section>
    </ContentPage>
  );
};

export default Support;
