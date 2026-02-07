import React from 'react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Exquizite Support</h1>
          <p className="text-lg text-slate-600 mb-8">
            Welcome to Exquizite Support! Find answers to common questions and get help with the app.
          </p>

          {/* Table of Contents */}
          <div className="bg-slate-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Table of Contents</h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600">
              <li><a href="#getting-started" className="text-primary-600 hover:underline">Getting Started</a></li>
              <li><a href="#account-login" className="text-primary-600 hover:underline">Account & Login</a></li>
              <li><a href="#creating-vocabulary-sets" className="text-primary-600 hover:underline">Creating Vocabulary Sets</a></li>
              <li><a href="#game-modes" className="text-primary-600 hover:underline">Game Modes</a></li>
              <li><a href="#sharing-sets" className="text-primary-600 hover:underline">Sharing Sets</a></li>
              <li><a href="#settings-preferences" className="text-primary-600 hover:underline">Settings & Preferences</a></li>
              <li><a href="#troubleshooting" className="text-primary-600 hover:underline">Troubleshooting</a></li>
              <li><a href="#privacy-data" className="text-primary-600 hover:underline">Privacy & Data</a></li>
              <li><a href="#contact-us" className="text-primary-600 hover:underline">Contact Us</a></li>
            </ol>
          </div>

          {/* Getting Started */}
          <section id="getting-started" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Getting Started</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">What is Exquizite?</h3>
            <p className="text-slate-600 mb-6">
              Exquizite is a language learning app that helps you master vocabulary through interactive games and flashcards. Create custom word sets, practice with fun game modes, and track your progress.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Do I need an account?</h3>
            <p className="text-slate-600 mb-3">No! You can use Exquizite in two ways:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
              <li><strong>Guest Mode</strong>: Use the app without signing up. Your sets are saved locally on your device only.</li>
              <li><strong>With Account</strong>: Sign up with email to sync your sets across all devices (iPhone, iPad, Android, Web).</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I get started?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600">
              <li>Download Exquizite from the App Store or Google Play</li>
              <li>Choose "Continue as Guest" or "Sign Up"</li>
              <li>Select your learning language (e.g., Spanish) and native language (e.g., English)</li>
              <li>Create your first vocabulary set</li>
              <li>Start practicing!</li>
            </ol>
          </section>

          {/* Account & Login */}
          <section id="account-login" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Account & Login</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I create an account?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Tap <strong>"Sign Up"</strong> on the login screen</li>
              <li>Enter your email address and create a password</li>
              <li>Tap <strong>"Create Account"</strong></li>
              <li>You'll be logged in automatically</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">I forgot my password. How do I reset it?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>On the login screen, tap <strong>"Forgot Password?"</strong></li>
              <li>Enter your email address</li>
              <li>Check your email for a password reset link</li>
              <li>Follow the link to create a new password</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I switch from Guest Mode to an account?</h3>
            <p className="text-slate-600 mb-3">Currently, Guest Mode data cannot be automatically transferred to an account. To preserve your sets:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-3">
              <li>Share each set you want to keep (get the share code)</li>
              <li>Create an account</li>
              <li>Use the share codes to copy sets to your new account</li>
            </ol>
            <p className="text-slate-600 italic mb-6">We're working on a direct migration feature!</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I log out?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Go to <strong>Profile</strong> (bottom tab)</li>
              <li>Scroll down and tap <strong>"Sign Out"</strong></li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I delete my account?</h3>
            <p className="text-slate-600">See the <a href="#privacy-data" className="text-primary-600 hover:underline">Privacy & Data</a> section below.</p>
          </section>

          {/* Creating Vocabulary Sets */}
          <section id="creating-vocabulary-sets" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Creating Vocabulary Sets</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I create a new vocabulary set?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Tap the <strong>"+"</strong> button on the home screen</li>
              <li>Enter a name for your set (e.g., "Spanish Food")</li>
              <li>Add word pairs:
                <ul className="list-disc pl-6 mt-2">
                  <li>Left column: Words in your <strong>learning language</strong></li>
                  <li>Right column: Translations in your <strong>native language</strong></li>
                </ul>
              </li>
              <li>Tap <strong>"Save"</strong> when done</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How many words can I add to a set?</h3>
            <p className="text-slate-600 mb-6">
              Each set can contain up to <strong>20 word pairs</strong>. This limit ensures optimal learning and performance.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I use AI to generate vocabulary?</h3>
            <p className="text-slate-600 mb-3">Yes! Tap the <strong>"AI Suggestions"</strong> button when creating a set:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Enter a theme (e.g., "restaurant vocabulary", "travel phrases")</li>
              <li>Choose how many words you want (up to 20)</li>
              <li>Review the AI-generated suggestions</li>
              <li>Select the words you want to add</li>
              <li>Edit or customize as needed</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I import words in bulk?</h3>
            <p className="text-slate-600 mb-3">Yes! Tap <strong>"Bulk Import"</strong> when creating a set. Format options:</p>
            <div className="bg-slate-50 rounded-lg p-4 mb-6 space-y-4">
              <div>
                <p className="font-semibold text-slate-700 mb-2">Option 1: Tab-separated</p>
                <code className="block bg-slate-800 text-slate-100 p-3 rounded text-sm">
                  word[TAB]translation<br/>
                  hola[TAB]hello<br/>
                  adiós[TAB]goodbye
                </code>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-2">Option 2: Hyphen-separated</p>
                <code className="block bg-slate-800 text-slate-100 p-3 rounded text-sm">
                  word - translation<br/>
                  hola - hello<br/>
                  adiós - goodbye
                </code>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-2">Option 3: Equals-separated</p>
                <code className="block bg-slate-800 text-slate-100 p-3 rounded text-sm">
                  word = translation<br/>
                  hola = hello<br/>
                  adiós = goodbye
                </code>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I edit a vocabulary set?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Go to <strong>My Sets</strong> (bottom tab)</li>
              <li>Tap the set you want to edit</li>
              <li>Tap the <strong>edit icon</strong> (pencil) in the top right</li>
              <li>Make your changes</li>
              <li>Tap <strong>"Save"</strong></li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I delete a vocabulary set?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-3">
              <li>Go to <strong>My Sets</strong></li>
              <li>Tap the set you want to delete</li>
              <li>Tap the <strong>menu icon</strong> (three dots)</li>
              <li>Select <strong>"Delete Set"</strong></li>
              <li>Confirm deletion</li>
            </ol>
            <p className="text-slate-600 font-semibold mb-6">Note: This action cannot be undone!</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I use different languages for different sets?</h3>
            <p className="text-slate-600 mb-3">Yes! By default, sets use your global language preferences, but you can override this per set:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600">
              <li>When creating/editing a set, tap <strong>"Language Override"</strong></li>
              <li>Select custom languages for this specific set</li>
              <li>These settings only affect this one set</li>
            </ol>
          </section>

          {/* Game Modes */}
          <section id="game-modes" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Game Modes</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">What game modes are available?</h3>
            <p className="text-slate-600 mb-3">Exquizite offers 4 interactive learning modes:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li><strong>Flashcards</strong> - Classic flip cards to test your memory</li>
              <li><strong>Quiz</strong> - Multiple choice questions to reinforce learning</li>
              <li><strong>Match</strong> - Find matching word pairs against the clock</li>
              <li><strong>Fill in the Blank</strong> - Complete sentences with the correct words</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I play a game mode?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Go to <strong>My Sets</strong> or <strong>Home</strong></li>
              <li>Tap a vocabulary set</li>
              <li>Choose a game mode from the menu</li>
              <li>Follow the on-screen instructions</li>
              <li>Complete the game to track your progress!</li>
            </ol>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Flashcard Mode</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-600">
                  <li>Tap the card to flip between word and translation</li>
                  <li>Use <strong>"Previous"</strong> and <strong>"Next"</strong> buttons to navigate</li>
                  <li>Progress bar shows your position in the set</li>
                  <li>Practice is automatically tracked when you complete the set</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Quiz Mode</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-600">
                  <li>Choose from 4 multiple-choice answers (A, B, C, D)</li>
                  <li>Tap an answer to check if it's correct</li>
                  <li>✓ Green checkmark = Correct!</li>
                  <li>✗ Red X = Try again or skip</li>
                  <li><strong>Skip</strong> moves to the next question without scoring</li>
                  <li>See your final score at the end</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Match Mode</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-600">
                  <li>Find matching word-translation pairs</li>
                  <li>Tap two cards to check if they match</li>
                  <li>Match all pairs as quickly as possible</li>
                  <li>Beat your best time!</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Fill in the Blank Mode</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-600">
                  <li>Read the example sentence</li>
                  <li>Type the missing word</li>
                  <li>Use the hint if you need help</li>
                  <li>Submit your answer to check if it's correct</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Can I replay a game mode?</h3>
            <p className="text-slate-600">
              Yes! You can practice any set as many times as you want. Your "Last Practiced" date updates each time you complete a session.
            </p>
          </section>

          {/* Sharing Sets */}
          <section id="sharing-sets" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Sharing Sets</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I share a vocabulary set?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Open the set you want to share</li>
              <li>Tap the <strong>share icon</strong> (or menu &gt; Share)</li>
              <li>A unique share code is generated (e.g., <code className="bg-slate-100 px-2 py-1 rounded">ABC123XYZ</code>)</li>
              <li>Share the code via message, email, or social media</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I use a shared set?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Tap the <strong>home screen</strong> search or "Enter Share Code" option</li>
              <li>Enter the share code (e.g., <code className="bg-slate-100 px-2 py-1 rounded">ABC123XYZ</code>)</li>
              <li>Preview the set</li>
              <li>Tap <strong>"Copy to My Sets"</strong></li>
              <li>Optionally rename the set</li>
              <li>The set is now in your library!</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I see who viewed or copied my shared set?</h3>
            <p className="text-slate-600 mb-3">Yes! When viewing a shared set, you can see:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-3">
              <li><strong>View count</strong>: How many times it's been viewed</li>
              <li><strong>Copy count</strong>: How many users copied it</li>
            </ul>
            <p className="text-slate-600 mb-6">You cannot see individual users' names or emails (privacy protection).</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I stop sharing a set?</h3>
            <p className="text-slate-600 mb-3">Yes! To revoke sharing:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-3">
              <li>Open the shared set</li>
              <li>Tap the menu icon</li>
              <li>Select <strong>"Stop Sharing"</strong> or <strong>"Delete Share Code"</strong></li>
              <li>The share code will no longer work</li>
            </ol>
            <p className="text-slate-600 mb-6">Existing copies in other users' libraries remain (they own their copies).</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Do shared sets update automatically?</h3>
            <p className="text-slate-600">
              No. When someone copies your shared set, they get a snapshot at that moment. If you edit your original set later, their copy does not update automatically.
            </p>
          </section>

          {/* Settings & Preferences */}
          <section id="settings-preferences" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Settings & Preferences</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I change the app language (UI)?</h3>
            <p className="text-slate-600 mb-3">Exquizite supports 45+ languages for the interface:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-3">
              <li>Go to <strong>Settings</strong></li>
              <li>Tap <strong>"App Language"</strong></li>
              <li>Select your preferred language</li>
              <li>The app will reload with the new language</li>
            </ol>
            <p className="text-slate-600 mb-6">
              <strong>Supported Languages</strong>: English, Spanish, French, German, Italian, Portuguese, Japanese, Korean, Chinese, Arabic, Hebrew, and 35+ more!
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I change my learning languages?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-3">
              <li>Go to <strong>Profile</strong></li>
              <li>Tap <strong>"Language Preferences"</strong></li>
              <li>Select your <strong>Learning Language</strong> (language you're studying)</li>
              <li>Select your <strong>Native Language</strong> (language you know)</li>
              <li>Save changes</li>
            </ol>
            <p className="text-slate-600 mb-6">
              <strong>Note</strong>: This affects new sets. Existing sets keep their original languages unless you edit them individually.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I enable Dark Mode?</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-3">
              <li>Go to <strong>Settings</strong></li>
              <li>Toggle <strong>"Dark Mode"</strong> on/off</li>
            </ol>
            <p className="text-slate-600 mb-6">
              Dark mode is easier on the eyes in low-light conditions and can save battery on OLED screens.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">What is the First-Time Tour?</h3>
            <p className="text-slate-600 mb-3">When you first use Exquizite, an interactive tour guides you through key features. To restart the tour:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600">
              <li>Go to <strong>Settings</strong></li>
              <li>Tap <strong>"Restart Tour"</strong></li>
              <li>Follow the on-screen prompts</li>
            </ol>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Troubleshooting</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">My sets aren't syncing across devices</h3>
            <p className="text-slate-600 mb-3"><strong>For Account Users:</strong></p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-3">
              <li>Make sure you're logged into the same account on all devices</li>
              <li>Check your internet connection</li>
              <li>Try logging out and back in</li>
              <li>Pull down to refresh on the My Sets screen</li>
            </ol>
            <p className="text-slate-600 mb-6">
              <strong>For Guest Users:</strong> Guest Mode data is stored locally only and does NOT sync. Create an account to enable sync.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">The app is crashing or freezing</h3>
            <p className="text-slate-600 mb-3">Try these steps:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-3">
              <li><strong>Force close the app</strong> and reopen it</li>
              <li><strong>Restart your device</strong></li>
              <li><strong>Check for updates</strong> in the App Store/Play Store</li>
              <li><strong>Clear app cache</strong> (Settings &gt; Apps &gt; Exquizite &gt; Clear Cache on Android)</li>
              <li><strong>Reinstall the app</strong> (Note: Guest Mode data will be lost!)</li>
            </ol>
            <p className="text-slate-600 mb-6">
              If the issue persists, contact us at <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a> with device model, OS version, app version, and description of the issue.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">AI suggestions aren't working</h3>
            <p className="text-slate-600 mb-3">If AI-powered features fail:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Check your internet connection</li>
              <li>Try again in a few minutes (temporary server issue)</li>
              <li>Use a different theme/topic</li>
              <li>Add words manually as a fallback</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">I can't find a shared set with the code</h3>
            <p className="text-slate-600 mb-3">Common issues:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
              <li><strong>Code expired</strong>: Some share codes have expiration dates</li>
              <li><strong>Code deleted</strong>: The creator stopped sharing the set</li>
              <li><strong>Typo</strong>: Double-check the code for accuracy (codes are case-sensitive)</li>
              <li><strong>Internet connection</strong>: Ensure you're online</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">The app is in the wrong language</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Go to <strong>Settings</strong> (look for the gear icon ⚙️)</li>
              <li>Find the language option (even if text is unreadable, it's usually near the top)</li>
              <li>Select your language</li>
              <li>The app will reload</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">I lost my vocabulary sets (Guest Mode)</h3>
            <p className="text-slate-600 mb-3">
              Unfortunately, Guest Mode data is stored locally only. If you uninstalled the app, cleared app data, or reset your device, the data cannot be recovered.
            </p>
            <p className="text-slate-600 mb-6">
              We strongly recommend creating an account to enable cloud backup and sync.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">The keyboard covers the input field</h3>
            <p className="text-slate-600 mb-3">This is a known issue on some devices. Try:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-3">
              <li>Tapping outside the input field and re-focusing</li>
              <li>Rotating your device to landscape mode</li>
              <li>Scrolling the screen manually</li>
              <li>Using an external keyboard (tablets/desktops)</li>
            </ol>
            <p className="text-slate-600 italic">We're working on a fix in the next update!</p>
          </section>

          {/* Privacy & Data */}
          <section id="privacy-data" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Privacy & Data</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Is my data secure?</h3>
            <p className="text-slate-600 mb-3">Yes! We take security seriously:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-3">
              <li>All data is encrypted in transit (HTTPS/TLS)</li>
              <li>Passwords are hashed and never stored in plain text</li>
              <li>Cloud data is stored on secure Supabase servers (AWS-powered)</li>
              <li>Row-Level Security ensures you can only access your own data</li>
            </ul>
            <p className="text-slate-600 mb-6">
              See our full <Link to="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link> for details.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">What data do you collect?</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-3">
              <li><strong>Account users</strong>: Email, user ID, vocabulary sets, practice history, language preferences</li>
              <li><strong>Guest users</strong>: Vocabulary sets stored locally only (no cloud data)</li>
              <li><strong>Analytics</strong>: Anonymous usage statistics to improve the app</li>
            </ul>
            <p className="text-slate-600 mb-3">We do NOT collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
              <li>Location data</li>
              <li>Contact lists</li>
              <li>Photos or media (unless you choose to share)</li>
              <li>Browsing history outside the app</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Do you share my data with third parties?</h3>
            <p className="text-slate-600 mb-3">No, we do NOT sell or rent your data. We use trusted services:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-3">
              <li><strong>Supabase</strong>: Cloud database and authentication</li>
              <li><strong>OpenAI</strong>: AI vocabulary generation (only theme names are sent, NOT your personal data)</li>
              <li><strong>Expo</strong>: App infrastructure (minimal crash reports)</li>
            </ul>
            <p className="text-slate-600 mb-6">
              See our <Link to="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link> for full details.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I download my data?</h3>
            <p className="text-slate-600 mb-3">To request a copy of your data:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
              <li>Email <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a> with subject "Data Export Request"</li>
              <li>Include your registered email address</li>
              <li>We'll send you a file with all your vocabulary sets and account info within 7 business days</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I delete my account and data?</h3>
            <p className="text-slate-600 mb-3"><strong>Permanent Deletion:</strong></p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-3">
              <li>Email <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a> with subject "Data Deletion Request"</li>
              <li>Include your registered email address</li>
              <li>We'll confirm your identity and delete all data within <strong>30 days</strong></li>
            </ol>
            <p className="text-slate-600 mb-3"><strong>Important Notes:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-3">
              <li>Deletion is permanent and cannot be undone</li>
              <li>Shared sets copied by other users remain in their libraries (they own their copies)</li>
              <li>Some data may be retained for legal/security purposes (e.g., fraud prevention)</li>
            </ul>
            <p className="text-slate-600 italic"><strong>Coming Soon</strong>: In-app account deletion (Settings &gt; Account &gt; Delete Account)</p>
          </section>

          {/* Contact Us */}
          <section id="contact-us" className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Contact Us</h2>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">General Support</h3>
                <p className="text-slate-600 mb-2">
                  <strong>Email</strong>: <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a>
                </p>
                <p className="text-slate-600">
                  <strong>Response Time</strong>: Within 2-3 business days
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Privacy & Data Requests</h3>
                <p className="text-slate-600 mb-2">
                  <strong>Email</strong>: <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a>
                </p>
                <p className="text-slate-600">
                  <strong>Response Time</strong>: Within 7 business days
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Bug Reports & Feature Requests</h3>
                <p className="text-slate-600 mb-2">
                  <strong>Email</strong>: <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a>
                </p>
                <p className="text-slate-600 mb-3">
                  <strong>Subject</strong>: "Bug Report" or "Feature Request"
                </p>
                <p className="text-slate-600 mb-2"><strong>Please Include</strong>:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-600">
                  <li>Device model and OS version (e.g., iPhone 14, iOS 17.2)</li>
                  <li>App version (found in Settings &gt; About)</li>
                  <li>Steps to reproduce the issue</li>
                  <li>Screenshots if applicable</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Is Exquizite free?</h3>
                <p className="text-slate-600">
                  Yes! Exquizite is completely free to use with no ads or in-app purchases. All features are available to all users.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">What platforms is Exquizite available on?</h3>
                <ul className="list-disc pl-6 space-y-1 text-slate-600">
                  <li><strong>iOS</strong>: iPhone and iPad (iOS 13+)</li>
                  <li><strong>Android</strong>: Phones and tablets (Android 6.0+)</li>
                  <li><strong>Web</strong>: app.exquizite.com (coming soon)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Can I learn multiple languages at once?</h3>
                <p className="text-slate-600 mb-2">Yes! You can create sets for different language pairs. For example:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-600">
                  <li>Spanish → English sets</li>
                  <li>French → English sets</li>
                  <li>Japanese → English sets</li>
                </ul>
                <p className="text-slate-600 mt-2">Your global language preference is just a default; each set can have its own languages.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Can I use Exquizite offline?</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li><strong>Guest Mode</strong>: Yes, fully offline after initial download</li>
                  <li><strong>With Account</strong>: Requires internet for initial sync, then limited offline access (cached data only)</li>
                </ul>
                <p className="text-slate-600 mt-2 italic">We're working on full offline mode with sync for account users!</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Will Exquizite always be free?</h3>
                <p className="text-slate-600">
                  Yes! Our core mission is to make language learning accessible to everyone. We may introduce optional premium features in the future, but the core app will always remain free.
                </p>
              </div>
            </div>
          </section>

          {/* Tips for Learning */}
          <section className="bg-primary-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Tips for Effective Learning</h2>
            <div className="space-y-4 text-slate-600">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Create Focused Sets</h4>
                <p>Instead of one giant "Spanish" set, create themed sets like "Spanish Food", "Travel Phrases", etc.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Practice Regularly</h4>
                <p>Consistent practice beats cramming. Review each set at least once per week.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Use Multiple Game Modes</h4>
                <p>Each mode reinforces learning differently - mix them up for best results!</p>
              </div>
            </div>
          </section>

          <div className="text-center text-slate-500 text-sm">
            <p className="mb-2">Thank you for using Exquizite! Happy learning! 🎓</p>
            <p>Last updated: February 7, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
