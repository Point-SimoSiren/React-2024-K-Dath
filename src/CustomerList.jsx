import { useEffect, useState } from 'react'
import './App.css'
import CustomerService from './services/Customer'
import CustomerDetails from './CustomerDetails'

function CustomerList() {

// Stateen sijoitetaan palvelimelta tulevat asiakkaat
const [customers, setCustomers] = useState([])

// Suoritetaan aina alussa kun komponentti latautuu
useEffect(() => {
   CustomerService.getAll()
   .then(data => setCustomers(data))
}, [] )


  return (
    <>
        <h2>Customers</h2>

        {customers && customers.map(c => (
            <CustomerDetails key={c.customerId} customer={c} />
        ))}
       
    </>
  )
}

export default CustomerList
