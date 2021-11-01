import React from 'react';
import './Banner.css';
import 'animate.css';


const Banner = () => {
  return (
    <>
    <div className="banner">
      <div className="slider">
        <img id="slideImg" src="https://thumbnails.production.thenounproject.com/sv0kBi_JJD67HpMTx8oJ8jcD_i0=/fit-in/1000x1000/photos.production.thenounproject.com/photos/EF8EA3E5-CED1-40F8-94E0-5904846AD5F9.jpg" alt="" />
      </div>
      <div className="overlay">
        <div className="content">
          <p className='animate__backInDown' style={{color:"white"}}>TRAVEL WITH US</p>
          <h1><span style={{fontWeight:'bold',color:'rgb(153, 2, 77)'}}>E</span>NJOY <br />YOUR VACATION</h1>
          <h3>I wish you all the best for your vacation. Have fun and enjoy it. 
          <img style={{width:'70px'}} src="https://cdn-icons-png.flaticon.com/512/5976/5976095.png" alt="" /></h3>
          <div>
            <button className='header-btn' type='button'><a className='youtube' style={{color:'white',}} href="https://youtu.be/i9E_Blai8vk">WATCH MORE</a> </button>
            <button className='btn2 header-btn' type='button'><a className='youtube' style={{color:'white',}} href="https://www.youtube.com/c/JhankarMahbub"> SUBSCRIBE</a></button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner;