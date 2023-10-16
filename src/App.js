import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import View from "./components/pages/View";
import Edit from "./components/pages/Edit";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/pages/view/:id" element={<View></View>} />
          <Route path="/pages/edit/:id" element={<Edit></Edit>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
