import React, { useContext } from "react";
import { LoginContext } from "../MainApp";

const UserProfile = () => {
  const { isLoggedIn, onLogin, onLogout } = useContext(LoginContext);
  return (
    <div>
      <h3>User Profile</h3>
      {isLoggedIn ? (
        <div>
          <p>Welcome User</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>PLease Login</p>
          <button onClick={onLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
