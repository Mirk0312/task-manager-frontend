import { createContext } from "react";
import type { AuthStatus, AuthUser } from "../models/auth.types";

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterInput extends AuthCredentials {
  name: string;
}

export interface AuthContextValue {
  status: AuthStatus;
  user: AuthUser | null;
  accessToken: string | null;
  sessionMessage: string;
  login: (credentials: AuthCredentials) => Promise<AuthUser>;
  register: (input: RegisterInput) => Promise<AuthUser>;
  logout: () => void;
  retrySession: () => Promise<void>;
  clearSessionMessage: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
