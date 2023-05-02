import React from "react";
import Img5 from '../images/Frame.png'


function  Talk() {
    return(
        <>
        <div className=" h-[200vh] flex flex-wrap">
        <div className='w-[100%]  mt-[10%] '>
        <img src={Img5} className='ml-[6%] '/>
      </div>
       <div className='vc h-[60%]  w-[25%]  mt-[20%] ml-[75%]  absolute z-[-1] rounded-l-full '> </div>
        <div className='lg:w-[100%] w-[100%] lg:flex '>
        <div className='h-[100vh] lg:w-[50%] w-[100%] mt-[10%]  '>
            <div className="img w-[80%] h-[75%] ml-[5%] "></div>
      </div>
      <form className='lg:w-[40%] w-[100%] h-[70vh] mx-auto rounded-xl mt-[10%] shadow-[5px_5px_20px_gray]  z-20'>
        <div className="w-[80%] m-[auto] ">
        <div className='flex mt-6 '>
            <h1 className='text-4xl  ml-6  w-[100%] font-semibold tracking-wider text-center'>Contact us</h1>
        </div>
        <div className='w-[80%] mx-auto pt-10'>
            <div className="w-[80%]">
                <label>
                    Name*
                    <br/>
                    <input type='text' className='h-[6vh] w-[100] mx-auto rounded-lg  ' name='Name' placeholder='Enter Name' />
                </label>
            </div>
            <div>
                <label>
                    Email*
                    <br/>
                    <input type='email' className='h-[6vh] w-[100] mx-auto rounded-lg  ' name='email' placeholder='Enter email'  />
                </label>
            </div>
            <div>
                <label>
                    Phone no*
                    <br/>
                    <input type='numbar' className='h-[6vh] w-[100] mx-auto rounded-lg  ' name='phone' placeholder='Enter phone no'  />
                </label>
            </div>
            <div>
                <label>
                    Password*
                    <br/>
                    <input type='password' className='h-[6vh] w-[100] mx-auto rounded-lg  ' name='password' placeholder='Enter password'  />
                </label>
            </div>
            <button className='btn1 h-[7vh]  w-[100%] rounded-lg text-white mt-6 focus:outline-none py-2 px-3 '>Register Now</button>
            {/* <div className='flex'>
                <hr  className='h-[2px] bg-gray-400 w-[34%] mt-[40px]'/>
                <p className="mt-[25px] ml-3 text-gray-400">or singn up</p>
                <hr className="h-[2px] bg-gray-400 w-[34%] mt-[40px] ml-3"/>
            </div> */}
            <div>
        <div></div>
        <div></div>
    </div>
        </div>
        </div>
    </form>

            
        </div>


        </div>
        
        </>
    )
    
}
export default Talk