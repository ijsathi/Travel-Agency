import React from 'react';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const {selectedBooking} = useAuth();
    return (
        <div>
            <Header></Header>

                   <Nav.Link>
                    <Link className='booking pt-5' style={{color:'white',fontWeight:'bold', textDecoration:'none',}} to='/mybooking'><button className='container '>My Booking List</button>{selectedBooking.length}</Link> 
                    </Nav.Link>
                    <Nav.Link>
                    <Link className='booking pt-5' style={{color:'white',fontWeight:'bold', textDecoration:'none',}} to='/addedservice'><button className='container '>Add New Place</button>{selectedBooking.length}</Link> 
                    </Nav.Link>
            
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;