import { changeLanguageData, getReviewsData } from "../types/constants.ts";

export interface IGetReview {
	type: typeof getReviewsData,
	payload: {a: number, b: number};
}

export interface IChangeLanguage {
	type: typeof changeLanguageData;
	payload: string;
}

export type TReviewsActions = IGetReview | IChangeLanguage;

export const getReviews = (counter: {a: number, b: number}): IGetReview => {
	return {
		type: getReviewsData,
		payload: {
			a: counter.a,
			b: counter.b
		}
	}
}

export const changeLanguage = (lang: string): IChangeLanguage => {
	return {
		type: changeLanguageData,
		payload: lang
	}
}