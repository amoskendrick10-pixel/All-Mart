"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AuthForm from "@/components/AuthForm";

const SignupPage = () => {
  const { signup } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please complete all fields.");
      return;
    }

    const success = signup(name, email, password);

    if (!success) {
      setError("An account with this email already exists.");
      return;
    }

    router.push("/");
  };

  const fields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "Enter your full name",
    },
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
      title="Create Account"
      description="Join AllMart and start shopping."
      fields={fields}
      onSubmit={handleSubmit}
      error={error}
      buttonText="Create an Account"
    >
      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="font-semibold text-blue-600 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </AuthForm>
  );
};

export default SignupPage;