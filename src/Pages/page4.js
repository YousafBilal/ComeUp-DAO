import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar1 from '../Components/navbar1';
import Footer from '../Components/footer';
import Img8 from '../images/Stroke.png'

export default function Page4(){
    const navigate = useNavigate();
    const shoot = () => {
navigate("/page5")
    }
    return(
        <>
        <Navbar1/>
        <div>
            <div className='img1 h-[40vh] w-[100%] text-white  text-center p-10 '>
               <h1 className='text-4xl font-bold  leading-[7vh]'>Step 4: Complete your Profile  </h1>
               <p className='text-2xl  font-normal	tracking-wide'>You are just few steps away from you professional CV. How <br/> would you like to start?</p>
            </div>
            <div className='h-[90vh] border border-red-500'>
            <form className='h-[90vh] w-[70%] mx-auto my-[-10vh] rounded-xl bg-white shadow-[5px_5px_20px_gray]'>
                <div className='w-[100%] flex justify-center pt-10 items-center'>
                    <img src='/images/step4.png'/>
                </div>
        <div className=' w-[80%] mx-auto'>
            <div className='flex  mt-16'>
            <div className='w-[50%] '>
           
          <p className=' text-base font-normal	'>I already have a CV/Resume</p>
           
        <button className='btn2 h-[7vh]  w-[70%] rounded-lg text-white focus:outline-none  px-3 my-4 ' onClick={shoot}>Upload File</button>

            </div>
            <div className='w-[50%]'>
                <p className=' font-normal text-base	'>Create profile from scratch</p>
            
        <button className='btn1 h-[7vh]   w-[70%] rounded-lg text-white  focus:outline-none py-2 px-3 my-4 ' onClick={shoot}>Continue</button>

            </div>
            
            </div> 
        <button className='btn h-[7vh]   w-[50%] rounded-lg  text-center mt-[30%] ml-[20%] text-white  focus:outline-none py-2 px-3 ' onClick={shoot}>Continue</button>

                 </div>
    </form>
                <div className='h-[390px]  w-[359.3px] absolute z-[-2] ml-[73.4%]'>
                <img src={Img8} className='   my-[-20vh]'/>
              </div>
            </div>
            <Footer/>
        </div>
   
        </>
    )
} 