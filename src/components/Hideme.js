import React, { useEffect } from 'react'

const Hideme = ({text,isShown}) => {

    useEffect(() => {
        !isShown ? alert('Child component was hidden!') : alert('Child component is shown now!');
    },[isShown])

  return (
    <h3 className='text-xl text-blue-400'>{text}</h3>
  )
}

export default Hideme