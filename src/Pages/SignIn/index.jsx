import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"; // Assuming you move the styles to this file

const SignIn = () => {
  return (
    <main className="ts-signin-wrapper d-flex justify-content-center align-items-center">
      <div className="ts-signing-card">
        <div className="ts-logo-wrapper text-center">
          <img width="100" src="/images/logo-sm.svg" alt="Logo" />
        </div>

        <form>
          <div className="ts-mb-6p pe-1">
            <input
              type="text"
              className="form-control form-control-lg ts-form-control ts-form-control--lg rounded-pill"
              id="usernameOrEmail"
              placeholder="Username or email"
              minLength="2"
              required
            />
          </div>
          <div className="mb-05 pe-1">
            <input
              type="password"
              className="form-control form-control-lg ts-form-control ts-form-control--lg rounded-pill"
              id="password"
              placeholder="Password"
              minLength="2"
              required
            />
          </div>
          <Link
            className="ts-btn ts-btn__primary ts-font-heading text-center rounded-pill w-100 mb-07"
            to="/"
          >
            Sign in
          </Link>
        </form>
        <p className="text-center ts-font-heading mb-0">
          Don't have an account?
          <a className="ts-text-primary text-decoration-none fw-bold" href="#">
            {" "}
            Sign up{" "}
          </a>
        </p>
      </div>
    </main>
  );
};

export default SignIn;
