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
        <div>
        <h4>Click on the cakes name to see more</h4>
            <ul className="component-list">
                {cakes}
            </ul>
        </div>
     );
}
 
export default CakeList;
