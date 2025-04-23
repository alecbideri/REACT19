import React, { useState } from "react";
import { useContext } from "react";
import { UpdateData } from "./UserContext.jsx";

const UpdateUser = () => {
  const { setName, setAge } = useContext(UpdateData);

  // use states for update the user data

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  // Handle submit approach

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName.trim()) {
      setName(newName);
      setNewName("");
    }

    if (newAge.trim()) {
      setAge(newAge);
      setNewAge("");
    }
  };

  return (
    <div>
      <h2>Update the userProfile</h2>
      <div>
        <label>
          New Name:
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter new name..."
          />
        </label>
      </div>
      <div>
        <label>
          New age:
          <input
            type="number"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
            placeholder="Enter new age..."
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};
export default UpdateUser;
