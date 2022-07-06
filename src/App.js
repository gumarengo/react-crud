import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "semantic-ui-react";

import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";

function App() {
  return (
    <div className="main"><Router>
      <div>
        <h2 className="main-header">React Crud Operations</h2>
        <div>
         <Routes> <Route exact path="/create" element={<Create/>} /> </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
        <Routes> <Route exact path="/" element={<Read/>} /> </Routes>
        </div>
        <Routes> <Route exact path="/update" element={<Update/>} /> </Routes>
      </div>
      <br/>
      <Button><a href="http://localhost:3000/create">Criar</a></Button>
    </Router>
    
    </div>
  );
}

export default App;
