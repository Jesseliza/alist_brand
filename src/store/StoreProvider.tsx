"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { authCheckCompleted } from "./auth/authSlice";
import axiosInstance from "@/services/apiHelper";
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

    try {
      if (encryptedToken) {
        // A token exists, so we expect a full, valid session.
        if (!encryptedUser) {
          throw new Error("Incomplete session: Token found but user data is missing.");
        }

        const decryptedTokenBytes = CryptoJS.AES.decrypt(encryptedToken, secretPass);
        const decryptedToken = decryptedTokenBytes.toString(CryptoJS.enc.Utf8);
        if (!decryptedToken) {
          throw new Error("Failed to decrypt token.");
        }
        const token = JSON.parse(decryptedToken);

        const decryptedUserBytes = CryptoJS.AES.decrypt(encryptedUser, secretPass);
        const decryptedUser = decryptedUserBytes.toString(CryptoJS.enc.Utf8);
        if (!decryptedUser) {
          throw new Error("Failed to decrypt user data.");
        }
        const parsedUser = JSON.parse(decryptedUser);

        // If we get here, everything is valid.
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        user = parsedUser;
        isAuthenticated = true;
      }
    } catch (e) {
      console.error("Failed to rehydrate auth state, logging out.", e);
      delete axiosInstance.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      isAuthenticated = false;
      user = null;
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
