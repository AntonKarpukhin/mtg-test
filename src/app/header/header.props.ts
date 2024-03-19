import { ConnectedProps } from "react-redux";
import { connector } from "./index.tsx";
import { IChangeLanguage, IGetReview } from "../../services/actions/reviewsAction.ts";


type PropsFromRedux = ConnectedProps<typeof connector>;

export interface HeaderProps extends PropsFromRedux {
	getReviews: (counter: {a: number, b: number}) => IGetReview;
	changeLanguage: (lang: string) => IChangeLanguage;
}