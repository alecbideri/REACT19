import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      age: 20,
    },
    {
      id: 2,
      name: "Bideri Alec",
      age: 24,
    },
    {
      id: 3,
      name: "Johnson Alex",
      age: 30,
    },
  ];

  return (
    <div>
      {users.map(({ id, name, age }) => (
        <ul key={id}>
          <li>{id}</li>
          <li>{name}</li>
          <li>{age}</li>
        </ul>
      ))}
    </div>
  );
};
export default UserList;
