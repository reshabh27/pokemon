import React, { useState, useEffect } from 'react'
import favcards from './favcards'
import './Favorites.css';


let CardStyle = {
	textAlign: 'center',
	marginTop: '20px',
	fontSize: '40px',
	color: 'blue'
};

export const Favorites = () => {
	const [favs, setFavs] = useState(favcards);
	useEffect(() => {
		setFavs(favcards);
	}, [favs])
	// console.log(favs);
	// this.setFavs()

	function unmark(res){
		// let temparr = Array.from(favs);
		const pos = favcards.findIndex(el => el.id === res.id);
		if (pos >= 0)
			favcards.splice(pos, 1);
		setFavs(presta => {
			return {
				...presta,
				favcards
			}
		});
	}

	
	function Cards(props) {
		return (
			<>
				<div class="card" style={{ width: '12rem' }}>
					<img src={props.imgsrc} class="card-img-top" alt="pokemon" />
					<div class="card-body">
						<h5 class="card-title">{props.cardtitle}</h5>
						<button onClick={() => unmark(props)} class="btn btn-primary">unmark</button>
					</div>
				</div>
			</>
		);
	}
	
	function ShowCard(val) {
		return (
	
			<Cards imgsrc={val.imgsrc}
				cardtitle={val.cardtitle}
				cardid={val.cardid}
				key = {val.cardid}
			/>
		);
	}

	
	return (
		<>
			<div style={CardStyle}>
				Favorites
			</div>
			{favs.length ? <div class="grid-container">{favs.map(ShowCard)}</div> : <div class="grid-optional">You have not added any favorites</div>}
		</>
	)
}