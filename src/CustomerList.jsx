import { useEffect, useState } from 'react'
import './App.css'
import CustomerService from './services/Customer'

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
            <h4>{c.companyName} from {c.city}</h4>
        ))}
       
    </>
  )
}

export default CustomerList
