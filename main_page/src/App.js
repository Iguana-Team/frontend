import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import EmployeePage from './components/Employee/EmployeePage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <header>
                    <div>
                        <Header />
                    </div>
                </header>
                <main className="main-content">
                    <Routes> {}
                        <Route path="/" element={<SearchBar />} />
                        <Route path="/employee/:id" element={<EmployeePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
