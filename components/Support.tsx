import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { useLanguagePrefix } from '../hooks/useLanguagePrefix';

const Support: React.FC = () => {
  const data = useData();
  const d = data.support;
  const prefix = useLanguagePrefix();

  const renderSteps = (steps: string[], ordered = true) => {
    const Tag = ordered ? 'ol' : 'ul';
    return (
      <Tag className={`${ordered ? 'list-decimal' : 'list-disc'} pl-6 space-y-2 text-slate-600 mb-6`}>
        {steps.map((step: string, i: number) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        ))}
      </Tag>
    );
  };

  const renderBoldItems = (items: any[]) => (
    <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
      {items.map((item: any, i: number) => (
        <li key={i}>
          {typeof item === 'string' ? item : <><strong>{item.bold}</strong>: {item.text}</>}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{d.title}</h1>
          <p className="text-lg text-slate-600 mb-8">{d.subtitle}</p>

          {/* Table of Contents */}
          <div className="bg-slate-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{d.toc.title}</h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600">
              {d.toc.items.map((item: any, i: number) => (
                <li key={i}><a href={`#${item.id}`} className="text-primary-600 hover:underline">{item.label}</a></li>
              ))}
            </ol>
          </div>

          {/* Getting Started */}
          <section id="getting-started" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{d.gettingStarted.title}</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.gettingStarted.whatIs.title}</h3>
            <p className="text-slate-600 mb-6">{d.gettingStarted.whatIs.content}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.gettingStarted.needAccount.title}</h3>
            <p className="text-slate-600 mb-3">{d.gettingStarted.needAccount.intro}</p>
            {renderBoldItems(d.gettingStarted.needAccount.options)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.gettingStarted.howToStart.title}</h3>
            {renderSteps(d.gettingStarted.howToStart.steps)}
          </section>

          {/* Account & Login */}
          <section id="account-login" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{d.accountLogin.title}</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.accountLogin.createAccount.title}</h3>
            {renderSteps(d.accountLogin.createAccount.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.accountLogin.forgotPassword.title}</h3>
            {renderSteps(d.accountLogin.forgotPassword.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.accountLogin.guestToAccount.title}</h3>
            <p className="text-slate-600 mb-3">{d.accountLogin.guestToAccount.intro}</p>
            {renderSteps(d.accountLogin.guestToAccount.steps)}
            <p className="text-slate-600 italic mb-6">{d.accountLogin.guestToAccount.note}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.accountLogin.logout.title}</h3>
            {renderSteps(d.accountLogin.logout.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.accountLogin.deleteAccount.title}</h3>
            <p className="text-slate-600">{d.accountLogin.deleteAccount.content}</p>
          </section>

          {/* Creating Vocabulary Sets */}
          <section id="creating-vocabulary-sets" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{d.creatingVocabularySets.title}</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.creatingVocabularySets.createNew.title}</h3>
            {renderSteps(d.creatingVocabularySets.createNew.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.creatingVocabularySets.wordLimit.title}</h3>
            <p className="text-slate-600 mb-6">{d.creatingVocabularySets.wordLimit.content}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.creatingVocabularySets.aiGeneration.title}</h3>
            <p className="text-slate-600 mb-3">{d.creatingVocabularySets.aiGeneration.intro}</p>
            {renderSteps(d.creatingVocabularySets.aiGeneration.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.creatingVocabularySets.bulkImport.title}</h3>
            <p className="text-slate-600 mb-3">{d.creatingVocabularySets.bulkImport.intro}</p>
            <div className="bg-slate-50 rounded-lg p-4 mb-6 space-y-4">
              {d.creatingVocabularySets.bulkImport.formats.map((fmt: any, i: number) => (
                <div key={i}>
                  <p className="font-semibold text-slate-700 mb-2">{fmt.name}</p>
                  <code className="block bg-slate-800 text-slate-100 p-3 rounded text-sm whitespace-pre-line">{fmt.example}</code>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.creatingVocabularySets.editSet.title}</h3>
            {renderSteps(d.creatingVocabularySets.editSet.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.creatingVocabularySets.deleteSet.title}</h3>
            {renderSteps(d.creatingVocabularySets.deleteSet.steps)}
            <p className="text-slate-600 font-semibold mb-6">{d.creatingVocabularySets.deleteSet.warning}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.creatingVocabularySets.differentLanguages.title}</h3>
            <p className="text-slate-600 mb-3">{d.creatingVocabularySets.differentLanguages.intro}</p>
            {renderSteps(d.creatingVocabularySets.differentLanguages.steps)}
          </section>

          {/* Game Modes */}
          <section id="game-modes" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{d.gameModes.title}</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.gameModes.available.title}</h3>
            <p className="text-slate-600 mb-3">{d.gameModes.available.intro}</p>
            {renderBoldItems(d.gameModes.available.modes)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.gameModes.howToPlay.title}</h3>
            {renderSteps(d.gameModes.howToPlay.steps)}

            <div className="space-y-6">
              {d.gameModes.modeDetails.map((mode: any, i: number) => (
                <div key={i} className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">{mode.title}</h4>
                  <ul className="list-disc pl-6 space-y-1 text-slate-600">
                    {mode.items.map((item: string, j: number) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">{d.gameModes.replay.title}</h3>
            <p className="text-slate-600">{d.gameModes.replay.content}</p>
          </section>

          {/* Sharing Sets */}
          <section id="sharing-sets" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{d.sharingSets.title}</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.sharingSets.howToShare.title}</h3>
            {renderSteps(d.sharingSets.howToShare.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.sharingSets.useShared.title}</h3>
            {renderSteps(d.sharingSets.useShared.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.sharingSets.viewStats.title}</h3>
            <p className="text-slate-600 mb-3">{d.sharingSets.viewStats.intro}</p>
            {renderBoldItems(d.sharingSets.viewStats.items)}
            <p className="text-slate-600 mb-6">{d.sharingSets.viewStats.note}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.sharingSets.stopSharing.title}</h3>
            <p className="text-slate-600 mb-3">{d.sharingSets.stopSharing.intro}</p>
            {renderSteps(d.sharingSets.stopSharing.steps)}
            <p className="text-slate-600 mb-6">{d.sharingSets.stopSharing.note}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.sharingSets.autoUpdate.title}</h3>
            <p className="text-slate-600">{d.sharingSets.autoUpdate.content}</p>
          </section>

          {/* Settings & Preferences */}
          <section id="settings-preferences" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{d.settingsPreferences.title}</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.settingsPreferences.appLanguage.title}</h3>
            <p className="text-slate-600 mb-3">{d.settingsPreferences.appLanguage.intro}</p>
            {renderSteps(d.settingsPreferences.appLanguage.steps)}
            <p className="text-slate-600 mb-6">{d.settingsPreferences.appLanguage.note}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.settingsPreferences.learningLanguages.title}</h3>
            {renderSteps(d.settingsPreferences.learningLanguages.steps)}
            <p className="text-slate-600 mb-6">{d.settingsPreferences.learningLanguages.note}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.settingsPreferences.darkMode.title}</h3>
            {renderSteps(d.settingsPreferences.darkMode.steps)}
            <p className="text-slate-600 mb-6">{d.settingsPreferences.darkMode.note}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.settingsPreferences.tour.title}</h3>
            <p className="text-slate-600 mb-3">{d.settingsPreferences.tour.intro}</p>
            {renderSteps(d.settingsPreferences.tour.steps)}
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{d.troubleshooting.title}</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.troubleshooting.syncIssue.title}</h3>
            <p className="text-slate-600 mb-3"><strong>{d.troubleshooting.syncIssue.accountSteps.label}</strong></p>
            {renderSteps(d.troubleshooting.syncIssue.accountSteps.steps)}
            <p className="text-slate-600 mb-6">{d.troubleshooting.syncIssue.guestNote}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.troubleshooting.crashing.title}</h3>
            <p className="text-slate-600 mb-3">{d.troubleshooting.crashing.intro}</p>
            {renderSteps(d.troubleshooting.crashing.steps)}
            <p className="text-slate-600 mb-6">{d.troubleshooting.crashing.note}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.troubleshooting.aiNotWorking.title}</h3>
            <p className="text-slate-600 mb-3">{d.troubleshooting.aiNotWorking.intro}</p>
            {renderSteps(d.troubleshooting.aiNotWorking.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.troubleshooting.sharedSetNotFound.title}</h3>
            <p className="text-slate-600 mb-3">{d.troubleshooting.sharedSetNotFound.intro}</p>
            {renderBoldItems(d.troubleshooting.sharedSetNotFound.items)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.troubleshooting.wrongLanguage.title}</h3>
            {renderSteps(d.troubleshooting.wrongLanguage.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.troubleshooting.lostSets.title}</h3>
            <p className="text-slate-600 mb-3">{d.troubleshooting.lostSets.content}</p>
            <p className="text-slate-600 mb-6">{d.troubleshooting.lostSets.recommendation}</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.troubleshooting.keyboardIssue.title}</h3>
            <p className="text-slate-600 mb-3">{d.troubleshooting.keyboardIssue.intro}</p>
            {renderSteps(d.troubleshooting.keyboardIssue.steps)}
            <p className="text-slate-600 italic">{d.troubleshooting.keyboardIssue.note}</p>
          </section>

          {/* Privacy & Data */}
          <section id="privacy-data" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{d.privacyData.title}</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.privacyData.isSecure.title}</h3>
            <p className="text-slate-600 mb-3">{d.privacyData.isSecure.intro}</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-3">
              {d.privacyData.isSecure.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
            </ul>
            <p className="text-slate-600 mb-6">
              <Link to={`${prefix}/privacy-policy`} className="text-primary-600 hover:underline">Privacy Policy</Link>
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.privacyData.whatCollected.title}</h3>
            {renderBoldItems(d.privacyData.whatCollected.collected)}
            <p className="text-slate-600 mb-3">{d.privacyData.whatCollected.notCollectedIntro}</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
              {d.privacyData.whatCollected.notCollected.map((item: string, i: number) => <li key={i}>{item}</li>)}
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.privacyData.thirdPartySharing.title}</h3>
            <p className="text-slate-600 mb-3">{d.privacyData.thirdPartySharing.intro}</p>
            {renderBoldItems(d.privacyData.thirdPartySharing.services)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.privacyData.downloadData.title}</h3>
            <p className="text-slate-600 mb-3">{d.privacyData.downloadData.intro}</p>
            {renderSteps(d.privacyData.downloadData.steps)}

            <h3 className="text-xl font-semibold text-slate-900 mb-3">{d.privacyData.deleteAccountData.title}</h3>
            <p className="text-slate-600 mb-3"><strong>{d.privacyData.deleteAccountData.label}</strong></p>
            {renderSteps(d.privacyData.deleteAccountData.steps)}
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-3">
              {d.privacyData.deleteAccountData.importantNotes.map((note: string, i: number) => <li key={i}>{note}</li>)}
            </ul>
            <p className="text-slate-600 italic">{d.privacyData.deleteAccountData.comingSoon}</p>
          </section>

          {/* Contact Us */}
          <section id="contact-us" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{d.contactUs.title}</h2>
            <div className="space-y-6">
              {d.contactUs.categories.map((cat: any, i: number) => (
                <div key={i} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{cat.title}</h3>
                  <p className="text-slate-600 mb-2">
                    <strong>Email</strong>: <a href={`mailto:${cat.email}`} className="text-primary-600 hover:underline">{cat.email}</a>
                  </p>
                  <p className="text-slate-600">{cat.responseTime}</p>
                  {cat.subject && <p className="text-slate-600 mt-2"><strong>Subject</strong>: {cat.subject}</p>}
                  {cat.includeItems && (
                    <ul className="list-disc pl-6 space-y-1 text-slate-600 mt-2">
                      {cat.includeItems.map((item: string, j: number) => <li key={j}>{item}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{d.supportFaq.title}</h2>
            <div className="space-y-6">
              {d.supportFaq.items.map((item: any, i: number) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips for Learning */}
          <section className="bg-primary-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{d.learningTips.title}</h2>
            <div className="space-y-4 text-slate-600">
              {d.learningTips.tips.map((tip: any, i: number) => (
                <div key={i}>
                  <h4 className="font-semibold text-slate-900 mb-1">{tip.title}</h4>
                  <p>{tip.content}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center text-slate-500 text-sm">
            <p className="mb-2">{d.thankYou}</p>
            <p>{d.lastUpdated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
