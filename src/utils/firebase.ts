import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
  Auth,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, Firestore } from 'firebase/firestore';
import { Question } from '../types';

export interface FirebaseConfigType {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const DEFAULT_CONFIG: FirebaseConfigType = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

export const FIREBASE_STORAGE_CONFIG_KEY = 'lb_dsa_firebase_config_v1';

export function getStoredFirebaseConfig(): FirebaseConfigType {
  if (typeof window === 'undefined') return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(FIREBASE_STORAGE_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.apiKey && parsed.apiKey !== 'YOUR_API_KEY') {
        return parsed;
      }
    }
  } catch {
    // fallback
  }

  // Check window.FIREBASE_CONFIG if defined from legacy firebase-config.js
  const win = window as unknown as { FIREBASE_CONFIG?: FirebaseConfigType };
  if (win.FIREBASE_CONFIG && win.FIREBASE_CONFIG.apiKey && win.FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY') {
    return win.FIREBASE_CONFIG;
  }

  return DEFAULT_CONFIG;
}

export function saveStoredFirebaseConfig(config: FirebaseConfigType): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(FIREBASE_STORAGE_CONFIG_KEY, JSON.stringify(config));
}

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

export function isFirebaseConfigured(): boolean {
  const config = getStoredFirebaseConfig();
  return Boolean(config.apiKey && config.apiKey !== 'YOUR_API_KEY' && config.projectId);
}

export function initFirebase(): { auth: Auth | null; db: Firestore | null } {
  if (!isFirebaseConfigured()) {
    return { auth: null, db: null };
  }

  try {
    const config = getStoredFirebaseConfig();
    if (!getApps().length) {
      app = initializeApp(config);
    } else {
      app = getApp();
    }
    auth = getAuth(app);
    db = getFirestore(app);
    return { auth, db };
  } catch (err) {
    console.warn('Firebase initialization notice:', err);
    return { auth: null, db: null };
  }
}

export async function signInWithGoogle(): Promise<User | null> {
  const { auth } = initFirebase();
  if (!auth) {
    throw new Error('CONFIG_REQUIRED');
  }
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

export async function logOut(): Promise<void> {
  const { auth } = initFirebase();
  if (auth) {
    await firebaseSignOut(auth);
  }
}

export async function syncUserDataToCloud(user: User, questions: Question[]): Promise<void> {
  const { db } = initFirebase();
  if (!db || !user) return;

  const userDocRef = doc(db, 'users', user.uid);
  await setDoc(
    userDocRef,
    {
      updatedAt: new Date().toISOString(),
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      questions,
    },
    { merge: true }
  );
}

export async function fetchUserDataFromCloud(user: User): Promise<Question[] | null> {
  const { db } = initFirebase();
  if (!db || !user) return null;

  const userDocRef = doc(db, 'users', user.uid);
  const snap = await getDoc(userDocRef);
  if (snap.exists()) {
    const data = snap.data();
    if (Array.isArray(data.questions)) {
      return data.questions as Question[];
    }
  }
  return null;
}
