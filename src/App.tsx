import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

interface Game {
  name: string;
  description: string;
  genre: string;
  releaseDate: string;
}

function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [alertVisible, setAlertVisible] = useState(false);

  const games: Game[] = [
    {
      name: "Valorant",
      description: "A 5v5 tactical shooter from Riot Games focusing on strategy and precision.",
      genre: "FPS (First-Person Shooter)",
      releaseDate: "June 2, 2020"
    },
    {
      name: "Minecraft",
      description: "A sandbox game where you can build, explore, and survive in blocky worlds.",
      genre: "Sandbox / Adventure",
      releaseDate: "November 18, 2011"
    },
    {
      name: "GTA V",
      description: "An open-world action game set in the city of Los Santos.",
      genre: "Action / Adventure",
      releaseDate: "September 17, 2013"
    },
    {
      name: "Fortnite",
      description: "A fast-paced battle royale game with building mechanics.",
      genre: "Battle Royale",
      releaseDate: "July 21, 2017"
    },
    {
      name: "The Witcher 3: Wild Hunt",
      description: "An open-world RPG where you play as Geralt, a monster hunter on an epic journey.",
      genre: "RPG",
      releaseDate: "May 19, 2015"
    }
  ];

  const handleSelectGame = (gameName: string) => {
    const selected = games.find((g) => g.name === gameName) || null;
    setSelectedGame(selected);
    setAlertVisible(true);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">🎮 Game Info Explorer</h1>

      <ListGroup
        items={games.map((game) => game.name)}
        heading="Available Games"
        onSelectItem={handleSelectGame}
      />

      {alertVisible && selectedGame && (
        <Alert onClose={() => setAlertVisible(false)}>
          <h4>{selectedGame.name}</h4>
          <p>{selectedGame.description}</p>
          <p><strong>Genre:</strong> {selectedGame.genre}</p>
          <p><strong>Release Date:</strong> {selectedGame.releaseDate}</p>
        </Alert>
      )}
    </div>
  );
}

export default App;
