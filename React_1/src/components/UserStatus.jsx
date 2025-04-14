import React from "react";

const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    <div>
      {loggedIn === true && isAdmin === true && <h1>Welcome Admin</h1>}
      {loggedIn === true && isAdmin === false && <h1>Welcome User</h1>}
    </div>
  );
};
export default UserStatus;
