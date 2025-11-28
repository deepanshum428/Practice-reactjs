import { useState, createContext } from "react";
import Home from "./Components/Home";

export const LoginContext = createContext();

function MainApp() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLogin = () => {
    setisLoggedIn(true);
  };

  const handleLogout = () => {
    setisLoggedIn(false);
  };

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, onLogin: handleLogin, onLogout: handleLogout }}
    >
      <div className="MainApp text-center bg-blue-300 font-bold text-2xl flex flex-col gap-1.5 my-2 mx-1.5 justify-between items-center">
        <h1>Authentication</h1>
        <Home />
      </div>
    </LoginContext.Provider>
  );
}

export default MainApp;
