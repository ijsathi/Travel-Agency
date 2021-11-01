import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Part.css';
import logo from '../../images/logo/header-logo.png';
import why from '../../images/logo/why.png';

const Part = () => {
    return (
        <>
        <div className='why'>
            <h1><b><i className='why1'>WHY</i> <img src={logo} alt="" /> <img style={{width:"150px"}} src={why} alt="" /></b></h1>
        </div>
<CardGroup>
  <Card className='m-3 part-card'>
    <Card.Img variant="top" className='w-25' src="https://cdn-icons-png.flaticon.com/512/5169/5169137.png" />
    <Card.Body>
      <Card.Title><h3>Safe Travel</h3> </Card.Title>
      <Card.Text>
      The SafeTravels Stamp was created for travellers to recognise destinations and businesses around the world which have adopted the SafeTravels health.
      </Card.Text>
      <div className="single-choose">
      <p >01</p>
      </div>
      
    </Card.Body>
  </Card>
  <Card className='m-3 part-card'>
    <Card.Img variant="top"  className='w-25' src="https://cdn-icons-png.flaticon.com/512/5998/5998991.png" />
    <Card.Body>
      <Card.Title><h3>Awesome Guide</h3></Card.Title>
      <Card.Text>
      Awesome Guide c'est avant tout une réelle passion pour les voyages, les découvertes et la communication. Notre n 2006 par Vincent Lauferon.
      </Card.Text>
      <div className="single-choose">
      <p >02</p>
      </div>
    </Card.Body>
  </Card>
  <Card className='m-3 part-card'>
    <Card.Img variant="top"  className='w-25' src="https://cdn-icons-png.flaticon.com/512/1041/1041888.png" />
    <Card.Body>
      <Card.Title><h3>Save Money</h3></Card.Title>
      <Card.Text>
      Saving can seem like a pipe dream for many of us at the best of times.The double whammy of flat wages growth ,has made saving money more difficult than ever for many Australians.
      </Card.Text>
      <div className="single-choose">
      <p >03</p>
      </div>
    </Card.Body>
  </Card>
</CardGroup>
        </>
    );
};

export default Part;