import { useState } from 'react'
import './App.css'

function Laskuri() {

    // Komponentin state on nimeltään luku, joka alustetaan alussa nollaksi
    // setLuku funktiolla voidaan asettaa luku state
    const [luku, setLuku] = useState(0)
    const [show, setShow] = useState(false)

  return (
    <>
        
        {!show && <button onClick={() => setShow(true)}>Näytä laskuri</button>}
        {show && <button onClick={() => setShow(false)}>Piilota laskuri</button>}

        {show && <h2>{luku}</h2>}
        {show && <button onClick={() => setLuku(luku + 1)}>PLUS</button>}
        {show && <button onClick={() => setLuku(luku + 999999999)}>UUS ENKKA CHEAT</button>}
        {show && <button onClick={() => setLuku(luku - 1)}>MIINUS</button>}
        {show && <button onClick={() => setLuku(0)}>RESET</button>}
    </>
  )
}

export default Laskuri