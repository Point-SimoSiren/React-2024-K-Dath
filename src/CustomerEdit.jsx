import React, {useState} from "react"
import './App.css'
import CustomerService from './services/Customer'

// Propsi customer vastaanotetaan suoraan nimellä tällä kertaa
// Pohjalle tarvitaan siis muokattava customer joka on ollut jo ennestään
function CustomerEdit({customer}) {

    // State määritys
  const [customerId, setCustomerId] = useState(customer.customerId)
  const [companyName, setCompanyName] = useState(customer.companyName)
  const [contactName, setContactName] = useState(customer.contactName)
  const [contactTitle, setContactTitle] = useState(customer.contactTitle)
  const [address, setAddress] = useState(customer.address)
  const [city, setCity] = useState(customer.city)
  const [country, setCountry] = useState(customer.country)
  const [region, setRegion] = useState(customer.region)
  const [postalCode, setPostalCode] = useState(customer.postalCode)
  const [phone, setPhone] = useState(customer.phone)
  const [fax, setFax] = useState(customer.fax)

  
  // Formin submitointifunktio
  const submitForm = (event) => {
    event.preventDefault()

    var newCustomer = {
      customerId: customer.customerId,
      companyName: companyName,
      contactName: contactName,
      contactTitle: contactTitle,
      country: country,
      address: address,
      city: city,
      region: region,
      postalCode: postalCode,
      phone: phone,
      fax: fax
  }
  
  CustomerService.edit(newCustomer)
  .then(data => {
       alert(data)
       window.location.reload()
    }
    )
    .catch (error => {
       alert(error.message)
       window.location.reload()
    })
    
  }

 return(
     <div className="add-div">
        <h4>Editing Customer</h4>
        <form onSubmit={submitForm}>
            <input type="text" value={customer.customerId} disabled />
            <input type="text" value={companyName} onChange={({target}) => setCompanyName(target.value)} placeholder="Company name" />
            <input type="text" value={contactName} onChange={({target}) => setContactName(target.value)} placeholder="Contact name" />
            <input type="text" value={contactTitle} onChange={({target}) => setContactTitle(target.value)} placeholder="Contact title" />
            <input type="text" value={address} onChange={({target}) => setAddress(target.value)} placeholder="Address" />
            <input type="text" value={city} onChange={({target}) => setCity(target.value)} placeholder="City" />
            <input type="text" value={country} onChange={({target}) => setCountry(target.value)} placeholder="Country" />
            <input type="text" value={region} onChange={({target}) => setRegion(target.value)} placeholder="Region" />
            <input type="text" value={postalCode} onChange={({target}) => setPostalCode(target.value)} placeholder="Postal code" />
            <input type="text" value={phone} onChange={({target}) => setPhone(target.value)} placeholder="Phone" />
            <input type="text" value={fax} onChange={({target}) => setFax(target.value)} placeholder="Fax" />
            <input type="submit" value="Save" />
            <input type="submit" onClick={() => setAdding(false)} value="back" />
        </form>      
    </div>
  )
}

export default CustomerEdit
