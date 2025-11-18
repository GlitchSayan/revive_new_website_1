// src/app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f9f4] p-6 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-sm border p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-[#253612]">Dashboard</h1>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-full bg-[#253612] text-white text-sm hover:bg-[#3b5520]"
          >
            Log Out
          </button>
        </div>

        <p className="mb-4 text-gray-700">
          Signed in as{" "}
          <span className="font-medium">
            {user.email ?? user.phoneNumber ?? "User"}
          </span>
        </p>

        <Link href="/" className="text-[#253612] underline text-sm">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}