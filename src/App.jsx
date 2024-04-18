import { useState } from 'react'
import './App.css'
import Laskuri from './Laskuri'
import CustomerList from './CustomerList'
import ProductList from './ProductList'

function App() {

  return (
    <>
        <h1>Northwind Corporation</h1>

        <Laskuri />
        <br/>
        <ProductList />
        <br/>
        <CustomerList />
     
        
    </>
  )
}

export default App
