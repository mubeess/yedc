import React, { useContext } from 'react'
import {Button, Input} from 'antd'
import {withRouter} from 'react-router-dom'
import AuthContext from '../../context/acronym/acronymContext'

 function MainLog(props) {
     const authCont=useContext(AuthContext)
    return (
    <>
    <h1>Log In</h1>
    <div className="mainLogInp" style={{
      marginTop:'100px'
    }}>
        <div className="mInp">
            <span>Email:</span>
            <Input size='large' placeholder='Email'></Input>
        </div>

        <div className="mInp">
            <span>Password:</span>
            <Input size='large' placeholder='Password'></Input>
        </div>

        <div className="mInp">
        <Button onClick={()=>{
        props.history.push('dash')
        }} size='large' type='primary' style={{width:'50%',marginLeft:'auto',marginRight:'auto'}}>Log In</Button>
        </div>
    </div>
    <h4>Don't have an account? <span onClick={()=>{
         authCont.setUser()
        }}>Sign Up</span></h4>
    </>
    )
}
export default withRouter(MainLog) 