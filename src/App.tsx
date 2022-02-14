import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import TopNavbar from "./layout/components/TopNavbar";
import HomePage from "./views/homepage/HomePage";
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
