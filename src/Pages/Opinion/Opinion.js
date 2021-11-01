import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Opinion.css';

const Opinion = () => {
    return (
        <div>
            <Header></Header>
            <div className="container contai">
            <h1 style={{textAlign:'center'}}>Write your opinion</h1>
  <form className='opinion' action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your first name"/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name"/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia"> Bangladesh</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      <option value="usa">Australia</option>
      <option value="usa">India</option>
      <option value="usa">China</option>
    </select>

    <label for="subject">Opinion</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

    <Link to='/thanks'><input type="submit"  value="Submit"/></Link>

  </form>
  </div>
  <Footer></Footer>
        </div>
    );
};

export default Opinion;