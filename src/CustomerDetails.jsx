import { useState } from 'react'
import './App.css'

// Komponentti saa "propseina" eli parametreina CustomerList.jsx komponentilta
// kyseessä olevan asiakkaan tiedot customer={c} -kohdassa rivi n.23
function CustomerDetails(props) {

// State määrittää näytetäänkö vain companyname H4 vai enemmän tietoja details div
const [showDetails, setShowDetails] = useState(false)

  return (
    <>
         <h4 onClick={() => setShowDetails(!showDetails)}>{props.customer.companyName}</h4>

         {showDetails && <div className='details'>
            <button>Edit</button>
            <button>Delete</button>
                <table>
                    <tr>
                        <th>Contact person</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>{props.customer.contactName}</td>
                        <td>{props.customer.phone}</td>
                        <td>{props.customer.address}</td>
                        <td>{props.customer.city}</td>
                        <td>{props.customer.country}</td>
                       
                    </tr>
                </table>
            </div>}
       
    </>
  )
}

export default CustomerDetails