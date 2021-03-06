import React from "react";
import Pokemons from './data';
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types';

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

Pokedex.propTypes = {
  Pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: {
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    },
    image: PropTypes.string,
    moreInfo:PropTypes.string,
  }))
}

export default Pokedex;
