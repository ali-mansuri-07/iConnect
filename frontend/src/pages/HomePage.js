import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container">
            <h1>Welcome to the iConnect</h1>
            <p>
                <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to continue.
            </p>
        </div>
    );
};

export default HomePage;