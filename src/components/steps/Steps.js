import React,{useState} from 'react'
import './steps.css'
import {Divider, Steps} from 'antd'
import Nepa from './111.png'

 function Stepss() {
     const [step,setStep]=useState(0)
    return (
        <div className='stepsContainer'>
            <div className='step'>
             <Steps current={step}>
                 <Steps.Step title='SignUp'></Steps.Step>
                 <Steps.Step title='Login'></Steps.Step>
                 <Steps.Step title='Make Payments'></Steps.Step>

             </Steps>
             <div className='mainStep'>
              <div onClick={()=>{setStep(0)}} className='stp'>
               <h3>Sign Up With Your Details</h3>
              </div>
              <div onClick={()=>{setStep(2)}} className='stp'>
              <h3>Log Into Your Accont</h3>
              </div>
              <div onClick={()=>{setStep(3)}} className='stp'>
              <h3>Finally Make Payment</h3>
              </div>
             </div>
            </div>
            <div className='nepaConta'>
                <div className='nepaImg'>
                <img src={Nepa} alt='nepa'></img>
                </div>
                <div className='nepaCn'>
                    <h2>Our Help Center</h2>
                </div>

            </div>
            <Divider></Divider>
            <div className='foo'>
            <h3 className='maintain'>DEVELOPED AND MAINTAINED BY NUTSCODERS</h3>
            <h4 className="loginFoot">Terms of Service    Privacy    All Rights Reserved©2021</h4>
            </div>
           
        </div>
    )
}
export default Stepss;