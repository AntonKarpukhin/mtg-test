import { Component } from "react";
import { connect } from "react-redux";
import Pagination from "../../components/pagination/pagination";
import { TRootState } from "../../services/store";
import { getReviews } from "../../services/actions/reviewsAction.ts";
import { MainProps } from "./main.props.ts";
import ListView from "../../components/list-view/list-view.tsx";

class Main extends Component<MainProps> {
	constructor(props: MainProps) {
		super(props);
	}

	componentDidMount() {
		const counter = {a: 0, b: 10}
		this.props.getReviews(counter);
	}

	loader = (counter: number) => {
		this.props.getReviews({a: (counter - 1) * 10, b: counter * 10});
	};

	render() {
		return (
			<>
				<ListView dataView={this.props.review.viewData!}/>
				<Pagination
					itemsPerPage={this.props.review.limit}
					totalItems={this.props.review.count}
					onChangePage={this.loader}
				/>
			</>
		);
	}
}

const mapStateToProps = (state: TRootState) => {
	return {
		review: state.reviewReducer,
	};
};

export const connector = connect(mapStateToProps, { getReviews });


export default connector(Main);
