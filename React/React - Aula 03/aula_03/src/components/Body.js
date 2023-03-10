import React from 'react';
import Ia from './img/img2.png'
import Dados from './Dados';

export default function Body(){
  return(       
    <section>        

        <img src={Ia} alt="Inteligência Artificial"/>
        <p>Cursos finalizados</p>
        <p>Projetos desenvolvidos</p>

        <Dados   
        age='25 Anos'
        about='Estudande de Engenharia da computação no 3º Semestre, gosta de estudar sobre tudo, é curioso sobre as coisas, gosta de ajudar as pessoas, persiste naquilo que quer, ama desafios.'
        chalenges='Estar em constante evolução, desenvolver, criar, e inovar para ajudar a sociedade como um todo, ter uma posição sólida na área da tecnologia.' /> 
      
    </section>
  )
}