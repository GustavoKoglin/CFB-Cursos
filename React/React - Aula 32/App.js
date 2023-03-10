import React, { useState } from 'react'
import Altura from './Altura'
import CalcularIMC from './CalcularIMC'
import Peso from './Peso'
import ResultadoIMC from './ResultadoIMC'
import TabelaIMC from './TabelaIMC'

export default function App() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <>
      <Peso p={peso} sp={setPeso} />
      <Altura a={altura} sa={setAltura} />
      <CalcularIMC p={peso} a={altura} sr={setResultado} />
      <ResultadoIMC r={resultado} />
      <TabelaIMC />
    </>
  );
}