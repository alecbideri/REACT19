import React from "react";

const Profilees = () => {
  const [profile, setProfile] = React.useState({
    name: "Alec",
    age: 20,
  });

  const handleInput = (e) => setProfile({ ...profile, name: e.target.value });
  const handleAge = (e) => setProfile({ ...profile, age: e.target.value });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Name : {profile.name}</h1>
      <p>Age : {profile.age}</p>

      <input
        type="text"
        placeholder="Change the name"
        onChange={handleInput}
        style={{ marginBottom: "10px", width: 300, padding: "10px" }}
      />
      <input
        type="text"
        placeholder="Change ones name"
        onChange={handleAge}
        style={{ marginBottom: "10px", width: 300, padding: "10px" }}
      />
    </div>
  );
};
export default Profilees;
