import React,{useState} from 'react'
import Phone from './phonereact.png'
import Anim from './animate.gif'
import './sec.css'
import { Button, Input, Modal } from 'antd'
import {usePaystackPayment} from 'react-paystack'
 function Section() {
     const [modVisible,setMod]=useState(false)
     const [mail,setMail]=useState('')
     const [meter,setMeter]=useState('')
     const [amount,setAmount]=useState(0)
     const [bought,setBoght]=useState(false)
     const config={
         reference:(new Date()).getTime(),
         email:mail,
         amount:amount,
         publicKey:'pk_test_acd82313c5945d37a69e9e06195f153984cc70e0'
     }

     const onSuccess=(ref)=>{
        console.log(ref)
        setBoght(true)
      }
      const onClose=(ref)=>{
         console.log('closed')
       }

       function handleAmount(e) {
        const value=e.target.value
        const converted=parseFloat(value)
        const toKobo=converted*100
        let convertTokobo=parseFloat(toKobo)
        if (!toKobo) {
            convertTokobo=0
       }
        setAmount(convertTokobo)
        
    }
     
    function handleMail(e) {
      const val=e.target.value
      setMail(val)  
    }

    function handleMeter(e) {
        const val=e.target.value
        setMeter(val)  
      }

     function handleMod() {
         const curMod=modVisible
         setMod(!curMod)
     }
     const initialPayment=usePaystackPayment(config)
    return (
        <div className='sec'>
         <div>
           <div className='write'>
               <h1 className='writeHead'>
                   "A new dawn at <span>YEDC</span>"
               </h1>
               <p>
               Get your units at your door step
               by just signing up and making payments.
               use the most secured and simple way of making 
               online payment with <span>PayStack</span>
               </p>
            </div> 
            <div className='write'>
               <h1 className='writeHead'>
                   "Make payments with the most secured gateway in <span className='afr'>Africa</span>"
               </h1>
               <p>
               The paystack team have recorded a 
               succesful milestone that none of the
               Africa's fintech companies have recorded.
               It's security and simplicity makes it accepted
               by most of giants tech companies in Africa
               </p>
            </div>
            <div className='inp'>
            <Button onClick={handleMod} style={{
                width:'100%',
                marginTop:'50px',
                color:'white'
            }} type='ghost'>Buy Units Instantly!</Button>
            </div>
             
           
         </div>
         <div className='anim'>
            <div className='phone'></div>
        </div>
       
      <Modal onCancel={handleMod} footer={!bought?(
          [<Button key='back' onClick={handleMod}>Cancel</Button>,
          <Button type='primary' key='submit' onClick={
            ()=>{
                initialPayment(onSuccess,onClose)
           }
          }>Proceed to payment</Button>]
      ):([<Button type='primary' key='print' onClick={()=>{
          window.print()
      }}>Print</Button>,
          <Button key='back' onClick={()=>{
              handleMod()
              setBoght(false)
          }}>Close</Button>
    ])} visible={modVisible} title={bought?('Print Unit'):('Buy Units')}>

      {!bought?(
          <div className='dashInp'>
          <div className='mainDashInp'>
             <span>Email:</span>
             <Input onChange={handleMail} type='email' placeHolder='Enter your email'></Input>
          </div>

          <div className='mainDashInp'>
             <span>Meter Number:</span>
             <Input onChange={handleMeter} placeHolder='Enter your meter number'></Input>
          </div>

          <div className='mainDashInp'>
             <span>Amount:</span>
             <Input onChange={handleAmount} type='email' placeHolder='Enter amount'></Input>
          </div>


          </div>
      ):(
          <div>
              <h3>Meter Number:  {meter}</h3>
              <h1>Unit: 1009 2889 2456 233</h1>
          </div>
      )}


          

      </Modal>
        </div>
    )
}
export default Section