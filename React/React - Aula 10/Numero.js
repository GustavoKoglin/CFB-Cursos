import React from 'react';

export default function Numero(){
    return(
        <p>
            <p>Valor do state num em Numero: {num}</p>
            <buttom onClick={()=>props.setNum(props.num+10)}>Soma 10</buttom>
        </p>
    )
}