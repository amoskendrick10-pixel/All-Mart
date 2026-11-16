"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AuthForm from "@/components/AuthForm";

const SigninPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const result = login(email, password);

    if (result === false) {
      setError("Invalid credentials");
      return;
    }

    router.push("/");
  };

  const fields = [
    {
      name: "email",
      label: "Email Address",
      type: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: "ken@allmart.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      placeholder: "**********",
    },
  ];

  return (
    <AuthForm
      title="Welcome Back"
      description="Sign in to continue shopping with AllMart."
      fields={fields}
      onSubmit={handleSubmit}
      error={error}
      buttonText="Sign In"
    >
      <p className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-semibold text-blue-600 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </AuthForm>
  );
};

export default SigninPage;