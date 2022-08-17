import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" />
            <label>Enter your E-Mail</label>
            <input type="email" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows="6" placeholder="Type your massages here" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form