import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Orders from './components/Order'
import OrderForm from './components/OrderForm'

function App() {
  return (
    <div>
      <OrderForm/>
      <Orders />
    </div>
  )
}

export default App
