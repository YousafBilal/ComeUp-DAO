import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
    const navigate = useNavigate();
    const shoot = () => {
navigate("/page1")
    }
    
    
   return(
    <>
    <form className='w-[70%] mx-auto rounded-xl shadow-[5px_5px_20px_gray]'>
        <div className='flex items-center ml-6'>
            <h1 className='text-2xl ml-6 font-bold '>Sign Up</h1>
            <div className='mx-auto mb-4'>
                <button className='btn2 text-white mt-5 rounded-l-lg   px-3 py-1  focus:outline-none '> Job Speeker</button>
                <button className='btn  rounded-r-lg mt-5 text-indigo-800 focus:outline-none  px-3 py-0.5'>Employer</button>
            </div>
        </div>
        <div className='w-[80%] mx-auto'>
            <div>
                <label>
                    Name*
                    <br/>
                    <input type='text' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='Name' placeholder='Enter Name' />
                </label>
            </div>
            <div>
                <label>
                    Email*
                    <br/>
                    <input type='email' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='email' placeholder='Enter email'  />
                </label>
            </div>
            <div>
                <label>
                    Phone no*
                    <br/>
                    <input type='numbar' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='phone' placeholder='Enter phone no'  />
                </label>
            </div>
            <div>
                <label>
                    Password*
                    <br/>
                    <input type='password' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='password' placeholder='Enter password'  />
                </label>
            </div>
            <button className='btn1 h-[7vh]  w-[100%] rounded-lg text-white mt-6 focus:outline-none py-2 px-3 ' onClick={shoot}>Register Now</button>
            <div className='flex'>
                <hr  className='h-[2px] bg-gray-400 w-[34%] mt-[40px]'/>
                <p className="mt-[25px] ml-3 text-gray-400">or singn up</p>
                <hr className="h-[2px] bg-gray-400 w-[34%] mt-[40px] ml-3"/>
            </div>
            <div>
        <div></div>
        <div></div>
    </div>
        </div>

    </form>
    
    </>
   ) 
}
export default SignUp