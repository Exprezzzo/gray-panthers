// tested with Firebase 11 & Next 15
import { initializeApp, getApps } from 'firebase/app';
import { getAuth }       from 'firebase/auth';
import { getFirestore }  from 'firebase/firestore';
import { getStorage }    from 'firebase/storage';

const env = (k: string) => {
  const v = process.env[k] as string | undefined;
  if (!v) console.warn(`[Firebase] Missing env var ${k}`);
  return v ?? '';
};

const firebaseConfig = {
  apiKey:            env('NEXT_PUBLIC_FIREBASE_API_KEY'),
  authDomain:        env('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
  projectId:         env('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
  storageBucket:     env('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: env('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
  appId:             env('NEXT_PUBLIC_FIREBASE_APP_ID'),
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth     = getAuth(app);
export const db       = getFirestore(app);
export const storage  = getStorage(app);
export default app;