import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar1 from '../Components/navbar1';
import Footer from '../Components/footer';
import Img12 from '../images/step3.png'
import Img13 from '../images/Stroke.png'



export default function Page3(){
    const navigate = useNavigate();
    const shoot = () => {
navigate("/page4")
    }
    return(
        <>
        <Navbar1/>
        <div>
            <div className='img1 h-[40vh] w-[100%] text-white  text-center p-10 '>
               <h1 className='text-4xl font-bold  leading-[7vh]'>Step 3: Experience</h1>
               <p className='text-2xl  font-normal	tracking-wide'>Let’s get you noticed!Work ecperience will increase your chances <br/>of landing that next job</p>
            </div>
            <div className='h-[90vh] border border-red-500'>
            <form className='h-[90vh] w-[70%] mx-auto my-[-10vh] rounded-xl bg-white shadow-[5px_5px_20px_gray]'>
                <div className='w-[100%] flex justify-center pt-10 items-center'>
                    <img src={Img12}/>
                </div>
        <div className=' w-[80%] mx-auto'>
            <div className='flex  mt-16'>
            <div className='w-[50%] '>
            <div className='w-[70%]'>
                <label>
                Job City**
                    <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='Name' placeholder='Manchester' />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                Experience*
                    <br/>
                    <input type='level' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='phone' placeholder='Fresh'  />
                </label>
            </div>
           
        <button className='btn h-[7vh]  w-[70%] rounded-lg text-white mt-[50%] focus:outline-none py-2 px-3 ' onClick={shoot}>Previous</button>

            </div>
            <div className='w-[50%]'>
            <div className='w-[70%]'>
                <label>
                Expected Designation*               
                     <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg   border' name='email' placeholder=''  />
                </label>
            </div>
           
        <button className='btn1 h-[7vh]  w-[70%] rounded-lg text-white mt-[70%] focus:outline-none py-2 px-3 ' onClick={shoot}>Next</button>

            </div>
            </div>
      
        <div className='flex justify-center'>
        </div>

            
            <div>
                 </div>
                 </div>
    </form>
                <div className='h-[390px]  w-[359.3px] absolute z-[-2] ml-[73.4%]'>
                <img src={Img13} className='   my-[-20vh]'/>
              </div>
            </div>
            <Footer/>
        </div>
   
        </>
    )
} 