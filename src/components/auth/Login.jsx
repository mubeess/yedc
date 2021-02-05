import React,{useState,useEffect,useContext} from 'react'
import{UserOutlined,KeyOutlined} from '@ant-design/icons'
import {withRouter} from 'react-router-dom'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import Logo from '../logreact.png'
import AuthContext from '../../context/acronym/acronymContext'
import {Spring} from 'react-spring/renderprops'
import {Input, message,Button} from 'antd'
import SignUp from './SignUp'
import MainLog from './MainLog'
import './login.css'
const Login=(props)=> {
    let [isLoggedIn,setLogin]=useState(2)
    let [messagee,setMessage]=useState('errors')
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('') 
    const authContext=useContext(AuthContext)
    return (
        <div className="loginContainer">
            <div className="loginWelcome">
                <img src={Logo} alt="logo"/>
                <h1>WELCOME!</h1>
                <p>To access the functionality of geting units online, please sign up with your personal info.</p>
            </div>
        {
             authContext.isuser?(
            <div className="loginInputs"> <Spring
                from={{opacity:0,marginRight:-300}}
                to={{opacity:1,marginRight:0}}
                config={{delay:500,duration:100}}
                >
              {props=>(
            <div style={props}>
             <MainLog/>
            </div>
            )}
            </Spring>
            </div>
            
             ):(
         <div className="loginInputs">
         <Spring
                from={{opacity:0,marginRight:-300}}
                to={{opacity:1,marginRight:0}}
                config={{delay:500,duration:100}}
            >
              {props=>(
            <div style={props} >
            <SignUp></SignUp>
            </div>)}
        </Spring>
        </div>)

         }
         

      
         
        {/* <SignUp/> */}
    
  
        </div>
       
     
     
    )
}

export default withRouter(Login) 
