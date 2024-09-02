import { useState } from 'react'

function App() {
  const [alt, setAlt] = useState(0)
  const [kg, setKg] = useState(0)
  const imc = kg / (alt * 2)

  return (
    <>
      <div>
        <h1>Calcule seu IMC!</h1>
        <form>
          <label htmlFor='altura'>Sua altura: </label>
          <input type="number" id='altura' onChange={e => parseFloat(setAlt(e.target.value))} />
          <label htmlFor="kilog">Seu Peso: </label>
          <input type="number" id='kilog' onChange={e => parseFloat(setKg(e.target.value))} />
        </form>
        <span>{imc}</span>

      </div>
    </>
  )
  
  

}

export default App