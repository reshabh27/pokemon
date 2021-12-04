import React from 'react'
import { Link } from "react-router-dom";

export const LoginPage = () => {
	let LogStyl = {
		width: '75%',
		margin: 'auto',
		marginTop : "50px"
	}
	return (
		<div style={LogStyl}>
			<form>
				<div class="mb-3">
					<label for="exampleInputUserName" class="form-label" >User Name</label>
					<input type="text" class="form-control" id="exampleInputUserName" required />
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label" >Password</label>
					<input type="password" class="form-control" id="exampleInputPassword1" required />
				</div>

				<div class="mb-3 form-check" style={{display: "flex", justifyContent: "center"}}>
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" class="btn btn-primary" style={{display: "grid",margin: "auto" }}>Log In</button>
			</form>
			<div style={{textAlign:"center"}}>
				Not have a account? <Link to="/signup">Create an account</Link>
			</div>
		</div>
	)
}
