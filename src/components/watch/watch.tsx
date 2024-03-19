import { Component } from "react";
import { Time, WatchState } from "./watch.props.ts";

class Watch extends Component<object, WatchState> {
	intervalID: Time = null;

	constructor(props: object) {
		super(props);
		this.state = {
			time: this.getCurrentTime()
		};
	}

	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		if (this.intervalID) {
			clearInterval(this.intervalID);
		}
	}

	getCurrentTime(): string {
		const now = new Date();
		const hours = this.formatTimeUnit(now.getHours());
		const minutes = this.formatTimeUnit(now.getMinutes());
		const seconds = this.formatTimeUnit(now.getSeconds());
		return `${hours}:${minutes}:${seconds}`;
	}

	formatTimeUnit(unit: number): string {
		return unit < 10 ? `0${unit}` : unit.toString();
	}

	tick() {
		this.setState({
			time: this.getCurrentTime()
		});
	}

	render() {
		return (
			<div>
				<p>Текущее время:</p>
				<p>{this.state.time}</p>
			</div>
		);
	}
}

export default Watch;
