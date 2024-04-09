import React from 'react'

const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <img src="https://testing-library.com/img/octopus-64x64.png" alt="User Avatar" />
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='FullName' value={'AdStar'} onChange={() => {}}/>
        </div>
        <div>
          <label htmlFor='bio'>Bio</label>
          <textarea name='bio' id='bio' />
        </div>
        <div>
          <label htmlFor='job-location'>Job location</label>
          <select id='job-location'>
            <option value=''>Select a country</option>
            <option value='US'>United Stated</option>
            <option value='GB'>United Kingdom</option>
            <option value='CA'>Canada</option>
            <option value='IN'>India</option>
            <option value='AU'>Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type='checkbox' id='term' /> I agree to the term and conditions
          </label>
        </div>
        <button title="Click me">Submit</button>
        <button data-testid="submit-button">Submit</button>
      </form>
    </>
  )
}

export default Application