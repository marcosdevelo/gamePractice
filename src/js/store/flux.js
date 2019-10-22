const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cpuPlayers: [
				{
					id: 1,
					name: "pikachu malo",
					position: "attacker",
					image:
						"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcReSMs0KSKkKLfXcVZVeF5_g79xlS455yVWIcCZeHSM7sBYNKIKTWL8Pj8TgtVF662bbsOc0mUq0hKxhmRfNrlCvsf59qHFwrfYYtR8n5MRt3xQmcDkdJ45jw&usqp=CAc",
					attack: 47,
					defense: 46
				},
				{
					id: 2,
					name: "charmander malo",
					position: "Midfielder",
					image:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR443co4-tl5QrXlBJTzG-850ZRLgw1hT1FG2i58i4LarHHZe2Q",
					attack: 40,
					defense: 48
				}
			],
			pl1Pokemons: [
				{
					id: 3,
					name: "pikachu",
					position: "attacker",
					image:
						"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcReSMs0KSKkKLfXcVZVeF5_g79xlS455yVWIcCZeHSM7sBYNKIKTWL8Pj8TgtVF662bbsOc0mUq0hKxhmRfNrlCvsf59qHFwrfYYtR8n5MRt3xQmcDkdJ45jw&usqp=CAc",
					attack: 49,
					defense: 25
				},
				{
					id: 4,
					name: "charmander",
					position: "Midfielder",
					image:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR443co4-tl5QrXlBJTzG-850ZRLgw1hT1FG2i58i4LarHHZe2Q",
					attack: 40,
					defense: 48
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
