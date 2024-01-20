
import React, { useEffect, useState } from 'react';

const AllPlayers = ({ fetchAllPlayers, renderAllPlayers, removePlayer }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);


  useEffect(() => {
    fetchData();
  }, []); 
  const fetchData = async () => {
    const fetchedPlayers = await fetchAllPlayers();
    setPlayers(fetchedPlayers);
    renderAllPlayers(fetchedPlayers);
  };

  const handleRemovePlayer = async (playerId) => {
    await removePlayer(playerId);
    fetchData();
  };

  const handleShowDetails = (playerId) => {
    const playerToShow = players.find((player) => player.id === playerId);
    setSelectedPlayer(playerToShow);
  };

  const handleHideDetails = () => {
    setSelectedPlayer(null);
  };

  return (
    <div id="all-players-container">
      {players.map((player) => (
        <div key={player.id} className="container">
          <div className="player-card">
            <h2>{player.name}</h2>
            <img src={player.imageUrl} alt={player.name} className="player-image" />
            <div className="player-details">
              
              {selectedPlayer && selectedPlayer.id === player.id && (
                <div className="detailed-info">
                  <h2>{selectedPlayer.name}</h2>
                  <p>{selectedPlayer.breed}</p>
                  <p>{selectedPlayer.status}</p>
                  <p>{selectedPlayer.teamId}</p>
                 
                </div>
              )}
            </div>
            <button className="remove-button" onClick={() => handleRemovePlayer(player.id)}>
              Remove Player
            </button>
            
            {selectedPlayer && selectedPlayer.id === player.id ? (
              <button className="hide-details-button" onClick={handleHideDetails}>
                Hide Details
              </button>
            ) : (
              <button className="detail-button" onClick={() => handleShowDetails(player.id)}>
                Details
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPlayers;


