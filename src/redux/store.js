import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { detailsReducer } from "./reducers/detailsReducer";
import { moviesReducer } from "./reducers/moviesReducer";
import { selectedReducer } from "./reducers/selectedReducer";
import { appReducer } from "./reducers/appReducer";

const reducers = combineReducers({
  detailsReducer: detailsReducer,
  moviesReducer: moviesReducer,
  selectedReducer: selectedReducer,
  appReducer: appReducer,
});

export const reduxStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
