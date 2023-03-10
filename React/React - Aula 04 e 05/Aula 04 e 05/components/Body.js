import React from 'react';
import Ia from './img/img2.png'

export default function Body(){

    const colaborador=()=>{return 'Gusavo Borges Koglin'}
    const curso=()=>{return'Curso de React'}
    const empresa=()=>{return 'G&P Projetos e Sistemas'}

    function aceleraPCD(){
      return 'Alecera PCD'
    }

  return(
    <section>

      <div>
        <p>{empresa()}</p>
        <p>{aceleraPCD()}</p>
        <p>{colaborador()}</p>
        <p>{curso()}</p>
      </div>

      <div>

        <p>Cursos finalizados</p>
        <p>Projetos desenvolvidos</p>
        
      </div>
      
        <img src={Ia} alt="Inteligência Artificial"/>
        
    </section>
  )
}