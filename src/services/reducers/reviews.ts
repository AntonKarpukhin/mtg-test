import { TReviewsActions } from "../actions/reviewsAction.ts";
import data from '../../data.json';

export interface ClientReview {
	name: string;
	review: string;
	date: string;
}

export interface IReviewsState {
	listRu: ClientReview[];
	listEn: ClientReview[];
	limit: number,
	prevPage: number,
	nextPage: number,
	count: number,
	loading: boolean;
	language: string;
	viewData: ClientReview[];
}

const reviewsRu = Object.values(data.ru);
const reviewsEn = Object.values(data.en);

const initialState: IReviewsState = {
	listRu: reviewsRu,
	listEn: reviewsEn,
	limit: 10,
	prevPage: 0,
	nextPage: 10,
	count: reviewsRu.length,
	loading: false,
	language: 'ru',
	viewData: [],
}


const reviewsReducer = ( state: IReviewsState = initialState, action: TReviewsActions) => {

	switch ( action.type ) {
		case "GET_REVIEW_DATA": {
			let viewData;
			const prevPage = action.payload.a;
			const nextPage = action.payload.b;
			if (state.language === 'ru') {
				viewData = state.listRu.slice(prevPage, nextPage);
			} else if (state.language === 'en') {
				viewData = state.listEn.slice(prevPage, nextPage);
			}
			return {
				...state,
				prevPage,
				nextPage,
				viewData
			};
		}
		case "GET_CHANGE_LANGUAGE_DATA":
			return {
				...state,
				language: action.payload,
				prevPage: 0,
				nextPage: state.limit
			}
		default: {
			return state
		}
	}
}

export default reviewsReducer;
