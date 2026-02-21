import React from 'react'
import { useState } from 'react'
const Button = ({text, bgcolor}) => {
    console.log(bgcolor)
    const [color, setColor] = useState('olive')

  return (
    <>
   
    <button onClick={()=> setColor({bgcolor})} className="outline-none px-4 py-1 rounded-full shadow-lg">{text}</button>
      
    </>
  )
}

export default Button
