import React from "react";
import { createStore, combineReducers } from "redux";
import shopcar from "./shopcar/shopcar";

const reducer = combineReducers({
  shopcar
});

const store = createStore(reducer);
window.store = store;

export default store;
