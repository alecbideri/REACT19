import React from "react";

const Friends = () => {
  const [friends, setFriends] = React.useState(["Alec", "Alex"]);

  // We first populate the array with the existing values
  const addOneFriend = () => setFriends([...friends, "Prince"]);

  // simple filtering process
  const removeOneFriend = () => setFriends(friends.filter((f) => f !== "Alex"));

  // Update the friend , either add the name or if full name leave it as it is

  const updateFriend = () =>
    setFriends(friends.map((f) => (f === "Alec" ? "Alec Smith" : f)));
  return (
    <div>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addOneFriend}>Add a new friend</button>
      <button onClick={removeOneFriend}>Remove one friend</button>
      <button onClick={updateFriend}>Update one friend</button>
    </div>
  );
};
export default Friends;
