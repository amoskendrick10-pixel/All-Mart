"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("allmart_user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  const signup = (name, email, password) => {
    const users = JSON.parse(
      localStorage.getItem("allmart_users") || "[]"
    );

    const existingUser = users.find(
      (item) => item.email === email
    );

    if (existingUser) {
      return false;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };

    users.push(newUser);

    localStorage.setItem(
      "allmart_users",
      JSON.stringify(users)
    );

    const loggedInUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    localStorage.setItem(
      "allmart_user",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);

    return true;
  };

  const login = (email, password) => {
    const users = JSON.parse(
      localStorage.getItem("allmart_users") || "[]"
    );

    const existingUser = users.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!existingUser) {
      return false;
    }

    const loggedInUser = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    };

    localStorage.setItem(
      "allmart_user",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("allmart_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}