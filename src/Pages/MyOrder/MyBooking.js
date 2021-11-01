import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css';

const MyBooking = () => {
    const {selectedBooking, remove} = useAuth();
    const totalPrice = selectedBooking.reduce((total,booking)=>total + booking.price, 0)
    return (
        <div>
            <Header></Header>
            {
              selectedBooking.length ?
              <div className='text-center p-3 fw-bold'>
                <h2>Total {selectedBooking.length} Place Added</h2>
                <h4>Total Cost : {totalPrice}</h4>
                <Link to='/form'>
                  <button>Booking Confirm</button>
                </Link>
              </div>:
              <div className="text-center"><h1>No Cost</h1></div>
            }
            <div className="">
            {selectedBooking.length ? <div>
            {
                selectedBooking.map(booking => (

                    // <h1>{booking.name}</h1>
                    <Container style={{paddingTop:'50px'}}>
              <Row key={booking._id}>
                <Col>
                <img src={booking.img} className="card-img-top h-100 w-100 " alt="" />
                </Col>
                <Col>
                <h2 className="fw-bold "> {booking.name}</h2>
                <p className="fw-bold ">{booking.description}</p>
                <Row>
                <Col>
                <h1><i className="fas fw-small fa-dollar-sign"></i> {booking.price}</h1>
                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></p>
                </Col>
                <Col>
                <div className='booking1' >
                                    <button>View Details <i class="fas fa-info-circle"></i></button>
                            </div><hr />
                           
                            <Row>
                              <Col>
                              <button className=' detail-btm' onClick={() => remove (booking._id)}><i class="fas fa-trash"></i> Remove </button></Col>
                            </Row>
                </Col>
                <hr />
              <p className="text-center fw-bold">{booking.time}</p>
              
              </Row>
                </Col>
              </Row>
            </Container>
           
                ))
            }
            </div> :
            <div> <h1 className='text-danger text-center'>No Booking Found</h1></div>
            }
            </div>
            <Nav.Link>
                    <Link className='booking pt-5' style={{color:'white',fontWeight:'bold', textDecoration:'none',}} to='/addedservice'><button className='container '>Add New Place</button>{selectedBooking.length}</Link> 
                    </Nav.Link>
            
            <Footer></Footer>
        </div>
    );
};


export default MyBooking;