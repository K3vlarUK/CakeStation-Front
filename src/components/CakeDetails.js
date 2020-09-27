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

    const addToFavourite = () => {
        localStorage.setItem(props.cake.name,JSON.stringify({
            name: props.cake.name,
            comment: props.cake.comment,
            url: props.cake.url,
            yumFactor: props.cake.yumFactor 
        }))
        alert(props.cake.name + " has been added to your favourites")
    }

    const editUrl = "/cakes/edit/" + props.cake.id

    return ( 
        <div className="component">
            <Cake cake={props.cake} />
            <button onClick={handleDelete}>Delete {props.cake.name}</button>
            <Link to={editUrl}>
                <button type="button">Edit {props.cake.name}</button>
            </Link>
            <button type="button" onClick={addToFavourite}>Add To Favourites</button>
        </div>
     );
}
 
export default CakeDetails;