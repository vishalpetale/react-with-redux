import { createStore } from "redux";

const defaultState = {
  counter: 0,
  showCounter: true,
};

function counterReducer(state = defaultState, action) {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "TOGGLE") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;

  // CAN USE SWITCH STATEMENT INSTEAD
}

const store = createStore(counterReducer);

export default store;
