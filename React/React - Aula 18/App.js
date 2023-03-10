import React from 'react';
import Canal from './Canal';
import Caixa from './Caixa';

export default function App(){
    return(
        <>
            <Caixa site="www.cfbcursos.com.br">
                <Canal/>
                <p>Curso de React</p>
            </Caixa>
        </>
    );
}