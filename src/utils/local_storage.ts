export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined" || !token) {
    return;
  }

  return localStorage.setItem(key, token);
};
