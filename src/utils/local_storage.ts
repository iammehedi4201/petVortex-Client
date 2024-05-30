export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined" || !token) {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  const token = localStorage.getItem(key);
  return token;
};

export const removeFormLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return;
  }

  return localStorage.removeItem(key);
};
