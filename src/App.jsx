import { useState } from 'react'
import './App.css'
import Laskuri from './Laskuri'
import CustomerList from './CustomerList'

function App() {

  return (
    <>
        <h1>Northwind Corporation</h1>
        <CustomerList />
        <Laskuri />
    </>
  )
}

export default App
