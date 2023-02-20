import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context";
import { FilterProvider } from "./Filter/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <FilterProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </FilterProvider>
 
);
