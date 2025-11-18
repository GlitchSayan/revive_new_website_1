"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { getFirebaseAuth } from "@/lib/firebase";
import {
  onAuthStateChanged,
  signOut,
  type User,
  type Auth
} from "firebase/auth";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authInstance, setAuthInstance] = useState<Auth | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // -----------------------------
  // Load Firebase Auth Dynamically
  // -----------------------------
  useEffect(() => {
    const loadAuth = async () => {
      const auth = await getFirebaseAuth();
      if (!auth) return; // not in browser
      
      setAuthInstance(auth);

      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      });

      return unsubscribe;
    };

    loadAuth();
  }, []);

  // -----------------------------
  // LOGOUT
  // -----------------------------
  const logout = async () => {
    if (!authInstance) return;
    await signOut(authInstance);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
