import React from 'react';
import Cake from './Cake';
import { Link } from 'react-router-dom';

const CakeDetails = (props) => {

    if(!props.cake){
        return "Loading..."
    }

    const handleDelete = () => {
        props.onDelete(props.cake.id)
    }

    const editUrl = "/cakes/edit/" + props.cake.id

    return ( 
        <div className="component">
            <Cake cake={props.cake} />
            <button onClick={handleDelete}>Delete {props.cake.name}</button>
            <Link to={editUrl}>
                <button type="button">Edit {props.cake.name}</button>
            </Link>
        </div>
     );
}
 
export default CakeDetails;