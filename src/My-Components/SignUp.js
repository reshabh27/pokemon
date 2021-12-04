import React from 'react'


export const SignUp = () => {
	var SigForm ={
		margin : "auto",
		width : "75%"
	}
	return (
		<div style={SigForm}>
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label" >Email address</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
				</div>
				<div class="mb-3">
					<label for="exampleInputUserName" class="form-label" >User Name</label>
					<input type="text" class="form-control" id="exampleInputUserName" required/>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label" >Password</label>
					<input type="password" class="form-control" id="exampleInputPassword1" required/>
				</div>
				
				<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" class="btn btn-primary">Sign Up</button>
			</form>
		</div>
	)
}
