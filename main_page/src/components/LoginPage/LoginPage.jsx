import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Простая проверка (замените на запрос к серверу для реальной проверки)
    if (username === "" && password === "") {
      onLogin(); // Вызываем функцию из пропсов для авторизации
    } else {
      setError("Неверное имя пользователя или пароль");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Вход в систему</h2>
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="username">Имя пользователя</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите имя пользователя"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
          />
        </div>

        <button type="submit" className="login-button">
          Войти
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
