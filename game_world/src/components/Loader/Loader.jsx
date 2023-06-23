import React from 'react'
import Loading from '../../assets/loader.svg'

const Loader = () => {
  return (
    <div className='loading'>
        <img src={Loading} alt="Loader animated" />
    </div>
    
  )
}

export default Loader