import React, {useState} from 'react'

export default function App(){

    const [nome,setNome]=useState('')

    const [carro, setCarro]=useState('')

    return (
        <>
            <label>Digite seu nome:</label>
            <input type="text" name="fnome" value={nome}      onChange={(e)=>setNome(e.target.value)}/>
            <p>Nome digitado: {nome}</p>  
            <label> Selecione um carro</label>
            <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
                <option value='Mercedes'>Mercedes Bens</option>
                <option value='Tesla'>Tesla</option>
                <option value='Fiat'>Fiat</option>
                <option value='Chevrolet'>Chevrolet</option>
            </select>
            <p>Carro seçecionado: {carro}</p>

        </>

    );
}