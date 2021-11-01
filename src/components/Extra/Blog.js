import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <>
        <div style={{textAlign:'center'}}>
            <h1 ><b><span style={{fontWeight:'bold',color:'rgb(153, 2, 77)'}}>L</span>atest Blog</b></h1>
            <p><i><span style={{fontWeight:'bold',color:'rgb(248, 24, 136)'}}>A</span></i> tourist stays within their comfort zone and only sticks with seeing the main, popular sights. They don't really make an effort to go out and meet people except those who they are traveling with. A traveler makes an effort to meet people from all over. <br /><i><span style={{fontWeight:'bold',color:'rgb(248, 24, 136)'}}><small>_by ADMIN</small></span></i></p>
        </div><br />
            <CardGroup className=''>
  <Card>
    <Card.Img variant="top" src="https://image.freepik.com/free-photo/sunset-pool_1203-3192.jpg" />
    <Card.Body>
      <Card.Title style={{color:'black'}}> <h3>Tips To Reduce Your Travel Costs</h3></Card.Title>
      <Card.Text>
      Making corporate travel savings might sound like a challenge – especially if you have lots of employees flying to different locations at different times. But there are ways to keep your costs down without compromising on traveler safety or services.
      </Card.Text>
    </Card.Body>
    <div>
      <p className="text-muted">
          <span className='text-mute'>20 FEB, 2019</span><span style={{paddingLeft:'350px'}}><small className='text-mute1' >By Admin</small></span>
      </p>
      <p>
          
      </p>
    </div>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://image.freepik.com/free-photo/taking-photos-lake_1088-88.jpg" />
    <Card.Body>
    <Card.Title style={{color:'black'}}> <h3>Your Card Processing Forms</h3></Card.Title>
      <Card.Text>
      Process payments for goods and services with credit cards or bank checks. Choosing check or offline credit card payment (via invoice or purchase order) displays the order total and all relevant information to the customer while following proper accounting rules for reporting and inventory control.
      </Card.Text>
    </Card.Body>
    <div>
      <p className="text-muted">
          <span className='text-mute2'>29 JUNE, 2019</span><span style={{paddingLeft:'350px'}}><small className='text-mute3' >By Admin</small></span>
      </p>
      <p>
          
      </p>
    </div>
  </Card>
</CardGroup>
        </>
    );
};

export default Blog;