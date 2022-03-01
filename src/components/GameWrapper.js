import React, { useState } from 'react'
import Hideme from './Hideme'

const GameWrapper = () => {
    const [isChildComponentHidden, setIsChildComponentHidden] = useState(false)

    const toggleShow = () => {
        setIsChildComponentHidden(!isChildComponentHidden)
    }

  return (
    <div>
        {isChildComponentHidden && <h1 className='text-3xl text-red-400'>GameWrapper</h1>}
        <Hideme text='Hide me' isShown={isChildComponentHidden}/>
        <button className='bg-blue-400 px-5 py-1 rounded-md mt-5' onClick={() => toggleShow()}>Click here</button>
    </div>
  )
}

export default GameWrapper