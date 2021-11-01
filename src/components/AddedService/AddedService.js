import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddedService.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const AddedService = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data =>{
         console.log(data);
         axios.post('https://fast-headland-27081.herokuapp.com/services', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Added successfully');
                reset();
            }
        })
        }
    return (
        <>
        <Header></Header>
        <div className='add-service'>
            <h2 className='text-center p-5' style={{color:'hotpink'}}>Please Added Your Favourite Place</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='write name' />
      <textarea {...register("description")}placeholder='description' />
      <input type="number" {...register("price")}placeholder='added price' />
      <input type="number" {...register("time")}placeholder='added time' />
      <input {...register("img")}placeholder='image url' />
      <input className='sub' style={{background:'hotpink'}} type="submit" />
    </form>
        </div>
        <Footer></Footer>
        </>
    );
};

export default AddedService;