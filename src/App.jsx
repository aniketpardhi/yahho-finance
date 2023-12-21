import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Navbar from "./componets/Navbar/Navbar";
import NewsList from "./componets/NewsList/NewsList";

import TrendingTickersComponent from "./componets/Ticket/TrendingTickersComponent";
import FinancialsComponent from "./componets/ChartData/FinancialsComponent";
import { DataProvider } from "./Context/GlobalData";

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
        <DataProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsList />} />
           

            <Route path="/tickets" element={<TrendingTickersComponent />} />
            <Route path="/finacial" element={<FinancialsComponent />} />
          </Routes>
        </DataProvider>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
