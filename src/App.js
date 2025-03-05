import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import BlogPost from './components/BlogPost';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>ATTYX Blog</h1>
        </header>
        <div className="app-container">
          <Sidebar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Navigate to="/contact-views" replace />} />
              <Route path="/:viewId" element={<BlogPost />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
