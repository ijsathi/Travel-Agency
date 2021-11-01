import React from 'react';
import { Link } from 'react-router-dom';
import './Thanks.css';

const Thanks = () => {
    return (
        <div className='text-center thanks p-5'>
            <h1 style={{color:'hotpink'}}>Thanks for staying with us</h1>
            <img src="https://cdn-icons.flaticon.com/png/512/3074/premium/3074316.png?token=exp=1635683997~hmac=84c9e6b7fb1ae31dda11fe147e4af906" alt="" /><br />
            <Link to='/'><button>Go To Home</button></Link>
        </div>
    );
};

export default Thanks;