import React from "react";

export default function Dados(props){
    let n1=10
    let n2=5
    return(
        <section>
            <p>Canal: {props.canal()}</p>
            <p>Youtube: {props.youtube}</p>
            <p>Curso: {props.curso}</p>
            <p>Idade: {props.age}</p>
            <p>Sobre: {props.about}</p>
            <p>Desafios de Carreira: {props.chalenges}</p>
            <p>{'A soma de ' + n1 + ' com ' + n2 + ', é igual a ' + props.somar(n1,n2)}</p>
        </section>
    )
}