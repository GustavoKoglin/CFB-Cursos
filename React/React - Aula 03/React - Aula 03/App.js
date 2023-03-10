import React from 'react';
import Logo from './components/img/img.png'
import Ia from './components/img/img2.png'

export default function App(){

    const colaborador=()=>{return 'Gusavo Borges Koglin'}
    const curso=()=>{return'Curso de React'}
    const empresa=()=>{return 'G&P Projetos e Sistemas'}

    function aceleraPCD(){
      return 'Alecera PCD'
    }

  return(
    <section>

      <header>
      <p>{empresa()}</p>
      <p>{aceleraPCD()}</p>
      <p>{colaborador()}</p>
      <p>{curso()}</p>
      </header>

      <section>
        <img src={Logo} alt='logo'/>
        <img src={Ia}/>
      </section>
      
      
    </section>
  )


}