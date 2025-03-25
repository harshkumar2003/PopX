import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Homepage from './pages/Homepage'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'
import Account from './pages/Account'

function App() {
  

  return (
    <Router>
      <div className=' font-rubik max-w-md w-full mx-auto h-screen flex flex-col justify-between p-4'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/create-account' element={<CreateAccount/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
