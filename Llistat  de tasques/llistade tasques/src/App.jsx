import { useState } from 'react'
import FormulariTasques from './components/formulariTasques';
import LlistatTasques from './components/LlistatTasques';
import Tasca from './components/Tasca';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LlistatTasques onSubmit={LlistatTasques.afegirTasca}></LlistatTasques>
    </>
  )
}

export default App
