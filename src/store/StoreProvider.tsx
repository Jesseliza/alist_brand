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
    const encryptedToken = localStorage.getItem('token');

    if (encryptedToken) {
      try {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedToken, secretPass);
        const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);

        if (decryptedToken) {
          const token = JSON.parse(decryptedToken);
          setAuthToken(token); // Apply token to axios instance
          isAuthenticated = true;
        }
      } catch (e) {
        console.error("Failed to decrypt token on load, logging out.", e);
        setAuthToken(null); // Clear any invalid token
      }
    }

    dispatch(authCheckCompleted({ isAuthenticated }));
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
