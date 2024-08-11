import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faImage, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import sellImage from '../assets/sellimg.png'; // Import the image

const Sell = () => {
    const [formData, setFormData] = useState({
        title: "",
        authors: "",
        image: "",
        price: ""
    });

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if token is present, navigate to signup if not
        if (!token) {
            navigate('/signup');
            return;
        }
        // Check if user is admin, navigate to unauthorized page if not
        if (role !== 'admin') {
            navigate('/unauthorized');
            return;
        }
    }, [token, role, navigate]);

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addBook = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://book-store-wo7x.onrender.com/api/books", formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("Book created successfully");
            resetForm();  // Reset form on success
            navigate('/home');
        } catch (err) {
            console.error("Error creating book:", err);
        }
    };

    const resetForm = () => {
        setFormData({ title: "", authors: "", image: "", price: "" });
    };

    return (
        <div className="container mt-5" style={{ position: 'relative' }}>
            <div className="row">
                {/* Background Image */}
                <div
                    className="col-10"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `url(${sellImage}) no-repeat center center`,
                        backgroundSize: 'cover',
                        zIndex: -2,
                        height: '100vh'
                    }}
                />
                {/* Overlay for transparency */}
                <div
                    className="col-10"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(250, 250, 250, 0.5)',
                        zIndex: -1,
                        height: '100vh'
                    }}
                />
                {/* Form */}
                <div className="col-md-4 col-lg-4 offset-lg-5">
                    <div className="card shadow-lg border-light">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Sell Book</h1>
                            <form onSubmit={addBook}>
                                <div className="form-group mb-3">
                                    <label htmlFor="title" className="form-label">
                                        <FontAwesomeIcon icon={faBook} className="me-2" />
                                        Title:
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter the title of the book here"
                                        name="title"
                                        value={formData.title}
                                        onChange={onChangeHandler}
                                        required
                                        minLength="5"
                                        maxLength="100"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="authors" className="form-label">
                                        <FontAwesomeIcon icon={faUser} className="me-2" />
                                        Authors:
                                    </label>
                                    <input
                                        id="authors"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter the authors of the book here"
                                        name="authors"
                                        value={formData.authors}
                                        onChange={onChangeHandler}
                                        required
                                        minLength="3"
                                        maxLength="100"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="image" className="form-label">
                                        <FontAwesomeIcon icon={faImage} className="me-2" />
                                        Image URL:
                                    </label>
                                    <input
                                        id="image"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter the image URL of the book here"
                                        name="image"
                                        value={formData.image}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="price" className="form-label">
                                        <FontAwesomeIcon icon={faDollarSign} className="me-2" />
                                        Price:
                                    </label>
                                    <input
                                        id="price"
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter the price of the book here"
                                        name="price"
                                        value={formData.price}
                                        onChange={onChangeHandler}
                                        required
                                        min="0"
                                        step="1"
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary">
                                        Add Book
                                    </button>
                                    <button type="button" onClick={resetForm} className="btn btn-secondary">
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sell;
