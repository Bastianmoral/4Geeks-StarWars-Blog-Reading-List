import { Link } from "react-router-dom"
import React, { useContext } from "react"
import Favorites from "../views/Favorites"
import { Context } from "../store/appContext"



const Navbar = () => {
	const { store } = useContext(Context)

		return (
	  	<nav className="navbar navbar-expand-mb navbar-dark bg-dark text-warning">
			<h1>Star Wars</h1>
			<Link className="nav-link text-warning" to="/"> Home </Link>
			<Link className="nav-link text-warning" to="/people"> people </Link>
			<Link className="nav-link text-warning" to="/vehicles"> vehicles </Link>
			<Link className="nav-link text-warning" to="/planets"> planets </Link>
		
		<div className="dropdown">
			<button
				className="d-flex btn btn-dark dropdown-toggle nav-favs"
				type="button"
				id="dropdownMenu"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Favorites 
			<div className="mx-2 px-2 bg-warning rounded">
			{store.favorites.length}
			</div>
			</button>
			<ul 
				className="mt-2 border-2 dropdown-menu dropdown-menu-dark"
				aria-labelledby="dropdownMenu"
			>
		 		{ Favorites }
				<li>
					<Link
						className="px-1 nav-link text-white go-to-favs" to="/favorites"
					>
						My favorites
					</Link>
				</li>
			</ul>
			</div>
    </nav>
	)}

export default Navbar