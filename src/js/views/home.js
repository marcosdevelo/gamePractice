import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePlayer: null,
			pl1Pokemons: [
				{
					id: 3,
					name: "los gomez",
					players: [
						{
							id: 1,
							name: "pikachu",
							position: "attacker",
							image:
								"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcReSMs0KSKkKLfXcVZVeF5_g79xlS455yVWIcCZeHSM7sBYNKIKTWL8Pj8TgtVF662bbsOc0mUq0hKxhmRfNrlCvsf59qHFwrfYYtR8n5MRt3xQmcDkdJ45jw&usqp=CAc",
							attack: 49,
							defense: 25
						},
						{
							id: 2,
							name: "charmander",
							position: "Midfielder",
							image:
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR443co4-tl5QrXlBJTzG-850ZRLgw1hT1FG2i58i4LarHHZe2Q",
							attack: 40,
							defense: 48
						}
					]
				}
			],
			cpuPlayers: [
				{
					id: 2,
					name: "enemy",
					players: [
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
					]
				}
			]
		};
	}
	render() {
		const startButton = () => {
			this.setState({ activePlayer: Math.floor(Math.random() * 2) + 1 });
		};
		const cpuMove = () => {
			console.log("cpumove");
		};
		const playerMove = () => {
			console.log("playermove");
		};
		if (this.state.activePlayer === 2) {
			cpuMove();
		}
		if (this.state.activePlayer === 1) {
			playerMove();
		}
		return (
			<React.Fragment>
				<div className="row">
                 {this.state.pl1Pokemons.players.map(item => {
                        return (
					<div className="col-4">
						<div className="card">
							<div className="card-header">
								<img
									src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcReSMs0KSKkKLfXcVZVeF5_g79xlS455yVWIcCZeHSM7sBYNKIKTWL8Pj8TgtVF662bbsOc0mUq0hKxhmRfNrlCvsf59qHFwrfYYtR8n5MRt3xQmcDkdJ45jw&usqp=CAc"
									alt="Smiley face"
									height="50"
									width="50"
								/>{" "}
							</div>
							<div className="card-body">
								{" "}
								<h1>ATTACK</h1>
								20{" "}
							</div>
						</div>
					</div>
);
                }
                }
				</div>
				<button
					type="button"
					className={"btn btn-success"}
					onClick={() => {
						startButton();
					}}>
					PLAY
				</button>
				<div className="row middleRow">
					<div className="col-4" />
				</div>
				<div className="row opponentsRow">
					<div className="col-4">
						<div className="card">
							<div className="card-header">
								<img
									src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcReSMs0KSKkKLfXcVZVeF5_g79xlS455yVWIcCZeHSM7sBYNKIKTWL8Pj8TgtVF662bbsOc0mUq0hKxhmRfNrlCvsf59qHFwrfYYtR8n5MRt3xQmcDkdJ45jw&usqp=CAc"
									alt="Smiley face"
									height="50"
									width="50"
								/>{" "}
							</div>
							<div className="card-body">
								{" "}
								<h1>ATTACK</h1>
								20{" "}
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card">
							<div className="card-header">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR443co4-tl5QrXlBJTzG-850ZRLgw1hT1FG2i58i4LarHHZe2Q"
									alt="Smiley face"
									height="50"
									width="50"
								/>{" "}
							</div>
							<div className="card-body">attack: 49, defense: 25</div>
						</div>
					</div>

					<div className="col-4">
						<div className="card">
							<div className="card-header">
								<img
									src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcReSMs0KSKkKLfXcVZVeF5_g79xlS455yVWIcCZeHSM7sBYNKIKTWL8Pj8TgtVF662bbsOc0mUq0hKxhmRfNrlCvsf59qHFwrfYYtR8n5MRt3xQmcDkdJ45jw&usqp=CAc"
									alt="Smiley face"
									height="50"
									width="50"
								/>{" "}
							</div>
							<div className="card-body">
								{" "}
								<h1>ATTACK</h1>
								100{" "}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
