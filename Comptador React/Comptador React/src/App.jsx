import { useState } from 'react'
import Boto from './components/boto'



function App() {
  const [numClics, setNumClics] = useState(0)

  const incrementNum = () => {
    console.log("Incrementa")
    setNumClics(numClics + 1);
  }

  const reiniciarNum = () => {
    console.log("Reinicia")
    setNumClics(0)
  }

  return (
    <>
      <p>{numClics}</p>
      <Boto text="Clic" onClick={incrementNum} esClick={true}></Boto><br />
      <Boto text="Reiniciar" onClick={reiniciarNum} esClick={false}></Boto>
    </>
  )
}

export default App
