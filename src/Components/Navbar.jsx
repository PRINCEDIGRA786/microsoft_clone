import React, { useState } from 'react'
import {LiaSearchSolid} from 'react-icons/lia';
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Navbar() {
  const[transu,settransu]=useState({
    translate:'-24rem 0rem',
    margin:'1.25rem 1rem 1rem 1rem',
  })
  const togglestyle = () => {
    if (transu.translate=='-24rem 0rem') {
        settransu({
          translate:'0rem 0rem',
          margin:'4rem 2rem 2rem 1rem',
        })
    }
    else {
        settransu({
          translate:'-24rem 0rem',
          margin:'1.25rem 1rem 1rem 1rem ',
        })
    }
}
  return (
   <>
   <div className='flex justify-between items-center'>
    <div className='flex justify-center items-center md:order-2'>
    <div className="hamburger m-4 inline-block cursor-pointer  md:hidden" onClick={togglestyle}>
        <div className="line h-0.5 w-5 my-1 bg-black"></div>
        <div className="line h-0.5 w-5 my-1 bg-black"></div>
        <div className="line h-0.5 w-5 my-1 bg-black"></div>
    </div>
    <div className="search md:hidden"><LiaSearchSolid/></div>
    </div>
    <div div className="logo text-center flex md:order-1">
      <div>
       <img src='data:image/png;base64,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' className='mr-4 w-24 mt-0 md:ml-16 md:w-28'></img>
        </div>
    <div className="features w-fit absolute inset-0 md:flex md:mx-4 
    md:bg-white bg-gray-100 md:space-x-5  md:translate-x-96 md:w-auto md:static md:mt-5 md:font-sans
     md:text-xs" style={transu} >
          {/* translate-y-11 justify-start mt-5 -translate-x-96 */}
        <div className="fitem cursor-pointer hover:underline decoration-2">Microsoft 365</div>
        <div className="fitem cursor-pointer hover:underline decoration-2">Office</div>
        <div className="fitem cursor-pointer hover:underline decoration-2">Windows</div>
        <div className="fitem cursor-pointer hover:underline decoration-2">Surface</div>
        <div className="fitem cursor-pointer hover:underline decoration-2">Xbox</div>
        <div className="fitem cursor-pointer hover:underline decoration-2">Support</div>
        </div>
       </div>
       <div className="cart md:order-3 flex md:mr-11">
       <div className="hidden md:block cursor-pointer hover:underline decoration-2 mt-3 font-sans text-sm tab:hidden">All Microsoft</div>
    <div className="search hidden md:block"><LiaSearchSolid className='w-14 h-6 mt-2' /></div>
    <div>
     <AiOutlineShoppingCart className='w-14 h-6 mt-2'/>
      </div> 
      <div>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAAY1BMVEX///8AAAD09PT8/PzX19c1NTWysrJ6enoEBAT4+PglJSVnZ2fk5OTa2torKyvo6OgRERGkpKSamppLS0u8vLwfHx9GRkZtbW3u7u6MjIxzc3NZWVmUlJQ6OjoWFhbExMSCgoItUbsmAAAD+UlEQVR4nO2abZuqIBCGTcgsUzNfK83+/688gGUgY5u7Q7vnuub+soW0PjLDMAx6HkEQBEEQBEEQBEEQBPGfw4Y/W1+x/VUtcdHe8mQnSPJbW8S/IiItosNqwiEq0g/LiM/rqYqB9fmT49Jf7rcto1MQFH1fBMEp2t0bL/2HZPBBRllnKdPbWZPV5SCFu9YgbszaqzJBtmfA9X2mTHZtgYu4Qnglb9QF832yTvaouOdUSxCKmySZLzSB95GN2ywRncIXWn/OUT5s/eUUTWvZ7+hOx0b+/+z5XQ1KGnMeT7VlsufGpY7SnBBNUJWHcHUoq6AxLvDSkRI22CV5hivpJEH3DGXSgTXHiRNlHQceG0gdmgmYt43MqBpt9fumUokDj+VivuyM8C11hE8Z4mPk69djEWpD9NDGZPwwY3dtrzS10aGX8QTbNq05XwQFtOYVRhc5d1pcHfw6fVy/0+3ysE6lG4fJQbviGudiOqo3jDuAaT3psBdMHb1lGC+ChURmr8zS9iOYGJDOzEqbDhbSGRPH24puFzx/je2IsE9gIcne7CejD17Odhb5x6TpXSGeGJIzlo50bXnI+0KEl6yxMmoRMcr9ZNV4W8i+nEaX7xNNY4iA5bCQ3PLM2ppK3+ZgW8bzbrCQm9VR2OaAo0POmcZq5bAQO442aPNGzMDEDgUsgkJ8BHRMsLKBFjYyOCTQwhJhrXzCG05Q+9HWAebLJ8hzvsE2nxtaMVThaB75CX5wYdoco2rhz9iY3XP1J5kHpqjSx3ygfbGQ3XxEis9PGaoMAAkR8XCHJWR+JU/bqBJE7XwY7z8iRBYBBK9WekwhoGn2WW3MVl5n04VGgWYa21nl8/ONnDB5wBufMb/hgVx8wg33LEfBclZw+vq3sYBW5ZdLXj2+HW7WPbGmLxTQ+vVKjyF6LFkl/WRIsAIaEOKBmPoivqKFeGvRO67s9U4blokSvEVvmgacXupQ9tFNiZcGaImRHJj2tV0GNFvgJUZmqjizw5vyDIGIqeKQPA+IpPmVXUbrjEk0ZvKsbyeAWgTMYwwxtxNyg9UNn940jGYczA2WtuWc2URA5OoHuFvOcRM+k7rDyGUHeRM+liU2b3jqnVAVN5HLEo9Czdw+E0ZMHPRCzb10tcBVV2oo8EtXKp4Gp2VCTtJTkYt5qrxZXpcJuZYOypuq4Lsc/IKviggLtYROSuDsizQE5DhzvvRDNouUhG4PbBYENHc6hmT1LSnhyulRmjpctJN3QEfo+HCRefGb628euz1uHQ+gX+P8AFpxP5IHLTQ0uj+SvzO+pADysZcUJH/ktQ3JH3mRZSAO/sCrPQ/+xMtOBEEQBEEQBEEQBEEQBB7/AJagLKYCxa/cAAAAAElFTkSuQmCC' className='w-11 mt-0'/>
      </div>
       </div>
      </div>
   </>
  )
}
