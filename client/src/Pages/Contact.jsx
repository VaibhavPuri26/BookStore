import React from 'react'

function Contact() {
  return (
    <div className='cnt'>
       <form action="" method='POST'>
        <label>Enter You Email
            <input type="text" required />
        </label>
        <label>Enter Your Name
            <input type="text" required/>
        </label> 
        <button>Submit</button>
       </form>
    </div>
  )
}

export default Contact
