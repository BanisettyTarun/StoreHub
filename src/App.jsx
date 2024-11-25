import React from 'react'
import Sidebar from './components/Sidebar'
import Routing from './utils/Routing'
import Home from './components/Home'

function App() {
  return (
    <div className='w-full h-screen flex' >
      <Routing />
    </div>
  )
}

export default App