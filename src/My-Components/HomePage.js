import React from 'react'
import {ApiCall} from './ApiCall'


export const HomePage = () => {

	let CardStyle = {
		textAlign : 'center',
		marginTop: '20px',
		fontSize: '40px',
		color: 'blue'
	};

	// console.log(ApiCall);

	return (
		<>
			<div style={CardStyle}>
				CARDS
			</div>
			<ApiCall/>
		</>
	)
}
