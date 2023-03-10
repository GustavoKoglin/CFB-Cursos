import React from "react";

export default function Dados(props){
    return(
        <section>
            <p>Idade: {props.age}</p>
            <p>Sobre: {props.about}</p>
            <p>Desafios de Carreira: {props.chalenges}</p>
        </section>
    )
}