import React from 'react';
import Relogio from './Relogio';
import './App.css'

export default function App(){

  const textoDestaque={
    color:'#00f',
    fontiSize: '3em'
  }

  return(
    <>
      <section className='caixa'>
        <Relogio/>   
        <h1 style={{color:'#f00', fontiSize:'5em'}}>CFB Cursos</h1>
        <h2 style={textoDestaque}>React - Aula 08</h2>
        <p className='texto'>Se inscreva em nosso canal e nas nossas redes sociais.</p>
        <a href='https://www.youtube.com/cfbcursos' target='_blank' rel="noreferrer">CFB Cursos</a>
      </section> 
    </>
  )
}