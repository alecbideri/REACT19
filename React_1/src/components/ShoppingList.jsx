import React, { useState } from "react";

const ShoppingList = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
  });

  // State for the list of items
  const [list, setList] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reloading
    if (formData.name && formData.quantity) {
      // Add new item to list with a unique ID
      setList([
        ...list,
        {
          id: Date.now(), // Simple unique ID (or use uuid library)
          name: formData.name,
          quantity: formData.quantity,
        },
      ]);
      // Clear form inputs
      setFormData({ name: "", quantity: "" });
      console.log("Data submitted successfully:", formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Add an item"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            placeholder="Add quantity"
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div>
          <button type="submit">Add Item</button>
        </div>
      </form>
      <div>
        <h3>Shopping List</h3>
        {list.length === 0 ? (
          <p>No items in the list</p>
        ) : (
          <ul>
            {list.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
