import "./App.css";
import React, { useEffect } from "react";
import LoginButton from "./components/LoginButton";
import HomePage from "./components/HomePage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <LoginButton />
      <HomePage />
    </div>
  );
}

export default App;
