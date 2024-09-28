// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login'; // Import the Login component
import './App.css'; // Import the CSS file

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} /> {/* Add route for Login */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
