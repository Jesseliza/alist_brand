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

    try {
      if (encryptedToken) {
        const decryptedTokenBytes = CryptoJS.AES.decrypt(encryptedToken, secretPass);
        const decryptedToken = decryptedTokenBytes.toString(CryptoJS.enc.Utf8);
        if (decryptedToken) {
          const token = JSON.parse(decryptedToken);
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          isAuthenticated = true; // We have a valid token, so user is authenticated

          // Now, let's try to get user data, but don't fail the whole session if it's corrupted
          const encryptedUser = localStorage.getItem('user');
          if (encryptedUser) {
            try {
              const decryptedUserBytes = CryptoJS.AES.decrypt(encryptedUser, secretPass);
              const decryptedUser = decryptedUserBytes.toString(CryptoJS.enc.Utf8);
              if (decryptedUser) {
                user = JSON.parse(decryptedUser);
              } else {
                console.error("Failed to decrypt user data from localStorage.");
              }
            } catch (userError) {
              console.error("Failed to parse decrypted user data.", userError);
            }
          }
        } else {
            throw new Error("Failed to decrypt token.");
        }
      }
    } catch (e) {
      console.error("Failed to rehydrate auth token, logging out.", e);
      // This will catch token decryption/parsing errors
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
