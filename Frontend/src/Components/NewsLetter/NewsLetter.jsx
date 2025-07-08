import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive Offers on your email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="newsLetter-input">
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
