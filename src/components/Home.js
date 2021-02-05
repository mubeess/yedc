import React from 'react'
import Nav from './Nav'
import Section from './main/Section'
import Steps from './steps/Steps'
import './app.css'

function Home(props) {
    return (
    <div className="homeContainer">
     <Nav></Nav>
     <Section></Section>
     <Steps></Steps>

   </div>
    )
}
export default Home;