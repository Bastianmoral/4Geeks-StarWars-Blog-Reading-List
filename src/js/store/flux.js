const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			vehicles: [],
			people: [],
			planets: [],
			details: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getPeople: () => {
				fetch('https://swapi.dev/api/people/')
				.then(data => data.json())
				.then(res => setStore({ people: res.results})
			)},
			getPlanets: () => {
				fetch('https://swapi.dev/api/planets/')
				.then(data => data.json())
				.then(res => setStore({ planets: res.results})
			)},
			getVehicles: () => {
				fetch('https://swapi.dev/api/vehicles/')
				.then(data => data.json())
				.then(res => setStore({ vehicles: res.results})
			)},
			setDetails: (url) => {
				fetch(url)
				.then(data => data.json())
				.then(res => setStore ({ details: res}))
			},
			addToFavorites: (name, url) => {
				const newFav = { name: name, url: url}
				setStore({favorites: getStore().favorites.concat(newFav)})
			},
			deleteFromFavorites: (name) => {
				const delFav = getStore().favorites.filter( (fav) => fav.name !== name)
				setStore({favorites: delFav})
			},
		}
	};
};

export default getState;
