import React from "react";
import './EmployeeCard.css';

function EmployeeCard({ employee }) {
    if (!employee) return <div>Loading...</div>;

    return (
        <div className="employee-card">
            <h1>Карточка сотрудника</h1>
            <div className="employee-card-details">
                <div className="employee-card-photo">
                    <img src={employee.photo}
                         alt={`${employee.firstName} ${employee.lastName}`}
                        className={"employee-photo-img"}
                    />
                </div>
                <div className="employee-card-info">
                    <div className="employee-card-field">
                        <strong>Подразделение 1:</strong> {employee.department1}
                    </div>
                    <div className="employee-card-field">
                        <strong>Функциональный блок:</strong> {employee.functionalBlock}
                    </div>
                    <div className="employee-card-field">
                        <strong>Подразделение 2:</strong> {employee.department2}
                    </div>
                    <div className="employee-card-field">
                        <strong>Подразделение 3:</strong> {employee.department3}
                    </div>
                    <div className="employee-card-field">
                        <strong>Подразделение 4:</strong> {employee.department4}
                    </div>
                    <div className="employee-card-field">
                        <strong>Должность:</strong> {employee.position}
                    </div>
                    <div className="employee-card-field">
                        <strong>Роль:</strong> {employee.role}
                    </div>
                    <div className="employee-card-field">
                        <strong>Фамилия:</strong> {employee.lastName}
                    </div>
                    <div className="employee-card-field">
                        <strong>Имя:</strong> {employee.firstName}
                    </div>
                    <div className="employee-card-field">
                        <strong>Телефон:</strong> {employee.phone}
                    </div>
                    <div className="employee-card-field">
                        <strong>Город:</strong> {employee.city}
                    </div>
                    <div className="employee-card-field">
                        <strong>Адрес:</strong> {employee.address}
                    </div>
                    <div className="employee-card-field">
                        <strong>Почта:</strong> {employee.email}
                    </div>
                </div>
            </div>
            <button className="back-button" onClick={() => window.history.back()}>
                Назад
            </button>
        </div>
    );
}

export default EmployeeCard;