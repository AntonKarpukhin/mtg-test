import { createStore, combineReducers} from 'redux';
import reviewsReducer from "../reducers/reviews.js";

const store = createStore(
    combineReducers({reviewReducer: reviewsReducer}),
);

export type TRootState = ReturnType<typeof store.getState>;

export default store;