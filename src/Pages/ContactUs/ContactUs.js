import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="contact-banner">
      <div className="contact-slider">
        <img id="contact-slideImg" src="https://image.freepik.com/free-photo/woman-working-call-center_23-2148094886.jpg" alt="" />
      </div>
      <div className="contact-overlay">
        <div className="contact-content">
          <h4 className='contact-con'><span style={{fontWeight:'bold',color:'rgb(153, 2, 77)'}}>C</span>ONTACT US </h4>
          
          <div>
            
            <Link to='/'>
            <button className='contact-header-btn contact-youtube' type='button'style={{color:'white',}} >HOME</button>
            </Link>
            <Link to='/contactus'>
            <button className='contact-header-btn contact-btn2 contact-youtube' type='button'style={{color:'white',}} >CONTACT US</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* form */}
    <Container className='row p-5'>
    
        <div  className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className="container cont">
            <h3 className='text-center'>Send Your Massage</h3>
  <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia"> Bangladesh</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      <option value="usa">Australia</option>
      <option value="usa">India</option>
      <option value="usa">China</option>
      <option value="Italy">Italy</option>
      <option value="Franc">Franc</option>
    </select>

    <label for="subject">Write</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"/>

  </form>
  </div>
  </div>

  <div className='col-lg-6 col-md-6 col-sm-12 mt-4'>
  <div className="container cont1 " >
            <h3 className='text-center'>Contact Details</h3>
  <form action="action_page.php">
        <Container>
            <Row>
                <Col><img style={{width:'90px'}} src="https://cdn-icons.flaticon.com/png/512/2208/premium/2208224.png?token=exp=1635537489~hmac=2bbc26eb94ab8156b4d57231614b4de4" alt="" /></Col>
                <Col><h4> Phone: </h4><p>+123 4567 8910</p><p>+123 4567 8910</p></Col>
            </Row>
        </Container>
    
    

        <Container>
            <Row>
                <Col><img style={{width:'90px'}} src="https://cdn-icons.flaticon.com/png/512/2544/premium/2544140.png?token=exp=1635537923~hmac=52560f3b8aa25efad89de18a30ee1f12" alt="" /></Col>
                <Col><h4> Email: </h4><p>travel@agency.info</p><p>info@sitename.net</p><p>ownemail@gmail.com</p></Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col><img style={{width:'90px'}} src="https://cdn-icons.flaticon.com/png/512/4064/premium/4064836.png?token=exp=1635538198~hmac=9b7de692705d2792a7d5ca970e9950be" alt="" /></Col>
                <Col><h4> Address: </h4><p>29 Division Pt</p><p>New York, NY 10002, USA
</p><p>New York,USA</p></Col>
            </Row>
        </Container>

    

  </form>
  </div>
  </div>
        </div>
    </Container>

    <Container style={{background:"pink"}}>
  <Row>
    <Col>
      <h4><img style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/512/160/160154.png" alt="" /> FACEBOOK</h4>
    </Col>
    <Col>
    <h4><img style={{width:"25px"}} src="https://cdn-icons.flaticon.com/png/512/739/premium/739257.png?token=exp=1635570330~hmac=baf9afe86acc069a7eb9229675518b45" alt="" /> TWITTER</h4>
    </Col>
    <Col>
    <h4><img style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="" /> INSTAGRAM</h4>
    </Col>
  </Row>
</Container>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;