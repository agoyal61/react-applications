import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const title = "Nature"

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Card</h1>
      <Card username={title} btnText="click me" />
      <Card username="image" />
    </>
  )
}

export default App