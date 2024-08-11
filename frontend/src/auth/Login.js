import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import loginImage from '../assets/loginimg.jpg'; // Correct path to the image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://book-store-wo7x.onrender.com/api/user/login', { email, password });

      console.log(response.data);

      const { token, userId, role } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('role', role);

        if (role === 'admin') {
          navigate('/sell');
        } else {
          navigate('/home');
        }
      } else {
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', backgroundColor: '#f8f9fa' }}>
      <div style={{ display: 'flex', width: '32%', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
        <div style={{ flex: 1 }}>
          <img src={loginImage} alt="Login" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1, padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50px' }}>
          <h1 className="text-center mb-4">Login Page</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary" type="submit">Login</button>
              <button className="btn btn-secondary" type="reset">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
