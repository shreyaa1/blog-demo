import React from "react";
import "./App.css";
import { ReduxStore } from "./redux-store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReduxStore />
      </header>
    </div>
  );
}

export default App;
