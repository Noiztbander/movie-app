import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { detailsReducer } from "./reducers/detailsReducer";
import { moviesReducer } from "./reducers/moviesReducer";
import { selectedReducer } from "./reducers/selectedReducer";

const reducers = combineReducers({
  detailsReducer: detailsReducer,
  moviesReducer: moviesReducer,
  selectedReducer: selectedReducer,
});

export const reduxStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
