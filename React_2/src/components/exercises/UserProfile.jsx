import React from "react";
import { useContext } from "react";
import { Data, Data1 } from "./UserContext.jsx";

const UserProfile = () => {
  const name = useContext(Data);
  const age = useContext(Data1);

  return (
    <div>
      <h1>
        Hi my name is {name} and am {age} years old
      </h1>
    </div>
  );
};
export default UserProfile;
