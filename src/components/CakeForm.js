import React from 'react';

const CakeForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const cake = {
            "name": event.target.cakeName.value,
            "comment": event.target.comment.value,
            "url": event.target.url.value,
            "yumfactor": event.target.yumFactor.value
        }
        props.handleCakePost(cake);
    }

    return ( 
        <div className="form">
            <h3>Add your own cake to the database</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Cake Name" name="cakeName"/>
                <br />
                <input type="text" placeholder="Add a Comment" name="comment"/>
                <br />
                <input type="url" placeholder="Url of cake image" name="url"/>
                <br />
                <label htmlFor="yumFactor">The Yum Factor(between 0 and 10)</label>
                <br />
                <input type="number" min="0" max="10" id="yumFactor" name="yumFactor" />
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
 
export default CakeForm;