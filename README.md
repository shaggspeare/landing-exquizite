<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ErQTTnHc6zRmqBf7PZHMMkcnGMSRJF4j

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## TODO

- **`support@calleo.xyz` is not a real mailbox yet.** It replaced
  `viacheslav@exquizite.app` across all 14 locales (footer contact, support
  page, privacy policy, terms, cookie policy). Create the mailbox or change the
  address in `locales/*/translation.json` before this ships.
- `/videos/demo.mp4` does not exist. The hero renders a looping muted video in
  place of the second screenshot as soon as that file is committed; until then
  the screenshot is shown and no request is made. See `vite.config.ts`.
