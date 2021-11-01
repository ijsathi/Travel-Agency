import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import './OurServices.css';

const OurServices = () => {
    const {addToCart} =useAuth()
    const [services, setOurServices] = useState([])
    useEffect(()=>{
        fetch('https://fast-headland-27081.herokuapp.com/services/')
        .then(result=> result.json())
        .then(data=>setOurServices(data))
    },[])
    return (
        <div className=''>
            <Header></Header>
            <div className="text-center p-3 fw-fold">
                <h1><span style={{fontWeight:'bold',color:'rgb(153, 2, 77)'}}>O</span>ur Popular Tour</h1>
                <p>First, let's start with answering the question “What exactly are group tours?” A group tour consists of a group of people who want to have a travel experience with others with a common interest. Group travel is an excellent option as the traveler just has to sign up and everything else is taken care of.</p>
            </div>
            <div className="row  row-cols-1 row-cols-md-3 p-5 gy-4 " >
            {
                services.map(dt =>
                    <div key={dt.id}>
                      <div className="col services-card">
                        <div className="card ser-card h-100">
                        <Link className='more-img' to={`/more/${dt._id}`}>
                        <img className="card-img-top " height='250px' src={dt.img}alt="" />
                            </Link>
                            
                             <div className="card-body">
                             <h3 className="card-title fw-bold">{dt.name}</h3>
                             <p className="card-text"><small>{dt.description}</small></p>
                             <Container>
                                 <Row>
                                     <Col><p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></p></Col> 
                                     <Row> <Col><p className=" fw-bold"><i class="fas fa-clock"></i> {dt.time}</p></Col>
                                     <Col className='star-icon'><p className=" fw-bold"><i className="fas fa-dollar-sign"></i> {dt.price}.00</p></Col>
                                    </Row>                              
                                 
                                 </Row>
                                 <Row><hr /></Row>
                                 <Row className='booking'>
                                     <Col>
                                     <button onClick={() => addToCart(dt)}><i className="far fa-flag"></i> Booking Now</button> <br />
                                     <Link to={`/more/${dt._id}`}>
                                    <button className='sm-12'>View Details <i class="fas fa-info-circle"></i></button>
                                    </Link>
                                     </Col>
                                    {/* <Col className='details-btn'> <Link to={`/more/${dt._id}`}>
                                    <button className='sm-12'>View Details <i class="fas fa-info-circle"></i></button>
                            </Link></Col> */}
                                 </Row>
                             </Container>
                            </div>
                        </div>
                      </div>
                    </div>
                    )
            }
        </div>
        <Footer></Footer>
            
        </div>
    );
};

export default OurServices;