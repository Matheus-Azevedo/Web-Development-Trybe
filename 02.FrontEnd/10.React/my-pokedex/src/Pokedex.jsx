import React from "react";
import Pokemons from './data';
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const pokemonsList = Pokemons.map((pokemon) => {
      return <Pokemon key={ pokemon.id } pokemon={ pokemon }/>
    });
    return (
      <main className="pokedex-container">
        <h1>Minha Pokedex by Matheus Eduardo</h1>
        <section className="pokemon-list">
        { pokemonsList }
        </section>
      </main>
    );
  }
}

export default Pokedex;
