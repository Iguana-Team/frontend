import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPage from "./components/LoginPage/LoginPage";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-wrapper">
        {isAuthenticated && (
          <header>
            <Header />
          </header>
        )}
        <main className="main-content">
          <Routes>
            {!isAuthenticated ? (
              <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
            ) : (
              <>
                <Route path="/" element={<SearchBar />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </main>
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;
