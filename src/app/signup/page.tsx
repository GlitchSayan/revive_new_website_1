"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import {
  getFirebaseAuth,
  getGoogleProvider,
  getRecaptcha,
  getPhoneAuth,
} from "@/lib/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  type Auth,
} from "firebase/auth";

export default function Signup() {
  const [mode, setMode] = useState<"email" | "phone">("email");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState("");

  // -----------------------------------------
  // ReCAPTCHA (browser only)
  // -----------------------------------------
  const setupRecaptcha = async (auth: Auth) => {
    const Recaptcha = await getRecaptcha();
    if (!Recaptcha) return null;

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new Recaptcha(
        auth,
        "recaptcha-container",
        { size: "invisible" }
      );
    }

    return window.recaptchaVerifier;
  };

  // -----------------------------------------
  // SEND OTP
  // -----------------------------------------
  const sendOtp = async () => {
    setError("");

    if (phone.length !== 10)
      return setError("Enter a valid 10-digit mobile number");

    try {
      const auth = await getFirebaseAuth();
      const phoneAuth = await getPhoneAuth();
      if (!auth || !phoneAuth) return setError("Auth not loaded");

      const verifier = await setupRecaptcha(auth);
      if (!verifier) return setError("Recaptcha failed to load");

      const fullPhone = "+91" + phone;

      const confirmation = await phoneAuth(auth, fullPhone, verifier);
      window.confirmationResult = confirmation;

      setOtpSent(true);
      alert("OTP sent!");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Failed to send OTP");
    }
  };

  // -----------------------------------------
  // VERIFY OTP
  // -----------------------------------------
  const verifyOtpSignup = async () => {
    try {
      if (!otp) return setError("Enter OTP");

      await window.confirmationResult!.confirm(otp);
      alert("Account created!");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Invalid OTP");
    }
  };

  // -----------------------------------------
  // EMAIL SIGNUP
  // -----------------------------------------
  const emailSignup = async () => {
    setError("");

    if (!email || !password || !confirm)
      return setError("Please fill all fields");

    if (password !== confirm)
      return setError("Passwords do not match");

    try {
      const auth = await getFirebaseAuth();
      if (!auth) return setError("Auth not loaded");

      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created!");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Signup failed");
    }
  };

  // -----------------------------------------
  // GOOGLE SIGNUP
  // -----------------------------------------
  const googleSignup = async () => {
    try {
      const auth = await getFirebaseAuth();
      const provider = await getGoogleProvider();
      if (!auth || !provider) return setError("Google auth failed");

      await signInWithPopup(auth, provider);
      alert("Google signup success!");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Google signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f9f4] p-6 md:p-10 flex items-center justify-center">

      <div id="recaptcha-container"></div>

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-md p-10 border">

        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="bg-[#253612] text-white px-6 py-2 rounded-full text-sm">
            ← Home
          </Link>

          <Link href="/login" className="bg-[#253612] text-white px-6 py-2 rounded-full text-sm">
            Log In
          </Link>
        </div>

        <Image src="/logo2.png" width={100} height={100} alt="Logo" className="mb-4" />

        <h1 className="text-3xl font-semibold text-[#253612] mb-1">
          Create Account
        </h1>
        <p className="text-gray-600 mb-6">Become a part of better future</p>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        {/* SWITCH MODE */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setMode("email")}
            className={`px-4 py-2 rounded-full border text-sm ${
              mode === "email"
                ? "bg-[#253612] text-white"
                : "border-[#253612] text-[#253612]"
            }`}
          >
            Email
          </button>

          <button
            onClick={() => setMode("phone")}
            className={`px-4 py-2 rounded-full border text-sm ${
              mode === "phone"
                ? "bg-[#253612] text-white"
                : "border-[#253612] text-[#253612]"
            }`}
          >
            Phone
          </button>
        </div>

        {/* EMAIL SIGNUP */}
        {mode === "email" && (
          <>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl px-4 py-3 mb-4"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded-xl px-4 py-3 mb-4"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border rounded-xl px-4 py-3 mb-6"
              onChange={(e) => setConfirm(e.target.value)}
            />

            <button
              onClick={emailSignup}
              className="w-full bg-[#253612] text-white py-3 rounded-2xl text-sm"
            >
              Create Account
            </button>
          </>
        )}

        {/* PHONE SIGNUP */}
        {mode === "phone" && (
          <>
            <input
              maxLength={10}
              placeholder="10-digit mobile number"
              className="w-full border rounded-xl px-4 py-3 mb-4"
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            />

            {!otpSent && (
              <button
                onClick={sendOtp}
                className="w-full bg-[#253612] text-white py-3 rounded-2xl text-sm mb-6"
              >
                Send OTP
              </button>
            )}

            {otpSent && (
              <>
                <input
                  maxLength={6}
                  placeholder="Enter OTP"
                  className="w-full border rounded-xl px-4 py-3 mb-6"
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                />

                <button
                  onClick={verifyOtpSignup}
                  className="w-full bg-[#253612] text-white py-3 rounded-2xl text-sm"
                >
                  Verify & Create Account
                </button>
              </>
            )}
          </>
        )}

        {/* OR */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px w-full bg-gray-300"></div>
          <span className="text-gray-500">or</span>
          <div className="h-px w-full bg-gray-300"></div>
        </div>

        <button
          onClick={googleSignup}
          className="w-full border py-3 rounded-2xl text-sm text-[#253612]"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
