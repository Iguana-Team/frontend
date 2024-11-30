import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.css';

function SearchBar() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {
        if (query.trim() === "") {
            setError("Введите имя для поиска");
            setResult(null);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/employees?firstName_like=${query}`);
            if (!response.ok) {
                throw new Error("Не удалось получить данные");
            }
            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            fetchData();
        }
    };

    const handleEmployeeClick = (id) => {
        navigate(`/employee/${id}`);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Введите имя..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={fetchData}
                style={{
                    padding: "8px 12px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                }}
            >
                Поиск
            </button>
            {loading ? (
                <p>Загрузка...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : result ? (
                <div>
                    {result.map((employee) => (
                        <div
                            key={employee.id}
                            onClick={() => handleEmployeeClick(employee.id)}
                            style={{ cursor: "pointer", margin: "10px 0", padding: "5px", backgroundColor: "#f0f0f0" }}
                        >
                            {employee.firstName} {employee.lastName}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default SearchBar;
