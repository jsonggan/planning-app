import React from 'react';
import Todo from './pages/todo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Planning from './pages/planning';

function App() {
  return (
    <div className='font-body'>
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/planning" element={<Planning />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
