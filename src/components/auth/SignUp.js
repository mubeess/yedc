import React,{useState,useEffect,useContext} from 'react'
import {withRouter} from 'react-router-dom'
import {Input, message,Button} from 'antd'
import AuthContext from '../../context/acronym/acronymContext'


 function SignUp() {
    const acrnCont=useContext(AuthContext)
    const [name,setName]=useState('')
    const [address,setAdd]=useState('')
    const [contact,setCont]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [meterNum,setMeter]=useState('')

    const handleName=(e)=>{
     const value=e.target.value;
     setName(value)
    }
    return (
        <>
        <h1>Create Account</h1>
        <div className="mainLogInp">
        <div className="mInp">
            <span>Full Name:</span>
            <Input size='large' placeholder='Full Name'></Input>
        </div>

        <div className="mInp">
            <span>Address:</span>
            <Input size='large' placeholder='Address'></Input>
        </div>

        <div className="mInp">
            <span>Phone:</span>
            <Input size='large' placeholder='Phone Number'></Input>
        </div>

        <div className="mInp">
            <span>Email:</span>
            <Input type='email' size='large' placeholder='Email'></Input>
        </div>

        <div className="mInp">
            <span>Password:</span>
            <Input type='password' size='large' placeholder='Password must be more than 6 chars'></Input>
        </div>

        <div className="mInp">
            <span>Metere No.:</span>
            <Input size='large' placeholder='Meter Number'></Input>
        </div>

        <div className="mInp">
        <Button style={{width:'50%',marginLeft:'auto',marginRight:'auto'}} size='large' type='primary'>Submit</Button>
        </div>
        </div>
        <h4>Already have an account? <span onClick={()=>{
            acrnCont.setUser()
        }}>Sign in</span></h4>
      
    </>
    )
}
export default SignUp;