"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CryptoJS from "crypto-js";
import { loginSuccess, authCheckCompleted } from "@/store/auth/authSlice";
import { setAuthToken } from "@/services/apiHelper";
import { Account } from "@/types/entities";

const secretPass = "al123@st678$ven";

export default function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const encryptedToken = localStorage.getItem("token");
      const encryptedUser = localStorage.getItem("user");

      if (encryptedToken && encryptedUser) {
        const bytesToken = CryptoJS.AES.decrypt(encryptedToken, secretPass);
        const token = JSON.parse(bytesToken.toString(CryptoJS.enc.Utf8));

        const bytesUser = CryptoJS.AES.decrypt(encryptedUser, secretPass);
        const userObject = JSON.parse(bytesUser.toString(CryptoJS.enc.Utf8));

        // Ensure backward compatibility for users with old data in localStorage
        if (userObject.food_offers_count === undefined) {
          userObject.food_offers_count = 0;
        }

        const user: Account = userObject;

        if (token && user) {
          setAuthToken(token);
          dispatch(loginSuccess(user));
        }
      }
    } catch (error) {
      console.error("Failed to re-authenticate:", error);
      // Clear potentially corrupted data
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } finally {
      dispatch(authCheckCompleted({ isAuthenticated: !!localStorage.getItem("token") }));
    }
  }, [dispatch]);

  return null; // This component does not render anything
}