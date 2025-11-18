// src/types/firebase.d.ts
export {};

declare global {
  interface Window {
    recaptchaVerifier?: unknown;      // safe for Vercel + Next.js
    confirmationResult?: unknown;     // safe for OTP flow
  }
}
