import { useEffect, useState } from 'react'
import './App.css'
import CustomerService from './services/Customer'

function CustomerList() {

// State
const [customers, setCustomers] = useState([])

// Suoritetaan aina alussa kun komponentti latautuu
useEffect(() => {
   CustomerService.getAll()
   .then(data => setCustomers(data))
}, [] )


  return (
    <>
        <h2>Customers</h2>
       
    </>
  )
}

export default CustomerList
