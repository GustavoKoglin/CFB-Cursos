import React from 'react'

export default function Caixa(){
    return(
        <>
            <p>{props.site}</p>
            {props.children[0]}
            {props.children[1]}
        </>
    )
}