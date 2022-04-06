import React, {Component} from "react";
class Pokemon extends Component {
  render() {
    const {pokemons} = this.props;

    return (
        <div className="content">
          <div className="info-pokemons">
            <h4>{pokemons.name}</h4>
            <h4>{pokemons.type}</h4>
            <h4>{pokemons.averageWeight.value + pokemons.averageWeight.measurementUnit}</h4>
          </div>
          <img src={pokemons.image} alt="Imagem de um pokemon" />
        </div>
    );
  };
};

export default Pokemon;