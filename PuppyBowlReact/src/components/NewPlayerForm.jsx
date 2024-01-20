
import React, { useState } from 'react';

const NewPlayerForm = ({ addNewPlayer, fetchAllPlayers, renderAllPlayers }) => {
  const [puppyName, setPuppyName] = useState('');
  const [puppyBreed, setPuppyBreed] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPlayer = {
      name: puppyName,
      breed: puppyBreed,
    };

    await addNewPlayer(newPlayer);

   
    setPuppyName('');
    setPuppyBreed('');

  
    const updatedPlayers = await fetchAllPlayers();
    renderAllPlayers(updatedPlayers);
  };

  return (
    <div id="new-player-form">
      <form id="add-player-form" onSubmit={handleSubmit}>
        <label htmlFor="puppyName">Puppy Name:</label>
        <input
          type="text"
          id="puppyName"
          name="puppyName"
          value={puppyName}
          onChange={(e) => setPuppyName(e.target.value)}
          required
        />

        <label htmlFor="puppyBreed">Puppy Breed:</label>
        <input
          type="text"
          id="puppyBreed"
          name="puppyBreed"
          value={puppyBreed}
          onChange={(e) => setPuppyBreed(e.target.value)}
          required
        />

        <button type="submit" id="add-player-button">
          Add Player
        </button>
      </form>
    </div>
  );
};

export default NewPlayerForm;


