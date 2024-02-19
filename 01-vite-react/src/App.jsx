import { useState } from 'react'
import Hello from './Hello'

function App() {
  const userName = 'Adi'
  
  return (
    <>
      <Hello />
      <h2>Vite react application created by {userName}</h2>
    </>
    
  )
}

export default App
