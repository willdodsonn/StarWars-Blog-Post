const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://swapi.dev/api/"

	return {
		store: {
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

		}
	};
};

export default getState;
