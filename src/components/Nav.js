import React,{useContext} from 'react'
import {withRouter} from 'react-router-dom'
import {Button,Menu,Dropdown,Avatar, Divider} from 'antd'
import Logo from './logreact.png'
import AcronymContext from '../context/acronym/acronymContext'
import {LogoutOutlined,DownOutlined, UserOutlined, HomeOutlined} from '@ant-design/icons'
function Nav(props) {
   const acrnCont=useContext(AcronymContext)
   const menu=(
       <Menu>
    <Menu.Item>
        <span><HomeOutlined></HomeOutlined>Home</span>
    </Menu.Item>
       <Menu.Item>
        <span><LogoutOutlined></LogoutOutlined>Log Out</span>
        </Menu.Item>
       </Menu>
   );
    return (
        <div className='nav'>
           <div className="logo">
               <img src={Logo} alt='logo'></img>
           </div>
           {acrnCont.islogged?(
          <div className='links'>
         <Dropdown overlay={menu}>
         <Avatar style={{color:'pink',backgroundColor:'black'}} size={64} icon={<UserOutlined></UserOutlined>}/>
         </Dropdown>
              
          </div>
           ):(
           <div className="links">
           <Button onClick={
               ()=>{
                  acrnCont.setUser()
                   props.history.push('login')
               }
           } type='primary' style={{width:'100px',marginRight:'20px'}}>Login</Button>
           <Button onClick={
               ()=>{
                   console.log(props)
                   props.history.push('login')
               }
           } type='ghost' style={{width:'100px',marginRight:'20px'}}>Sign Up</Button>
          </div>

           )}
         
           
        </div>
    )
}
export default withRouter(Nav);