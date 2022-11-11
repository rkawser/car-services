import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast ,ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from './Social/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending2, error2] = useSendPasswordResetEmail(auth);

    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleBlurPassword = e => {
        setPassword(e.target.value)
    }

    const handleBlurEmail = e => {
        setEmail(e.target.value)
    }

    const handleloginSubmit = e => {
        signInWithEmailAndPassword(email, password)
        e.preventDefault();
        
    }

    const resetPassword=async()=>{
      await sendPasswordResetEmail(email)
        toast('Reset Email Send')
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={handleloginSubmit}>
                <h2>Please Login</h2>
                <input onBlur={handleBlurEmail} type="email" name="" id="" placeholder='Email' /> <br />
                <input onBlur={handleBlurPassword} type="password" name="" id="" placeholder='password' /> <br />
                <p>{error?.message}</p>
                <input className='reg-btn' type="submit" value="Login" />
                <p className='mt-2 '>New User? <Link className='text-decoration-none text-primary' to='/register'>go to Register page</Link> </p>

                <button onClick={resetPassword} className='btn btn-danger'> resetPassword</button>
                <SocialLogin></SocialLogin>
                <ToastContainer/>
            </form>
            
        </div>
    );
};

export default Login;