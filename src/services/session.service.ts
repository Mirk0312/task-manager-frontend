const ACCESS_TOKEN_KEY = 'task-manager.access-token';

export function readAccessToken(): string | null {
  return sessionStorage.getItem(ACCESS_TOKEN_KEY);
}

export function storeAccessToken(token: string): void {
  sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function removeAccessToken(): void {
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
}