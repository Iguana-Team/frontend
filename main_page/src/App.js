import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import EmployeePage from "./components/Employee/EmployeePage";
import LoginPage from "./components/LoginPage/LoginPage";
import "./App.css";

function App() {
  // Состояние для аутентификации
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Функция для входа (вызывается после успешного логина)
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Функция для выхода
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-wrapper">
        {isAuthenticated && ( // Показываем Header только для авторизованных пользователей
          <header>
            <Header />
          </header>
        )}
        <main className="main-content">
          <Routes>
            {/* Если пользователь не авторизован, перенаправляем на страницу логина */}
            {!isAuthenticated ? (
              <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
            ) : (
              <>
                <Route path="/" element={<SearchBar />} />
                <Route path="/employee/:id" element={<EmployeePage />} />
                {/* 404 Redirect */}
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </main>
        {isAuthenticated && <Footer />} {/* Показываем Footer только для авторизованных пользователей */}
      </div>
    </Router>
  );
}

export default App;
