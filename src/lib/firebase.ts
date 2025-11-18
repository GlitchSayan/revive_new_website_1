// src/lib/firebase.ts
"use client";

// Detect browser environment
export const isBrowser = () => typeof window !== "undefined";

import { initializeApp, getApps, getApp } from "firebase/app";

let firebaseApp: any = null;

// -------------------------
// SAFE FIREBASE APP INIT
// -------------------------
export const getFirebaseApp = () => {
  if (!isBrowser()) return null;

  if (!firebaseApp) {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
    };

    firebaseApp = !getApps().length
      ? initializeApp(firebaseConfig)
      : getApp();
  }

  return firebaseApp;
};

// -------------------------
// AUTH (Client-Safe)
// -------------------------
export const getFirebaseAuth = async () => {
  if (!isBrowser()) return null;

  const { getAuth } = await import("firebase/auth");
  return getAuth(getFirebaseApp()!);
};

// -------------------------
// GOOGLE PROVIDER
// -------------------------
export const getGoogleProvider = async () => {
  if (!isBrowser()) return null;

  const { GoogleAuthProvider } = await import("firebase/auth");
  return new GoogleAuthProvider();
};

// -------------------------
// RECAPTCHA VERIFIER
// -------------------------
export const getRecaptcha = async () => {
  if (!isBrowser()) return null;

  const { RecaptchaVerifier } = await import("firebase/auth");
  return RecaptchaVerifier;
};

// -------------------------
// PHONE AUTH (OTP)
// -------------------------
export const getPhoneAuth = async () => {
  if (!isBrowser()) return null;

  const { signInWithPhoneNumber } = await import("firebase/auth");
  return signInWithPhoneNumber;
};

// -------------------------
// FIX GLOBAL WINDOW TYPES
// -------------------------
declare global {
  interface Window {
    recaptchaVerifier?: any;
    confirmationResult?: any;
  }
}
