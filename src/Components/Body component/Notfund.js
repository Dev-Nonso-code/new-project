import React from 'react'
import './Notfund.css';
import { Link } from "react-router-dom";

const Notfund = () => {
  const dome = () => {
    let message = "i'm coming"
    alert(message)

  }
  return (
    <>
      <main className='bg-danger m-auto text-alige-center'>
        <h4 className='text-warning'>ERROR 404</h4>
        <h5 className='text-dark f-4 w-4'>page not found</h5>
        <strong className='text-info'>please go back </strong>
        <h1 className='text-primary' onClick={dome}><Link to="/">Home</Link></h1>
      </main>
      <div id='div'>
        <span>Delvelop by Nonsoglobal</span>
      </div>
    </>
  )
}

export default Notfund
