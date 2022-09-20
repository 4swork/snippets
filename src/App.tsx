import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <div className="display-6 m-4">
          Get readymade snippets to ease your development
        </div>
        <SearchBar />
      </header>
      <Navbar />
    </div>
  );
}

export default App;
