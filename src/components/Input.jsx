import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [pos, setPos] = useState();
    const handleClick = (pos) => {
        console.log(pos)
    }
  return (
    <div>
        <input type="number" placeholder="Search..." onChange={(e)=>setPos(e.currentTarget)}/>
        <button onClick={handleClick()}>SHOOT</button>
    </div>
  )
}

export default Input