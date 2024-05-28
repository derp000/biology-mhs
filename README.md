# biology-mhs

Built with TypeScript, React, and Firebase using Vite.

Your `config/config.ts` should look like this:

```ts
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "PROJECT_NAME.firebaseapp.com",
  projectId: "PROJECT_NAME",
  storageBucket: "PROJECT_NAME.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "AP_ID",
  measurementId: "MEASUREMENT_ID",
};

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase);
export const db = getFirestore(Firebase);
export const storage = getStorage(Firebase);
```
