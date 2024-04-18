import { useEffect, useState } from 'react'
import './App.css'
import ProductService from './services/Product'

// Funktionaalinen React komponentti nimeltään CustomerList
function ProductList() {

// Stateen sijoitetaan palvelimelta tulevat tuotteet
const [products, setProducts] = useState([])
const [show, setShow] = useState(false)

// Suoritetaan aina alussa kun komponentti latautuu
useEffect(() => {
   ProductService.getAll()
   .then(data => setProducts(data)) // saapunut data asetetaan stateen
}, [] )


  return (
    <>
        <h2 className='tooltip' onClick={() => setShow(!show)}>
          Products <span class="tooltiptext">Show / hide: click: 'Products'</span>
          </h2>

        {show && products && products.map(p => (
            <h4>Tuote {p.productName} maksaa {p.unitPrice}</h4>
            )
          )
        }
    </>
  )
} 

export default ProductList