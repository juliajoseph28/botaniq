import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState(null)

  const imageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))

      // reading the file
      const reader = new FileReader()

      reader.onloadend = () => {
        console.log('Image data URL:', reader.result)
        // doing something with the image data URL
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <header>
        <h1> Botaniq </h1>
      </header>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <input type="file" onChange={imageUpload} />
      {image && <img src={image} alt="Uploaded preview" />}
    </>
  )
}

export default App
