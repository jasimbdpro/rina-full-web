import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFormData(
      {
        ...formData,
        [name]: value,
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://rina-full-web.vercel.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response is not ok')
        }
        return response.json();
      })
      .then(data => {
        console.log('success: ', data.message)
        console.log('Received data: ', data.data)
        // Handle success (e.g., clear form, show message, etc.)
      })
      .catch(error => {
        console.error('Error: ', error);
        // Handle error (e.g., show error message)
      })
  }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name='name' value={formData.name} onChange={handleChange} />
          <input type="email" name='email' value={formData.email} onChange={handleChange} />
          <input type="password" name='password' value={formData.password} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <p className="read-the-docs">
        Sending Data to Server App
      </p>
    </>
  )
}

export default App
