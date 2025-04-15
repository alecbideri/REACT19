import React from "react";

const NameAdd = () => {
  const [names, setNames] = React.useState([]);

  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim()) {
      setNames([...names, value]);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h3>Names added bro</h3>
      {names.length === 0 ? (
        <p>No names added yet mn do something!</p>
      ) : (
        <ul>
          {names.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Add your name bro !"
        />
        <button type="submit">Add it man!</button>
      </form>
    </div>
  );
};
export default NameAdd;
