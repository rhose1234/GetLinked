import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Import the global CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'; // Import the Home component you created

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
