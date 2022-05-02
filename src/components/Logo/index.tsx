import React from 'react'

const Logo = () => {


  return (
    <span 
        style={{backgroundColor : 'white', color: 'black', border: '1px solid black', borderRadius:'10px', padding:'10px', margin:'5px', minWidth: '150px', maxWidth:'100%' }} 
        className='fw-bolder font-monospace'>
        {'<snippet/>'}
    </span>
  )
}

export default Logo