import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
  return (
    <>
    <Spinner animation='border' role="status" style={{width:'100px',height:'100px',margin:'auto',display:'block'}}>
        
    </Spinner>
    <p style={{display:'block',margin:'2rem 0 0 52rem'}}>Đang tải..</p>
    </>
  )
}

export default Loader