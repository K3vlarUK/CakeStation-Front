import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Cake = ({cake}) => {

    if(!cake){
        return "Loading..."
    }

    const url = '/cakes/' + cake.id;

    return ( 
        <Fragment>
            <img src={cake.url} alt={cake.name} />
            <Link to={url} className="name"><h4>{cake.name}</h4></Link>
            <p><strong><i>Comments:</i></strong></p>
            <p>{cake.comment}</p>
            <p><strong><i>Yum Factor:</i></strong> {cake.yumfactor}</p>
        </Fragment>
     );
}
 
export default Cake;