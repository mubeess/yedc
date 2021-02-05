import { CalendarOutlined, CreditCardOutlined, HistoryOutlined, MailOutlined, MoneyCollectOutlined, NumberOutlined, TransactionOutlined } from '@ant-design/icons'
import { Button, Empty, Input } from 'antd'
import React,{useState} from 'react'
import {usePaystackPayment} from 'react-paystack'
import Nav from '../Nav'
import {Spring} from 'react-spring/renderprops'
import './dash.css'

 function Dashboard() {
     const [amount,setAmount]=useState(0)
     const config={
         reference:(new Date()).getTime(),
         email:'mubees@gmail.com',
         amount:amount,
         publicKey:'pk_test_acd82313c5945d37a69e9e06195f153984cc70e0'
     }
     const onSuccess=(ref)=>{
       console.log(ref)
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
     const initialPayment=usePaystackPayment(config)
    return (
        <div className='dashContainer'>
            <Nav></Nav>
            <div className='mainDashh'>
             <div className='paymentDash'>
                 <h1><TransactionOutlined></TransactionOutlined>Buy Units</h1>
                     <span>Enter Amount</span>
                     <Input onChange={handleAmount} placeholder='Amount in Naira'></Input>
                     <Button onClick={()=>{
                         initialPayment(onSuccess,onClose)
                     }} type='primary' style={{width:'70%',marginTop:'30px'}}>Proceed To Payment</Button>
                     
            
            <div className="currentTr"> <Spring
                from={{opacity:0}}
                to={{opacity:1}}
                config={{delay:500,duration:100}}
                >
              {props=>(
            <div style={props}>
            <Empty></Empty>
            <h2>No Current Transaction</h2>
            </div>)}
            </Spring>
            </div>



             </div>
             <div className='infoPay'>
             <h1><HistoryOutlined></HistoryOutlined>Transaction History</h1>

      
             <div className="transacHist"> <Spring
                from={{opacity:0}}
                to={{opacity:1}}
                config={{delay:200,duration:200}}
                >
              {props=>(
            <div style={props}>
            <div className='indTrans'>
                <div className='mainHist'>
                 <h2>Mubarak Ibrahim</h2>
                 <span><MailOutlined></MailOutlined>mubeess@gmail.com</span>
                 <span><NumberOutlined></NumberOutlined>1234578</span>
                 <span><CalendarOutlined></CalendarOutlined>01-01-2019</span>
                </div>
                <div className='tick'>
                 <span><CreditCardOutlined></CreditCardOutlined></span>
                </div>

            </div>
            <div className='indTrans'>
                <div className='mainHist'>
                 <h2>Mubarak Ibrahim</h2>
                 <span><MailOutlined></MailOutlined>mubeess@gmail.com</span>
                 <span><NumberOutlined></NumberOutlined>1234578</span>
                 <span><CalendarOutlined></CalendarOutlined>01-01-2019</span>
                </div>
                <div className='tick'>
                 <span><CreditCardOutlined></CreditCardOutlined></span>
                </div>

            </div>
            </div>)}
            </Spring>
            </div>


             </div>
            </div>
        </div>

    )
}
export default Dashboard