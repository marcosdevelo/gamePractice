import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Consumer } from "../store/appContext";
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePlayer: null,
			id: null,
			attack: null
		};
	}
	render() {
		let defense = () => {
			for (let i = 1; i < 101; i++) {
				if (i % 3 === 0) {
					console.log("Tic");
				}
				{
					if (i % 5 === 0) {
						console.log("Toc");
					}
					{
						if (i % 5 === 0 || i % 3 === 0) {
							console.log("TicToc");
						}
					}
				}
			}
		};

		const startButton = () => {
			this.setState({ activePlayer: Math.floor(Math.random() * 2) + 1 });
		};
		const cpuMove = () => {
			console.log("cpumove");
			{
				setTimeout(function() {
					cpuAction();
				}, 5000);
			}
		};
		let cpuAction = () => {
			console.log("cpuAction");
			let chooseAction = [attack, defense];
			let action = chooseAction[Math.floor(Math.random() * chooseAction.length)];
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
					<Consumer>
						{({ store, actions }) => {
							return store.pl1Pokemons.map((item, index) => {
								return (
									<div key={index} className="col-4">
										<div className="card">
											<div className="card-header">
												<img src={item.image} alt="Smiley face" height="50" width="50" />{" "}
												<h1>{item.name}</h1>
											</div>
											<div className="card-body">
												{" "}
												<h1>ATK {item.attack}</h1> <h1>DFE {item.defense}</h1>
											</div>

											<button
												onClick={() => {
													this.setState({});
													attack("attack", item.id, item.attack);
												}}
												type="button"
												className={"btn btn-danger btn-sm  mr-2"}>
												ATTK
											</button>
											<button
												onClick={() => {
													this.setState({});
													defense();
												}}
												type="button"
												className={"btn btn-primary btn-sm"}>
												DEF
											</button>
										</div>
									</div>
								);
							});
						}}
					</Consumer>
				</div>

				<div className="row middleRow">
					<button
						type="button"
						className={"btn btn-success"}
						onClick={() => {
							startButton();
						}}>
						PLAY
					</button>
				</div>
				<Consumer>
					{({ store, actions }) => {
						{
							if (this.state.activePlayer === 1) {
								return <h1>Player 1</h1>;
							} else if (this.state.activePlayer === 2) {
								return <h1>Player 2</h1>;
							}
						}
					}}
				</Consumer>

				<div className="row opponentsRow">
					<Consumer>
						{({ store, actions }) => {
							return store.cpuPlayers.map((item, index) => {
								return (
									<div key={index} className="col-4">
										<div className="card">
											<div className="card-header">
												<img src={item.image} alt="Smiley face" height="50" width="50" />{" "}
												<h1>{item.name}</h1>
											</div>
											<div className="card-body">
												{" "}
												<h1>ATK {item.attack}</h1> <h1>DFE {item.defense}</h1>
											</div>
											<div className="card-footer">
												<button
													type="button"
													className={"btn btn-danger btn-sm  mr-2 disabled"}>
													ATTK
												</button>
												<button type="button" className={"btn btn-primary btn-sm disabled"}>
													DEF
												</button>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Consumer>
				</div>
			</React.Fragment>
		);
	}
}
