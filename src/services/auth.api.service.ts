// src/services/auth.api.service.ts
import type {
  LoginCredentials,
  LoginData,
  MeData,
  RegisterCredentials,
  RegisterData,
} from '../models/auth.types';
import { httpRequest } from './http.service';

export function registerUser(
  credentials: RegisterCredentials,
): Promise<RegisterData> {
  return httpRequest<RegisterData>(
    '/auth/register',
    {
      method: 'POST',
      body: JSON.stringify(credentials),
    },
  );
}

export function loginUser(
  credentials: LoginCredentials,
): Promise<LoginData> {
  return httpRequest<LoginData>(
    '/auth/login',
    {
      method: 'POST',
      body: JSON.stringify(credentials),
    },
  );
}

export function getAuthenticatedUser(
  accessToken: string,
  signal?: AbortSignal,
): Promise<MeData> {
  return httpRequest<MeData>(
    '/auth/me',
    { signal },
    accessToken,
  );
}