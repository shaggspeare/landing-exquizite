import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy for Exquizite</h1>
          <p className="text-sm text-slate-500 mb-8">Last Updated: February 7, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Welcome to Exquizite, a language learning application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and web services (collectively, the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Personal Information</h3>
            <p className="text-slate-600 mb-3">When you create an account with Exquizite, we collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Email Address</strong>: Used for account creation, authentication, and communication</li>
              <li><strong>User ID</strong>: A unique identifier automatically generated for authentication and data association</li>
              <li><strong>Password</strong>: Stored securely using industry-standard encryption (we never store passwords in plain text)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">User-Generated Content</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Vocabulary Sets</strong>: Word pairs, translations, set names, and learning preferences you create</li>
              <li><strong>Language Preferences</strong>: Your chosen target and native languages for learning</li>
              <li><strong>Practice History</strong>: Information about when you last practiced a set and your progress</li>
              <li><strong>App Settings</strong>: Theme preferences, UI language, and other customization settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Usage Data</strong>: Information about how you interact with the App, including game modes played and features used</li>
              <li><strong>Device Information</strong>: Device type, operating system, and app version for troubleshooting and compatibility</li>
              <li><strong>Anonymous Analytics</strong>: Aggregated, non-personally identifiable usage statistics to improve the App</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Guest Mode</h2>
            <p className="text-slate-600 mb-3">If you use the App without creating an account (Guest Mode):</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>No email address or personal information is collected</li>
              <li>Your vocabulary sets are stored locally on your device only</li>
              <li>Data is not synchronized across devices</li>
              <li>Data may be lost if you uninstall the App or clear app data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-600 mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Provide Services</strong>: Enable account creation, data synchronization, and app functionality</li>
              <li><strong>Improve User Experience</strong>: Personalize your learning experience and remember your preferences</li>
              <li><strong>Generate AI Content</strong>: Use OpenAI's API to generate vocabulary suggestions and example sentences based on themes you provide</li>
              <li><strong>Maintain Security</strong>: Authenticate users and protect against unauthorized access</li>
              <li><strong>Communicate</strong>: Send important updates about the App (we do not send marketing emails without your consent)</li>
              <li><strong>Troubleshoot</strong>: Diagnose technical issues and improve app performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Storage and Security</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Storage Location</h3>
            <p className="text-slate-600 mb-3">Your data is stored securely using <strong>Supabase</strong>, a cloud-based database service:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Location</strong>: Data is hosted on secure servers managed by Supabase (powered by AWS infrastructure)</li>
              <li><strong>Encryption</strong>: All data is encrypted in transit using HTTPS/TLS protocols</li>
              <li><strong>Access Control</strong>: Row-Level Security (RLS) policies ensure you can only access your own data</li>
              <li><strong>Backups</strong>: Regular automated backups to prevent data loss</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Security Measures</h3>
            <p className="text-slate-600 mb-3">We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Secure authentication using JWT tokens</li>
              <li>Password hashing using bcrypt or similar algorithms</li>
              <li>HTTPS encryption for all data transmission</li>
              <li>Access logging and monitoring for suspicious activity</li>
            </ul>
            <p className="text-slate-600 mt-3 italic">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Supabase (Database and Authentication)</h3>
            <p className="text-slate-600 mb-3">We use Supabase to store and manage user data:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Purpose</strong>: Cloud database, user authentication, and data synchronization</li>
              <li><strong>Data Shared</strong>: Email, user ID, vocabulary sets, practice history</li>
              <li><strong>Privacy Policy</strong>: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://supabase.com/privacy</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">OpenAI API (AI-Powered Features)</h3>
            <p className="text-slate-600 mb-3">We use OpenAI's API to generate vocabulary suggestions and example sentences:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Purpose</strong>: AI-powered content generation for learning materials</li>
              <li><strong>Data Shared</strong>: ONLY the themes or topics you request (e.g., "food", "travel")</li>
              <li><strong>Important</strong>: We do NOT send your personal information, email, user ID, or existing vocabulary sets to OpenAI</li>
              <li><strong>Data Usage</strong>: OpenAI processes requests transiently and does not use your data for model training (as per our API agreement)</li>
              <li><strong>Privacy Policy</strong>: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://openai.com/privacy</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Expo (Development Platform)</h3>
            <p className="text-slate-600 mb-3">We use Expo for app development and deployment:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Purpose</strong>: App infrastructure and updates</li>
              <li><strong>Data Shared</strong>: Minimal crash reports and anonymous usage statistics</li>
              <li><strong>Privacy Policy</strong>: <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://expo.dev/privacy</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-slate-600 mb-3">We do NOT sell, rent, or trade your personal information to third parties.</p>
            <p className="text-slate-600 mb-3">We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>With Your Consent</strong>: When you explicitly choose to share vocabulary sets with other users</li>
              <li><strong>Service Providers</strong>: With trusted third-party services (Supabase, OpenAI) as described above</li>
              <li><strong>Legal Requirements</strong>: If required by law, court order, or government regulation</li>
              <li><strong>Business Transfers</strong>: In the event of a merger, acquisition, or sale of assets (you will be notified)</li>
              <li><strong>Safety and Security</strong>: To protect the rights, property, or safety of Exquizite, our users, or others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Shared Vocabulary Sets</h2>
            <p className="text-slate-600 mb-3">When you choose to share a vocabulary set:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>A unique share code is generated</li>
              <li>Anyone with the share code can view and copy the set</li>
              <li>Your email and personal information are NOT included in shared sets</li>
              <li>You can view how many times your set has been viewed and copied</li>
              <li>You can stop sharing a set at any time by deleting the share code</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights and Choices</h2>
            <p className="text-slate-600 mb-4">You have the following rights regarding your data:</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Access Your Data</h3>
            <p className="text-slate-600 mb-4">You can view all your vocabulary sets and account information within the App</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Modify Your Data</h3>
            <p className="text-slate-600 mb-4">Edit or update your vocabulary sets, language preferences, and app settings at any time</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Delete Your Data</h3>
            <p className="text-slate-600 mb-3">You can request complete deletion of your account and all associated data:</p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
              <li><strong>In-App Deletion</strong> (coming soon): Navigate to Settings &gt; Account &gt; Delete Account</li>
              <li><strong>Email Request</strong>: Contact us at <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a> with the subject "Data Deletion Request"
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Include your registered email address</li>
                  <li>We will confirm your identity and delete all data within <strong>30 days</strong></li>
                  <li>Deletion is permanent and cannot be undone</li>
                </ul>
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Export Your Data</h3>
            <p className="text-slate-600 mb-4">To request a copy of your data, contact us at <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a> with the subject "Data Export Request"</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Guest Mode</h3>
            <p className="text-slate-600 mb-3">If you used Guest Mode, you can delete your local data by:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Clearing the app's cache and data in your device settings</li>
              <li>Uninstalling the App</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-600">
              Exquizite is intended for users aged <strong>13 and older</strong>. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a>, and we will delete such information immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">International Data Transfers</h2>
            <p className="text-slate-600">
              Your data may be transferred to and stored on servers located outside your country of residence, including the United States. By using the App, you consent to the transfer of your data to countries that may have different data protection laws than your country.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-slate-600 mb-3">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Displaying an in-app notification for material changes</li>
              <li>Sending an email notification (if you have an account)</li>
            </ul>
            <p className="text-slate-600 mt-3">
              Your continued use of the App after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
            <p className="text-slate-600 mb-3">We retain your data for as long as your account is active or as needed to provide services. If you delete your account:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Personal data is deleted within <strong>30 days</strong></li>
              <li>Some data may be retained for legal or security purposes (e.g., to prevent fraud)</li>
              <li>Shared vocabulary sets may remain accessible to users who previously copied them</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Consent</h2>
            <p className="text-slate-600">
              By using Exquizite, you consent to this Privacy Policy and agree to its terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:
            </p>
            <p className="text-slate-600 mb-2">
              <strong>Email</strong>: <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a>
            </p>
            <p className="text-slate-600 mb-2">
              <strong>Developer</strong>: Exquizite Development Team
            </p>
            <p className="text-slate-600">
              <strong>Response Time</strong>: We aim to respond to all inquiries within 7 business days.
            </p>
          </section>

          <div className="bg-slate-50 rounded-xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Summary of Key Points</h2>
            <p className="text-slate-600 mb-4">For your convenience, here's a quick summary:</p>
            <ul className="space-y-2 text-slate-600">
              <li>✅ <strong>What we collect</strong>: Email, vocabulary sets you create, language preferences</li>
              <li>✅ <strong>Why we collect it</strong>: To provide learning features, sync across devices, generate AI content</li>
              <li>✅ <strong>Where it's stored</strong>: Supabase cloud servers (AWS-powered)</li>
              <li>✅ <strong>Third parties</strong>: Supabase (database), OpenAI (AI generation - no personal data sent)</li>
              <li>✅ <strong>Your rights</strong>: Access, modify, delete your data anytime</li>
              <li>✅ <strong>Contact</strong>: <a href="mailto:viacheslav@exquizite.app" className="text-primary-600 hover:underline">viacheslav@exquizite.app</a></li>
            </ul>
            <p className="text-slate-600 mt-4 italic">
              Thank you for trusting Exquizite with your language learning journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
