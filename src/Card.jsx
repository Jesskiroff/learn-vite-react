import React from 'react';
import './styles.css';

function Card(props) {
    return (
        <div className="card">
            <h2 className='name'>{props.name}</h2>
            <img src={props.imgURL} alt="avatar_img" className="avatar_img" />
            <p className='email'>{props.email}</p>
            <p className='phone'>{props.phone}</p>
        </div>
    )
}

export default Card;