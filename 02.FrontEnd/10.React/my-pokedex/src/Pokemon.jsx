import React from "react";

class Pokemon extends React.Component {
	render() {
		const { name, type, averageWeight, image  } = this.props.pokemon;
		const { value, measurementUnit } = averageWeight;
		return (
			<div className='pokemon-content'>
				<div className="pokemon-info">
					<strong>Nome:</strong>{ name }
					<strong>Tipo:</strong>{ type }
					<strong>Peso:</strong>{ value } { measurementUnit }
				</div>
				<div className="pokemon-img">
					<img src= { image } alt="Foto do pokemon"/>
				</div>
			</div>
		);
	}
}

export default Pokemon;