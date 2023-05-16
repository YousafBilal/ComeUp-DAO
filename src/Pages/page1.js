import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar1 from '../Components/navbar1';
import Footer from '../Components/footer';
import Img1 from '../images/Stroke.png'
import Img10 from '../images/step1.png'

export default function Page1(){
    const navigate = useNavigate();
    const shoot = () => {
navigate("/page2")
    }
    return(
        
        <>
        <Navbar1/>
        <div>
            <div className='img1 h-[40vh] w-[100%] text-white  text-center p-10 '>
               <h1 className='text-4xl font-bold  leading-[7vh]'>Step 1: Basic Information</h1>
               <p className='text-2xl  font-normal	tracking-wide'>Let’s get to know you, please fill out some basic information <br/> about yourself.</p>
            </div>
            <div className='h-[95vh] '>
            <form className='h-[90vh] lg:w-[70%] mx-auto lg:my-[-10vh] rounded-xl bg-white shadow-[5px_5px_20px_gray]'>
                <div className='w-[100%] flex justify-center pt-10 items-center'>
                    <img src={Img10}/>
                </div>
        <div className=' w-[80%] mx-auto'>
            <div className='lg:flex  mt-10'>
            <div className='lg:w-[50%] '>
            <div className='w-[70%]'>
                <label>
                    First Name*
                    <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='Name' placeholder='Wade' />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                    Last Name*
                    <br/>
                    <input type='date' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='phone' placeholder='01/05/1990 '  />
                </label>
            </div>
            </div>
            <div className='lg:w-[50%]'>
            <div className='w-[70%]'>
                <label>
                Date of Birth*               
                     <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg   border' name='email' placeholder='Warren'  />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                Degree 
                    <br/>
                    <input type='level' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='password' placeholder='Matriculation/O-Level '  />
                </label>
            </div>
            </div>
            </div>
        <div className='mt-6'>
            <h1>Gender</h1>
            <ul className=' flex m-4 '>
                <li className='p-4'>Female</li>
                <li className='p-4'>Male</li>
            </ul>
        </div>
        <div className='flex justify-center'>
        <button className='btn1 h-[7vh]  w-[40%] rounded-lg text-white mt-14 focus:outline-none py-2 px-3 ' onClick={shoot}>Register Now</button>
        </div>

            
            <div>
                 </div>
                 </div>
    </form>
                <div className='h-[390px]  w-[359.3px] absolute z-[-2] ml-[73.4%]'>
                <img src={Img1} className='   my-[-20vh]'/>
              </div>
            </div>
            <Footer/>
        </div>
   
        </>
    )
} 