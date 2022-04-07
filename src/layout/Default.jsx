import React from 'react'
import { Footer, Navbar } from '../component'


const Default = ({children}) => {
  return (
    <div className='d-flex flex-column'>
        <Navbar/> 
        <div>{children}</div>
        <Footer/>
    </div>
  )
}

export default Default