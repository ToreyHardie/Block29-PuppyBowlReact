import React from 'react';
import ReactDOM from 'react-dom';
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';


const fetchAllPlayers = async () => {
  try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players');
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};

const renderAllPlayers = (playerList) => {
  console.log('Rendering players:', playerList);
};

const addNewPlayer = async (playerObj) => {
  try {
    console.log('Adding new player:', playerObj);
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerObj),
    });

    const result = await response.json();
    console.log('API Response:', result);

    
    const updatedPlayers = await fetchAllPlayers();
    renderAllPlayers(updatedPlayers);
  } catch (error) {
    console.error('Error adding player:', error);
  }
};

const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players/${playerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    console.log(result);

 
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
  } catch (error) {
    console.error('Error removing player:', error);
  }
};

const App = () => {
  return (
    <div>
      <NewPlayerForm addNewPlayer={addNewPlayer} fetchAllPlayers={fetchAllPlayers} renderAllPlayers={renderAllPlayers} />
      <AllPlayers fetchAllPlayers={fetchAllPlayers} renderAllPlayers={renderAllPlayers} removePlayer={removePlayer} />
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

export default App;

