import { useState } from 'react'
import './App.css'

function Laskuri() {

    // Komponentin state on nimeltään luku, joka alustetaan alussa nollaksi
    // setLuku funktiolla voidaan asettaa luku state
    const [luku, setLuku] = useState(0)

  return (
    <>
        <h2>{luku}</h2>

        <button onClick={() => setLuku(luku + 1)}>+</button>
    </>
  )
}

export default Laskuri