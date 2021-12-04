import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {


	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<Link to="/" class="navbar-brand">PokeMons</Link>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarText">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<Link to='/' class="nav-link active" aria-current="page" >Home</Link>
							</li>
							<li class="nav-item">
								<Link to="/favorite" class="nav-link">My-Favorites</Link>
							</li>

						</ul>
						<Link to="/login" class="navbar-text">
							Login
						</Link>

					</div>
				</div>
			</nav>

		</div>
	)
}




