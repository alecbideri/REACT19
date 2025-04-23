import React, { useState } from "react";
import { createContext } from "react";
import UserProfile from "./UserProfile.jsx";
import UpdateUser from "./UpdateUser.jsx";

export const Data = createContext();
export const Data1 = createContext();

// context for updating the user profile

export const UpdateData = createContext();

const UserContext = () => {
  const [name, setName] = useState("Alec");
  const [age, setAge] = useState(200);

  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <UpdateData.Provider value={{ setName, setAge }}>
            <UserProfile />
            <UpdateUser />
          </UpdateData.Provider>
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};
export default UserContext;
