import React, { useState, useEffect } from "react";
import EmployeeCard from './EmployeeCard';
import { useParams } from 'react-router-dom';

function EmployeePage() {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEmployee() {
            try {
                const response = await fetch(`http://localhost:3000/employees/${id}`);
                if (!response.ok) {
                    throw new Error("Сотрудник не найден");
                }
                const data = await response.json();
                setEmployee(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchEmployee();
    }, [id]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return <EmployeeCard employee={employee} />;
}

export default EmployeePage;
