/* ── FIREBASE CONFIG (Cloud Sync) ─────────────────────────────
   Fill this in with YOUR OWN free Firebase project so Google /
   GitHub sign-in and cross-device sync work. This config is a
   public client identifier, not a secret — it's fine to commit
   it / ship it in a static site.

   SETUP (all free, ~5 minutes):
   1. Go to https://console.firebase.google.com → "Add project"
      (you can turn off Google Analytics, it's not needed).
   2. In the project: Build → Authentication → "Get started".
      - Sign-in method tab → enable "Google" (just toggle it on).
      - Sign-in method tab → enable "GitHub":
          a. Go to https://github.com/settings/developers →
             "New OAuth App".
          b. Homepage URL: the URL you'll host this app at
             (e.g. https://yourname.github.io/your-repo/).
          c. Authorization callback URL: Firebase shows you the
             exact value to paste here (looks like
             https://YOUR_PROJECT.firebaseapp.com/__/auth/handler).
          d. Copy the generated Client ID + Client Secret back
             into the Firebase GitHub provider screen and save.
   3. Build → Firestore Database → "Create database" → start in
      production mode (any region). Then go to the "Rules" tab
      and paste:​

        rules_version = '2';
        service cloud.firestore {
          match /databases/{database}/documents {
            match /users/{uid} {
              allow read, write: if request.auth != null && request.auth.uid == uid;
            }
          }
        }

      This locks every user's data to that user only. Click
      "Publish".
   4. Project settings (gear icon) → General → scroll to
      "Your apps" → click the web icon "</>" → register the app
      (nickname anything) → it will show you a firebaseConfig
      object. Copy those values into FIREBASE_CONFIG below.
   5. Add your hosting domain under Authentication → Settings →
      "Authorized domains" (localhost is already allowed, which
      covers local testing).

   Until you fill in a real apiKey below, the Sync button stays
   hidden and the app works exactly as before (local-only).
──────────────────────────────────────────────────────────────── */
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
