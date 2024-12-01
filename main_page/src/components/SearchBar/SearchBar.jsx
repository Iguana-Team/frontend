import React, { useState, useEffect } from "react";
import EmployeeCard from "../Employee/EmployeeCard";
import './SearchBar.css';

function SearchBar() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [openedEmployeeId, setOpenedEmployeeId] = useState(null);
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        if (debouncedQuery.trim().length >= 2) {
            fetchData(debouncedQuery);
        } else {
            setResult([]);
            setError(null);
        }
    }, [debouncedQuery]);

    const fetchData = async (searchQuery) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/employees?firstName=${searchQuery}`);
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

    const handleEmployeeClick = (id) => {
        if (openedEmployeeId === id) {
            setOpenedEmployeeId(null);
        } else {
            setOpenedEmployeeId(id);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Введите имя..."
                value={query}
                onChange={handleInputChange}
            />
            {loading ? (
                <p>Загрузка...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : result.length > 0 ? (
                <div className="employee-list">
                    {result.map((employee) => (
                        <div key={employee.id} className="employee-item">
                            <div
                                onClick={() => handleEmployeeClick(employee.id)}
                                style={{
                                    cursor: "pointer",
                                    margin: "10px 0",
                                    padding: "5px",
                                    backgroundColor: "#f0f0f0",
                                    borderRadius: "4px",
                                }}
                            >
                                {employee.firstName} {employee.lastName}
                            </div>
                            {openedEmployeeId === employee.id && (
                                <div className="employee-card-container">
                                    <EmployeeCard employee={employee} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                query.trim() && <p>Ничего не найдено</p>
            )}
        </div>
    );
}

export default SearchBar;
