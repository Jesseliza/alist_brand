"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { authCheckCompleted } from "./auth/authSlice";
import { setAuthToken } from "@/services/apiHelper";
import CryptoJS from 'crypto-js';

const secretPass = 'al123@st678$ven';

// A component to handle the auth rehydration
function AuthRehydrator({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    let isAuthenticated = false;
    let user = null;
    const encryptedToken = localStorage.getItem('token');
    const encryptedUser = localStorage.getItem('user');

    if (encryptedToken) {
      try {
        const decryptedTokenBytes = CryptoJS.AES.decrypt(encryptedToken, secretPass);
        const decryptedToken = decryptedTokenBytes.toString(CryptoJS.enc.Utf8);

        if (decryptedToken) {
          const token = JSON.parse(decryptedToken);
          setAuthToken(token); // Apply token to axios instance
          isAuthenticated = true;

          // If token is valid, try to load user data
          if (encryptedUser) {
            const decryptedUserBytes = CryptoJS.AES.decrypt(encryptedUser, secretPass);
            const decryptedUser = decryptedUserBytes.toString(CryptoJS.enc.Utf8);
            user = JSON.parse(decryptedUser);
          }
        }
      } catch (e) {
        console.error("Failed to decrypt token or user on load, logging out.", e);
        setAuthToken(null); // Clear any invalid token
        localStorage.removeItem('user'); // Also clear user
        isAuthenticated = false;
        user = null;
      }
    }

    dispatch(authCheckCompleted({ isAuthenticated, user }));
  }, [dispatch]);

  return <>{children}</>;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthRehydrator>{children}</AuthRehydrator>
    </Provider>
  );
}
