import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log({ fullName, email, password, role });
        axios.post('http://localhost:5000/api/user/register', { fullName, email, password, role })
            .then(res => {
                console.log(res.data);
                navigate('/login');
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>SignUp Page</h1>
            <form onSubmit={handleRegistration}>
                <label>
                    Full Name:
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br /> <label>
                    Role:
                    <input
                        type="radio"
                        name="role"
                        value="user"
                        checked={role === "user"}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    User
                    <input
                        type="radio"
                        name="role"
                        value="admin"
                        checked={role === "admin"}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Admin
                </label>
                <br />
                <br />
                <button type="submit">
                    Register
                </button>
                <button type="reset">
                    Reset
                </button>
                <h5>Already have an account? <Link to="/login">Login </Link></h5>
            </form>
        </div>
    );
};

export default Signup;
