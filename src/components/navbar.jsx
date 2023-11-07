import { Link } from "react-router-dom"

import 

import { useContext} from "react"
import { LoginStateContext } from "../contexts/loginContext"
import Login from "../routes/login"

export default function Navbar()
{

	const auth 

	function handleSignOut()
	{
		
	}

	const {loginState, setLoginState} = useContext(LoginStateContext);
  return(
    <div className="navbar navbar-glass navbar-no-boxShadow bg-transparent">
	<div className="navbar-start">
		<Link to={'/'}>forty Thieves</Link>
	</div>
	<div className="navbar-center">
		<a className="navbar-item">Home</a>
		<a className="navbar-item">About</a>
		<a className="navbar-item">Contact</a>
	</div>
	<div className="navbar-end">
	{
		loginState 
		? 
		<button class="btn btn-outline-secondary" onClick={handleSignOut}>Log Out</button>
		:
		<Link className="navbar-item" to={`/login`}>{'Login ' + loginState}</Link>
	}
	</div>
</div>
  )
}