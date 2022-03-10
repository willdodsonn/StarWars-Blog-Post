const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://swapi.dev/api/"

	return {
		store: {
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
			],	
			people: [

			],
			planets: [

			],
			vehicles: [

			],
			favorites: [

			]

		},
		actions: {
			// Use getActions to call a function within a fuction

			loadSomeData: () => {

				fetch(`${base_url}/people`)
				.then(res => res.json())
				.then(data => setStore({ people: data.results }));
				fetch(`${base_url}/planets`)
				.then(res => res.json())
				.then(data => setStore({ planets: data.results }));
				fetch(`${base_url}/vehicles`)
				.then(res => res.json())
				.then(data => setStore({ vehicles: data.results }));

			},
			addFavorite: data => {
				const store = getStore();
				store.favorites.push(data);
				setStore(store);
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
		
	};
};

export default getState;
