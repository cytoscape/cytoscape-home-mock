import React from "react";
import "./App.css";
import ResultGrid from "./components/result-grid";
import TitleBar from "./components/title-bar";

const App = () => {
  return (
    <div className="App">
        <TitleBar />
        <ResultGrid />
    </div>
  );
};

export default App;
