import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id}= useParams()
    const [user,setUser]=useState({})

    useEffect(()=>{
        const url = `http://localhost:5000/service/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url, {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('update success')
        })
    }
    return (
        <div>

            <form className='d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit(onSubmit)}>
                <h2>update {user.name} </h2>
                <input {...register("name",{ required: true, maxLength: 20 })} placeholder='Name' />
                <textarea className='w-50 my-2' {...register("description")} placeholder='description' />
                <input type="number" {...register("price")} placeholder='price' />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Update;