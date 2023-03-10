import React, {useState} from 'react';
import Numero from './Numero';
import './App.css'


export default function App(){
    const [num, setNum]=useState(10)
    const [nome, setNome]=useState('Gustavo Koglin')

    return(
        <>
            <p>Nome: {props.nome}</p>
            <p>Valor do State num: {num}</p>
            <Numero num={num} setNum={setNum}/>
            <Nome nome={nome} setNome={setNome}/>
        </>
    )
}