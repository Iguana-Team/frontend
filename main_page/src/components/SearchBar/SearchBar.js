import React, { useState, useEffect } from "react";
import './SearchBar.css'

function SearchBar() {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState([]); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]); 
      return;
    }

    setLoading(true); 
    const timeoutId = setTimeout(() => {
      const fakeData = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
      ];
      const filteredData = fakeData.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredData); 
      setLoading(false); 
    }, 500); 

    return () => clearTimeout(timeoutId); 
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Введите запрос..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        style={{
          padding: "8px",
          width: "300px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      />
      {loading ? (
        <p>Загрузка...</p> 
      ) : (
        <ul>
          {results.length > 0 ? (
            results.map((item, index) => <li key={index}>{item}</li>)
          ) : query ? (
            <p>Ничего не найдено</p>
          ) : null}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;