import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}= useParams()
    const [user,setUser]=useState({})
    const url =`http://localhost:5000/service/${serviceId}`
    useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setUser(data))
    },[])

    return (
        <div>
            <h2>this is service detail page : {user.name} </h2>
        </div>
    );
};

export default ServiceDetail;