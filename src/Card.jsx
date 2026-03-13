import React from 'react';
import './styles.css';
import '../contacts.js';

function Card() {
    return (
        <div className="card">
            <h2 className='name'>{contacts.name}</h2>
            <img src={contacts.imgURL} alt="avatar_img" className="avatar_img" />
            <p className='email'>{contacts.email}</p>
            <p className='phone'>{contacts.phone}</p>

        </div>
    )
}

export default Card;