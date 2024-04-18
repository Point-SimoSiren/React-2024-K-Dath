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
const [search, setSearch] = useState("")
const [showCustomers, setShowCustomers] = useState(false)

// Suoritetaan aina alussa kun komponentti latautuu
useEffect(() => {
   CustomerService.getAll()
   .then(data => setCustomers(data)) // saapunut data asetetaan customers -stateen
}, [] )


  return (
    <>
        <h2 className='tooltip' onClick={() => setShowCustomers(!showCustomers)}>
          Customers <span class="tooltiptext">Show or hide customer listing
          by clicking 'Customers' header</span>
          </h2>

       

        {showCustomers && <div>

        <button onClick={() => setShowAddForm(!showAddForm)}>Add new customer</button>

        {showAddForm && <CustomerAdd />}

        <br />

        {/* Hakukenttä */}
        <input type="text" value={search} placeholder='Search by company name'
        onChange={({target}) => setSearch(target.value) }
        />
        
        {/* Jos data saapunut niin customerit loopataan läpi ja renderöidään */}
        {customers && customers.map(c => {
            let lowerCaseName = c.companyName.toLowerCase()
            if (lowerCaseName.indexOf(search.toLowerCase()) > -1) {
            return(
           <CustomerDetails key={c.customerId} customer={c} />
            )
            }
        }
        )}
       
       </div>}
    </>
  )
}

// Tämä komponentti pitää exportata, jotta on mahdollista importata app.jsx tiedostoon
export default CustomerList 
