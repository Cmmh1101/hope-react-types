import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="app" data-testid="app">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
