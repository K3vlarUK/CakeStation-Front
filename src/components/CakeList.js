import React from 'react';
import Cake from './Cake';

const CakeList = (props) => {

    const cakes = props.cakes.map((cake, index) => {
        return(
        <li key={index} className="component-item">
            <div className="component">
                <Cake cake={cake} />
            </div>
        </li>
        )
    })

    return ( 
        <ul className="component-list">
            {cakes}
        </ul>
     );
}
 
export default CakeList;