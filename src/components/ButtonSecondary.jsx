import React from 'react'
import { Link } from 'react-router-dom'

function ButtonSecondary({text, link}) {
  return (
    <div>
      <button className="btn-t px-10 py-5 text-[#454545] bg-white  rounded-full font-semibold hover:bg-black transition font-archivo hover:text-white">
        <Link to={`/${link}`} > 
        {text}
        </Link> 
      </button>
      
    </div>
  )
}

export default ButtonSecondary
