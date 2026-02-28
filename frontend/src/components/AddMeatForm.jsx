import React, { useState } from 'react';

const AddMeatForm = ({ addMeat }) => {
  const [meatName, setMeatName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (meatName) {
      addMeat(meatName);
      setMeatName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={meatName}
        onChange={(e) => setMeatName(e.target.value)}
        placeholder="Enter meat name"
      />
      <button type="submit">Add Meat</button>
    </form>
  );
};

export default AddMeatForm;