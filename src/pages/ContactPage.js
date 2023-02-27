import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Implement form submission logic here
  };

  return (
    <div className='contact-form'>
      <div >
        <h1>Contact us</h1>
        <form onSubmit={ handleSubmit }>
          <table>
            <tr>
              <div>
                <td>
                  <label htmlFor='name'>Name:</label></td>
                <td>
                  <input
                    id='name'
                    type='text'
                    value={ name }
                    onChange={ handleNameChange }
                    required
                  /> </td>
              </div>
            </tr>
            <tr>
              <div>
                <td><label htmlFor='email'>Email:</label></td>
                <td><input
                  id='email'
                  type='email'
                  value={ email }
                  onChange={ handleEmailChange }
                  required
                /></td>
              </div>
            </tr>
            <tr>
              <div>
                
              <td><label htmlFor='message'>Message:</label></td>
              <td><textarea
                id='message'
                value={ message }
                onChange={ handleMessageChange }
                required
              /></td>
              </div>
              </tr>
            <button type='submit'>Submit</button>

          </table>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
