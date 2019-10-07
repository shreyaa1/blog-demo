import React from "react";
import "./App.css";
import { ReduxStore } from "./redux-store";
import { GoogleBtn } from "./home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReduxStore />
        <GoogleBtn />
      </header>
    </div>
  );
}

export default App;
