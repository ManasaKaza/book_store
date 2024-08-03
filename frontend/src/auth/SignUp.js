import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import login from '../assets/login.png';

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
        <div
            className="container-fluid d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url(${login})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '80vh',
                paddingright: '30px',
                paddingLeft:'10px'
            }}
        >
            <div className="row justify-content-center w-100">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className="card shadow-lg border-light" style={{ width: '90%' }}>
                        <div className="card-body">
                            <h1 className="text-center mb-4">Sign Up</h1>
                            <form onSubmit={handleRegistration}>
                                <div className="form-group mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name:</label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        className="form-control"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label className="form-label">Role:</label>
                                    <div className="form-check">
                                        <input
                                            id="userRole"
                                            type="radio"
                                            name="role"
                                            value="user"
                                            checked={role === "user"}
                                            onChange={(e) => setRole(e.target.value)}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="userRole" className="form-check-label">User</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="adminRole"
                                            type="radio"
                                            name="role"
                                            value="admin"
                                            checked={role === "admin"}
                                            onChange={(e) => setRole(e.target.value)}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="adminRole" className="form-check-label">Admin</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <button type="submit" className="btn btn-primary">
                                        Register
                                    </button>
                                    <button type="reset" className="btn btn-secondary">
                                        Reset
                                    </button>
                                </div>
                            </form>
                            <div className="text-center mt-4">
                                <h5>Already have an account? <Link to="/login">Login</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
