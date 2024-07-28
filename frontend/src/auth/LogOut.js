import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        navigate('/login');
    }, [navigate]);

    return (
        <div>LogOut</div>
    );
}

export default LogOut;
