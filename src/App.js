import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestInfo from './TestInfo';
import StartTest from './StartTest';
import Greeting from './Greeting'; // Import the Greeting component

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<TestInfo />} />
          <Route path="/quiz" element={<StartTest />} />
          <Route path="/greeting" element={<Greeting />} /> {/* New route for Greeting */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
