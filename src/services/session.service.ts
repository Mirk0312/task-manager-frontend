// src/services/session.service.ts
const ACCESS_TOKEN_KEY = 'task-manager.access-token';

export function readAccessToken(): string | null {
  try {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
  } catch {
    return null;
  }
}

export function storeAccessToken(accessToken: string): void {
  try {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  } catch {
    // Si sessionStorage no está disponible, se continúa sin lanzar error.
  }
}

export function removeAccessToken(): void {
  try {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  } catch {
    // El estado de React también se limpia.
  }
}