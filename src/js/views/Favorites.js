import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const Favorites = () => {
  const { store, actions } = useContext(Context)
  const favList = store.favorites.length > 0 && store.favorites.map((fav) => {
			return <li key={fav.name} className="d-flex flex-row">
				<Link to="/details">
					<button onClick={() => actions.setDetails(fav.url)}>
						{fav.name}
					</button>
				</Link>
					<button className="bg-dark text-white" onClick={() => actions.deleteFromFavorites(fav.name)}> x </button>
			</li>
			})
    
      return (
        <div>
          <ul>
            { favList }
          </ul>
        </div>
        )
}

export default Favorites