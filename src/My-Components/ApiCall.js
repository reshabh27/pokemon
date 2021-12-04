import React, { useEffect, useState } from 'react'
import './ApiCall.css';
import favcards from './favcards'
// import favcardadded from './Favcardscontain'

function updateFav(res) {
	let index = favcards.indexOf(res);
	if(index>-1)
	{
		alert("you have already added this pokemon to favorites");
	}
	else
	{
		favcards.push(res);
	}
	// console.log(favcards);
}

function Cards(props) {
	return (
		<>
			<div class="card" style={{ width: '12rem' }}>
				<img src={props.imgsrc} class="card-img-top pokimg" alt="pokemon" />
				<div class="card-body">
					<h5 class="card-title">{props.cardtitle}</h5>
					<button onClick={() => updateFav(props)} class="btn btn-primary">mark as favorite</button>
				</div>
			</div>
		</>
	);
}


function ShowCard(val) {

	return (

		<Cards imgsrc={val.imgsrc}
			cardtitle={val.ttle}
			cardid={val.id}
			key={val.id}
		/>
	);
}

let pokemondata = [];

export const ApiCall = () => {
	const [res, setRes] = useState([]);


	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
			.then(res => res.json())
			.then(data => {
				setRes(data.results);
				// console.log(data.res);
			})
	}, []);
	// console.log(nex);
	// console.log(res);
	res.forEach((element, index) => {
		pokemondata[index] = {
			id: index + 1,
			ttle: element.name,
			imgsrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
		}
	});
	// console.log(pokemondata);

	return (
		<div class="grid-container">
			{pokemondata.map(ShowCard)}
		</div>

	)
}

