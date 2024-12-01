import React from "react";
import './EmployeeCard.css';

function EmployeeCard({ employee }) {
    if (!employee) return <div>Loading...</div>;

    const HideValue = (value) => {
        return value && value.trim() !== "" ? value : "*******";
    };
    // шифрование личных данных

    const displayValue = (value) => {
        return value && value.trim() !== "" ? value : "Данные отсутствуют";
    };

    return (
        <div className="employee-card">
                    <div className="employee-info-columns">

                        <div className="employee-column">

                            <div className="employee-card-photo">
                                <img
                                    src={employee.photo}
                                    alt={`${employee.firstName} ${employee.lastName}`}
                                    className="employee-photo-img"
                                />
                            </div>

                        </div>

                        <div className="employee-column">

                            <div className="employee-card-field">
                                <strong>Имя:</strong> {employee.firstName}
                            </div>

                            <div className="employee-card-field">
                                <strong>Фамилия:</strong> {employee.lastName}
                            </div>

                            <div className="employee-card-field">
                                <strong>Телефон:</strong> {HideValue(employee.phone)}
                            </div>

                            <div className="employee-card-field">
                                <strong>Почта:</strong> {HideValue(employee.email)}
                            </div>

                        </div>
                        <div className="employee-column">

                            <div className="employee-card-field">
                                <strong>Должность:</strong> {displayValue(employee.position)}
                            </div>

                            <div className="employee-card-field">
                                <strong>Роль:</strong> {displayValue(employee.role)}
                            </div>

                            <div className="employee-card-field">
                                <strong>Город:</strong> {HideValue(employee.city)}
                            </div>

                            <div className="employee-card-field">
                                <strong>Адрес:</strong> {HideValue(employee.address)}
                            </div>

                        </div>
                        <div className="employee-column">

                            <div className="employee-card-field">
                                <strong>Функциональный блок:</strong> {displayValue(employee.functionalBlock)}
                            </div>

                            <div className="employee-card-field">
                                <strong>Подразделение 1:</strong> {displayValue(employee.department1)}
                            </div>

                            <div className="employee-card-field">
                                <strong>Подразделение 2:</strong> {displayValue(employee.department2)}
                            </div>

                            <div className="employee-card-field">
                                <strong>Подразделение 3:</strong> {displayValue(employee.department3)}
                            </div>

                            <div className="employee-card-field">
                                <strong>Подразделение 4:</strong> {displayValue(employee.department4)}
                            </div>

                        </div>
                    </div>
        </div>
    );
}

export default EmployeeCard;
