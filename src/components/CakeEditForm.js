import React from 'react';

const CakeEditForm = (props) => {

    if(!props.cake){
        return "Loading..."
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const cake = {
            "name": event.target.cakeName.value,
            "comment": event.target.comment.value,
            "url": event.target.url.value,
            "yumfactor": event.target.yumFactor.value
        }
        props.handleCakeUpdate(cake);
    }

    return ( 
        <div>
            <h3>Edit one of the cakes</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="cakeName" defaultValue={props.cake.name} />
                <br />
                <input type="text" name="comment" defaultValue={props.cake.comment} />
                <br />
                <input type="url" name="url" defaultValue={props.cake.url} />
                <br />
                <label htmlFor="yumFactor">The Yum Factor(between 0 and 10)</label>
                <br />
                <input type="number" min="0" max="10" id="yumFactor" name="yumFactor"defaultValue={props.cake.yumfactor} />
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
     );
}
 
export default CakeEditForm;