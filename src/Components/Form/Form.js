import React from 'react'
import '../Form/Form.css'

function Form() {
    return (
        <div className='contact-form'>
            <form className='message-form'>
                <label className='contact-details-form'>Name</label>
                <input type='text'></input>
                <label className='contact-details-form'>Email</label>
                <input type='email'></input>
                <label className='contact-details-form'>Subject</label>
                <input type='text'></input>
                <label className='contact-details-form'>Message</label>
                <textarea rows={6} placeholder='Type your Message here' />
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form