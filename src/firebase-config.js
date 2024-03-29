import { initializeApp } from "firebase/app";
/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  // TODO: Add your own config data here
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    alert('Please complete config file to make it work properly');
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
