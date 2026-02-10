import React from 'react';
import './styles.css';

function Image() {
    return ( 
        <div>
            <img className="food-img" 
                 src="https://joyfoodsunshine.com/wp-content/uploads/2023/04/homemade-butter-popcorn-recipe-1.jpg" 
                 alt="popcorn" />
            <img className="food-img" 
                 src="https://abeautifulmess.com/wp-content/uploads/2024/06/Candy-Salad-1-1.jpg" 
                 alt="candy" />
        </div>
    )
}

export default Image;