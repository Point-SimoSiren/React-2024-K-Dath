import { useEffect, useState } from 'react'
import './App.css'
import CustomerService from './services/Customer'
import CustomerDetails from './CustomerDetails'
import CustomerAdd from './CustomerAdd'

// Funktionaalinen React komponentti nimeltään CustomerList
function CustomerList() {

// Stateen sijoitetaan palvelimelta tulevat asiakkaat
// setCustomers metodilla voidaan asettaa customers -state
const [customers, setCustomers] = useState([])
const [showAddForm, setShowAddForm] = useState(false)

// Suoritetaan aina alussa kun komponentti latautuu
useEffect(() => {
   CustomerService.getAll()
   .then(data => setCustomers(data)) // saapunut data asetetaan customers -stateen
}, [] )


  return (
    <>
        <h2>Customers</h2>

        <button onClick={() => setShowAddForm(!showAddForm)}>Add new customer</button>

        {showAddForm && <CustomerAdd />}
        

        {customers && customers.map(c => (
            <CustomerDetails key={c.customerId} customer={c} />
        ))}
       
    </>
  )
}

// Tämä komponentti pitää exportata, jotta on mahdollista importata app.jsx tiedostoon
export default CustomerList 
