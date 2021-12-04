import React from 'react'
import { Favorites } from './Favorites';
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Error } from "./Error";
import { SignUp } from "./SignUp";
import {  Route, Switch } from "react-router-dom"

export const MainContent = () => {
	// let obj = <ApiCall/>
	// console.log(<ApiCall/>);

	return (

		<>
	    <Switch>
                <Route path="/" component={HomePage} exact />
				<Route path="/pokemon" component={HomePage}/>
                <Route path="/favorite" component={Favorites} />
                <Route path="/login" component={LoginPage} />
				<Route path="/signup" component={SignUp} />
                <Route component={Error} />
            </Switch>
			
		</>

	)
}
