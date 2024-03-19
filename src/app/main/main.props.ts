import { IGetReview } from "../../services/actions/reviewsAction.ts";
import { ConnectedProps } from "react-redux";
import { connector } from "./index.tsx";

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface MainProps extends PropsFromRedux {
	getReviews: (counter: {a: number, b: number}) => IGetReview;
}