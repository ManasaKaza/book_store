import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

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
        // Check if token is present, navigate to login if not
        console.log(token)
        if (!token) {
            navigate('/signup');
            return;
        }
        // Check if user is admin, navigate to unauthorized page if not
        if (role !== 'admin') {
            navigate('/unauthorized');
            return;
        }
    })

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addBook = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/books", formData, {
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
        <div>
            <h1>Add a New Book</h1>
            <form onSubmit={addBook}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    placeholder="Enter the title of the book here"
                    name="title"
                    value={formData.title}
                    onChange={onChangeHandler}
                    required
                    minLength="3"
                    maxLength="100"
                    id="title"
                />

                <label htmlFor="authors">Authors:</label>
                <input
                    type="text"
                    placeholder="Enter the authors of the book here"
                    name="authors"
                    value={formData.authors}
                    onChange={onChangeHandler}
                    required
                    minLength="3"
                    maxLength="100"
                    id="authors"
                />

                <label htmlFor="image">Image URL:</label>
                <input
                    type="text"
                    placeholder="Enter the image URL of the book here"
                    name="image"
                    value={formData.image}
                    onChange={onChangeHandler}
                    required
                    id="image"
                />

                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    placeholder="Enter the price of the book here"
                    name="price"
                    value={formData.price}
                    onChange={onChangeHandler}
                    required
                    min="0"
                    step="1"
                    id="price"
                />

                <button type="submit" className="btn btn-primary">Add Book</button>
                <button type="button" onClick={resetForm} className="btn btn-secondary">Reset</button>
            </form>
        </div>
    );
};

export default Sell;
