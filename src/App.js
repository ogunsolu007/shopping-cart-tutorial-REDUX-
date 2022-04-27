import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// reducer  function is used to update store
// reducer function accept two arg state and action
// state is the initial state
// action is what happened/ what is updated
// reduucer function return the updated state or old state

import { createStore } from "redux";
import { reducer } from "./reducer";
import { Provider } from "react-redux";
// initial store

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
// REDUCER

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer/>
    </Provider>
  );
}

export default App;
