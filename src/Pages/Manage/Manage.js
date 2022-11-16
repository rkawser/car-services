import React from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import useServices from '../../Hooks/Useservices';

const Manage = () => {
     const [users,setUsers]=useServices()

     const handleDeleService=id=>{
        const procced = window.confirm('are you sure, want to delete this product')
        if(procced){
            const url=`http://localhost:5000/service/${id}`
            fetch( url,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                const remaining = users.filter(user=> user._id !== id)
                setUsers(remaining)
            })
        }
     }
    return (
        <div>
            <h2>this is manage page</h2>
            <div>
                {
                    users.map(user=><div className='d-flex justify-content-center align-items-center p-2' key={user._id}>
                       <p>name: {user.name}</p>
                       <img className='mx-2' src={user.img} height={30} alt="" />
                       <p className='mx-2'>Price: {user.price}</p>
                       <Button className='mx-2' variant="outline-primary">update</Button>
                       <Button onClick={()=>handleDeleService(user._id)} variant="outline-danger">X</Button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Manage;