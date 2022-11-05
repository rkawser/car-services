import React from 'react';
import google from '../../../images/google.png';
import Github from '../../../images/github.png';
import Facebook from '../../../images/facebook.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../share/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub,gituser, Gitloading, Giterror] = useSignInWithGithub(auth);

    let elementError;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'


    if (error || Giterror) {
        elementError = <p>Error: {error.message}</p>
    }

    if (loading || Gitloading) {
       return <Loading></Loading> ;
      }


    if(user || gituser){
        navigate(from, {replace:true})
    }

    return (
        <div>
            <div>
                <div className='d-flex d-block  justify-content-center align-items-center'>
                    <dir className='border w-50'></dir>
                    <span>or</span>
                    <dir className='border w-50'></dir>
                </div>

                <div>
                    <p className='text-danger'>{elementError}</p>
                    <button onClick={() => signInWithGoogle()} className='btn btn-warning d-block mx-auto w-25'><img src={google} style={{ width: '30px' }} alt="" /> SignIn Google</button>

                    <button onClick={() => signInWithGithub()} className='btn btn-dark my-2 d-block mx-auto w-25'><img src={Github} style={{ width: '30px' }} alt="" />  SignIn Github</button>

                    <button className='btn btn-primary d-block mx-auto w-25'><img src={Facebook} style={{ width: '30px' }} alt="" />  SignIn Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;