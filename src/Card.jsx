import React from 'react';
import './Card.css';

function Card(props) {
    return (
      <div className={props.className}>  {/* use it here */}
        <img src={props.imgURL} alt="avatar_img" className="avatar_img" />
        <h2>{props.name}</h2>
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    );
  }
export default Card;


// function Card(props) {
//     return (
//         <div className="card">
//             <h2 className='name'>{props.name}</h2>
//             <img src={props.imgURL} alt="avatar_img" className="avatar_img" />
//             <p className='email'>{props.email}</p>
//             <p className='phone'>{props.phone}</p>
//         </div>
//     )
// }