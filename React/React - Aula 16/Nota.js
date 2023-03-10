import React from 'react'

export default function Nota(props){

    return(
        <div>
            <legend>Informe a nota: </legend>
            <input type="text" name={props.nome} value={props.nota} onChange={(e)=>props.setNota(e)}></input>
 
        </div>


    )


}