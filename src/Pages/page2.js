import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar1 from '../Components/navbar1';
import Footer from '../Components/footer';
import Img7 from '../images/Stroke.png'
export default function Page2(){
    const navigate = useNavigate();
    const shoot = () => {
navigate("/page3")
    }
    return(
        <>
        <Navbar1/>
        <div>
            <div className='img1 h-[40vh] w-[100%] text-white  text-center p-10 '>
               <h1 className='text-4xl font-bold  leading-[7vh]'>Step 2: Contact Information</h1>
               <p className='text-2xl  font-normal	tracking-wide'>How can we get in touch with you about the job of <br/>your dreams</p>
            </div>
            <div className='h-[90vh] border border-red-500'>
            <form className='h-[90vh] w-[70%] mx-auto my-[-10vh] rounded-xl bg-white shadow-[5px_5px_20px_gray]'>
                <div className='w-[100%] flex justify-center pt-10 items-center'>
                    <img src='/images/step2.png'/>
                </div>
        <div className=' w-[80%] mx-auto'>
            <div className='flex  mt-10'>
            <div className='w-[50%] '>
            <div className='w-[70%]'>
                <label>
                    Email*
                    <br/>
                    <input type='Email' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='Name' placeholder='Wade' />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                      Mobile*
                    <br/>
                    <input type='Number' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='phone' placeholder='(239) 555-0108'  />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                Address Line 1**
                    <br/>
                    <input type='Address' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='phone' placeholder='2972 Westheimer Rd. Santa Ana.. '  />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                Address Line 2*
                    <br/>
                    <input type='Address' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='phone' placeholder='2972 Westheimer Rd. Santa Ana.. '  />
                </label>
            </div>
        <button className='btn h-[7vh]  w-[70%] rounded-lg text-white mt-16 focus:outline-none py-2 px-3 ' onClick={shoot}>Previous</button>

            </div>
            <div className='w-[50%]'>
            <div className='w-[70%]'>
                <label>
                Home Contact No*               
                     <br/>
                    <input type='Number' className='h-[6vh] w-[100%] mx-auto rounded-lg   border' name='email' placeholder='(480) 555-0103'  />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                Country* 
                    <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='password' placeholder='US'  />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                City* 
                    <br/>
                    <input type='name' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='password' placeholder='Manchester '  />
                </label>
            </div>
            <div className='w-[70%] mt-4'>
                <label>
                ZIP Postal Code* 
                    <br/>
                    <input type='Number' className='h-[6vh] w-[100%] mx-auto rounded-lg  border' name='password' placeholder=' '  />
                </label>
            </div>
        <button className='btn1 h-[7vh]  w-[70%] rounded-lg text-white mt-16 focus:outline-none py-2 px-3 ' onClick={shoot}>Next</button>

            </div>
            </div>
      
        <div className='flex justify-center'>
        </div>

            
            <div>
                 </div>
                 </div>
    </form>
                <div className='h-[390px]  w-[359.3px] absolute z-[-2] ml-[73.4%]'>
                <img src={Img7} className='   my-[-20vh]'/>
              </div>
            </div>
            <Footer/>
        </div>
   
        </>
    )
} 