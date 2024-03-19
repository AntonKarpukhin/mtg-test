import { Component } from "react";
import Images from "../../components/images/images.tsx";
import Select from "../../components/select/select.tsx";
import Watch from "../../components/watch/watch.tsx";
import HeaderLayout from "../../components/header-layout/header-layout.tsx";
import { TRootState } from "../../services/store";
import { connect } from "react-redux";
import { changeLanguage, getReviews } from "../../services/actions/reviewsAction.ts";
import { HeaderProps } from "./header.props.ts";

class Header extends Component<HeaderProps> {

	onChangeLanguage = (lang: string) => {
		this.props.changeLanguage( lang );
		this.props.getReviews({a: this.props.review.prevPage, b: this.props.review.nextPage});
	};

	render() {
		return (
			<HeaderLayout>
				<Images
					src={'https://images.saymedia-content.com/.image/t_share/MjAyMzM1ODAzMjgyNTY0MTY0/beauceron.jpg'}
					alt={'dog'}/>
				<Select lang={['ru', 'en']} onChangeLanguage={this.onChangeLanguage} activeLanguage={this.props.review.language}/>
				<Watch/>
			</HeaderLayout>
		)
	}
}

const mapStateToProps = (state: TRootState) => {
	return {
		review: state.reviewReducer,
	};
};

export const connector = connect(mapStateToProps, { getReviews,  changeLanguage});

export default connector(Header);