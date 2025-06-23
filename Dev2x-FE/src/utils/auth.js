// src/utils/auth.js
export const isLoggedIn = () => {
  return document.cookie.includes("token=");
};
