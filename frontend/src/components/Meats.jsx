import React, { useEffect, useState } from 'react';
import AddMeatForm from './AddMeatForm';
import api from '../api';

const MeatList = () => {
  const [meats, setMeats] = useState([]);

  const fetchMeats = async () => {
    try {
      const response = await api.get('/meats');
      setMeats(response.data.meats);
    } catch (error) {
      console.error("Error fetching meats", error);
    }
  };

  const addMeat = async (meatName) => {
    try {
      await api.post('/meats', { name: meatName, quantity: 1 });
      fetchMeats();  // Refresh the list after adding a meat
    } catch (error) {
      console.error("Error adding meat", error);
    }
  };

  useEffect(() => {
    fetchMeats();
  }, []);

  return (
    <div>
      <h2>Meats List</h2>
      <ul>
        {meats.map((meat, index) => (
          <li key={index}>{meat.name}</li>
        ))}
      </ul>
      <AddMeatForm addMeat={addMeat} />
    </div>
  );
};

export default MeatList;