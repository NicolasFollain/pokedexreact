import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div className="essai">
      <PokemonCard />
      <PokemonCard />
    </div>
  );
}

export default App;
