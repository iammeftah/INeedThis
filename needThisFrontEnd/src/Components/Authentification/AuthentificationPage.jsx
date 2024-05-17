import React ,  { useState } from 'react';
import logo from "../../recources/valorant.svg";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import glass from "./glass.css";
const AuthentificationPage = () => {

    const [SignUpVisible, setSignUpVisible] = useState(false);
    const [SignInVisible, setSignInVisible] = useState(false);


    const toggleSignUp = () => {
        console.log("toggle sign up working");
        setSignUpVisible(!SignUpVisible);
    };
    const toggleSignIn = () => {
            console.log("toggle sign up working");
            setSignInVisible(!SignInVisible);
        };

    return (
        <div className='bg-slate-950 text-neutral-50 w-full h-screen flex flex-col md:flex-row'>
            <div className='hidden md:block md:w-1/2 relative'>
                <img src="https://cdn.pixabay.com/photo/2017/02/27/19/22/texture-2104054_960_720.jpg" alt="bg" className='w-full h-full object-cover' />
                <div className='absolute top-4 left-4'>
                    <img src={logo} alt="logo" height="60" width="60" />
                </div>
            </div>
            <div className='md:w-1/2 px-6 py-12 md:px-10 flex flex-col items-center justify-center'>
                <div className="w-full flex flex-col items-center sm:items-start justify-center">
                    <h1 className='font-bold text-5xl md:text-6xl '>NeedThis <br />Request & Supply in One Place.</h1>
                    <h2 className='font-bold text-3xl md:text-3xl py-8'>Join the Community Now.</h2>
                </div>
                <div className='w-full flex flex-col gap-4 '>
                    <button
                        onClick={toggleSignIn}
                        className="w-full font-bold py-3 rounded-md bg-[#7c3Aed] hover:bg-[#3e1d76] text-white transition-colors duration-300"
                    >
                        Sign In
                    </button>
                    <div className="flex flex-row justify-center items-center gap-2">
                        <p className="text-[.8rem] text-gray-500">
                            Don't have an account?
                        </p>
                        <button
                            onClick={toggleSignUp}
                            className="text-indigo-500 text-[.8rem] hover:text-indigo-400 hover:underline focus:outline-none"
                        >
                            Create account
                        </button>
                    </div>

                </div>
            </div>

            {SignUpVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="glass max-w-full w-full sm:w-1/2 p-6 pb-8 flex items-center justify-center">
                        <button onClick={toggleSignUp} className="absolute top-0 right-0 mx-4 my-3">
                            <i className="bx bxs-x-circle text-xl text-indigo-500 hover:text-indigo-600 duration-300"></i>
                        </button>
                        <SignUp />
                    </div>
                </div>
            )}

            {SignInVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="glass max-w-full w-full sm:w-1/3 p-6 sm:px-2 flex items-center justify-center">
                        <button onClick={toggleSignIn} className="absolute top-0 right-0 mx-4 my-3">
                            <i className="bx bxs-x-circle text-xl text-indigo-500 hover:text-indigo-600 duration-300"></i>
                        </button>
                        <SignIn />
                    </div>
                </div>
            )}
        </div>
    )
}

export default AuthentificationPage;