import './navbar.css';
import React from 'react';

export default props => (
    <div className="navbar">
        <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/classes">Classes</a></li>
            <li><a href="#/workouts">Workouts</a></li>
            <li><a href="#/trainers">Trainers</a></li>
            <li><a href="#/blog">Blog</a></li>
            <li><a href="#/contact">Contact</a></li>
        </ul>
    </div>
);