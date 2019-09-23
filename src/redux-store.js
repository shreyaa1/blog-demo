import React from "react";
import { createStore } from "redux";

class ReduxStore extends React.Component {
  render() {
    // step2 create reducer (state, action)
    const reducer = (state, action) => {
      if (action.type === "REACT") {
        return action.value;
      }
      return state;
    };

    // step1 create the store (reducer, state)
    const store = createStore(reducer, "JS");

    // step3 create subscription
    store.subscribe(() => {
      console.log("-->hello", store.getState()); //when state is changing calling this.
    });

    // step4 dispatch()(if type is "REACT" )(sending the cammand)
    store.dispatch({ type: "REACT", value: " lets learn react" });

    return null;
  }
}
export { ReduxStore };
