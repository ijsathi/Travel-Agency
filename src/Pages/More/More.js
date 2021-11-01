import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import './More.css'

const More = () => {
  const {id} = useParams();
  const {addToCart} =useAuth()
    // const {booking} = useAuth();
    const [service, setService] = useState({})
    useEffect(()=>{
      fetch(`https://fast-headland-27081.herokuapp.com/services/${id}`)
      .then(res =>res.json())
      .then(data => setService(data))
    },[])
    console.log(service);
    return (
        <div>
            <Header></Header>
            <Container style={{paddingTop:'50px'}}>
              <Row>
                <Col>
                <img src={service.img} className="card-img-top h-100 w-100 " alt="" />
                </Col>
                <Col>
                <h2 className="fw-bold "> {service.name}</h2>
                <p className="fw-bold ">{service.description}</p>
                <Row>
                <Col>
                <h1><i className="fas fa-dollar-sign"></i> {service.price}.00</h1>
                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></p>
                </Col>
                <Col className='booking'>
               <Link to='/form'>
               <button onClick={() => addToCart(service)}> Booking Confirm <i class="far fa-check-circle"></i></button>
               </Link>
                </Col><hr />
              <p className="text-center fw-bold">{service.time}</p>
              
              </Row>
                </Col>
              </Row>
            </Container>
    <Footer></Footer>
        </div>
    );
    
};

export default More;
