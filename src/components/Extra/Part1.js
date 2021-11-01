import React from 'react';
import { Carousel } from 'react-bootstrap';
import Blog from './Blog';
import Part from './Part';
import './Part1.css';
import pic1 from '../../images/banner/pic1.png';
import pic2 from '../../images/banner/pic2.png';
import pic3 from '../../images/banner/pic3.png';
import pic4 from '../../images/banner/pic4.png';

const Part1 = () => {
    return (
        <>
        <Part></Part><br /><br />
            <Carousel className='part1'>
  <Carousel.Item interval={1000}>
    <img
      className=""
      src="https://image.freepik.com/free-vector/realistic-blurred-spring-background_52683-55622.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='middle-img'>
        <img src={pic1} alt="" />
      <h2>Gabriela Beckett</h2>
      <p>A model is a person with a role either to promote, display or advertise commercial products or to serve as a visual aid for people who are creating works of art or to pose for photography.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}> 
    <img
      className=" "
      src="https://image.freepik.com/free-vector/podium-wallpaper-with-geometrical-3d-shapes_52683-61176.jpg"
      alt="Second slide"
    />
   <Carousel.Caption className='middle-img'>
        <img src={pic2}alt="" />
      <h2>Ashley Willson</h2>
      <p>A model is a person with a role either to promote, display or advertise commercial products or to serve as a visual aid for people who are creating works of art or to pose for photography.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" "
      src="https://image.freepik.com/free-vector/realistic-blurred-spring-background_52683-57041.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className='middle-img'>
        <img src={pic3}alt="" />
      <h2>Sussie Wolff</h2>
      <p>A model is a person with a role either to promote, display or advertise commercial products or to serve as a visual aid for people who are creating works of art or to pose for photography.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" "
      src="https://image.freepik.com/free-vector/water-circles-petals-background-realistic-pink-composition-with-shine-sakura-flowers_1284-55027.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className='middle-img'>
        <img src={pic4}alt="" />
      <h2>Stephanie Wosniack</h2>
      <p>A model is a person with a role either to promote, display or advertise commercial products or to serve as a visual aid for people who are creating works of art or to pose for photography.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel><br /><br />
<Blog></Blog>
        </>
    );
};

export default Part1;