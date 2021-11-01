import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div style={{textAlign:"center"}}>
            <h1>404</h1>
            <h4>Can not found page</h4>
            <Link to='/'><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;