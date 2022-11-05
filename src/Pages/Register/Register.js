import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/Social/SocialLogin';
import Loading from '../share/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home')
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleBlurName = e => {
        setName(e.target.value)
    }

    const handleBlurEmail = e => {
        setEmail(e.target.value)
    }

    const handleBlurPassword = e => {
        setPassword(e.target.value)
    }

    const handleBlurConfirm = e => {
        setConfirm(e.target.value)
    }

    const handleSubmit = (e) => {
        if (confirm !== password) {
            alert('try again password not match')
            return;
        }
        createUserWithEmailAndPassword(email, password)
            .then(() => {
                updateProfile({ displayName: name })
                sendEmailVerification();
               toast('Sent email for verify')
            })
        e.preventDefault()

       
    }


    return (
        <div className='container mt-5'>

            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input onBlur={handleBlurName} type="text" name="" id="" placeholder='name' /> <br />
                <input onBlur={handleBlurEmail} type="email" name="" id="" placeholder='Email' /> <br />
                <input onBlur={handleBlurPassword} type="password" name="" id="" placeholder='password' /> <br />
                <input onBlur={handleBlurConfirm} type="password" name="" id="" placeholder='confirm password' /> <br />
                <p>{error?.message}</p>
                <input className='reg-btn' type="submit" value="Register" />
                <p className='mt-2 '>Already a user? <Link className='text-decoration-none text-primary' to='/login'>go to login page</Link> </p>

                <SocialLogin></SocialLogin>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Register;