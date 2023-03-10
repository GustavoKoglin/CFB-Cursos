import React from 'react'

export default function App(){

    const carros=[
        {categoria: "Esporte|Utilitário", marca: 'Honda', preco:"95000.00"},
        {categoria: "Esporte", marca: 'Hiundai', preco:"112000.00"},
        {categoria: "Esporte", marca: 'Volkswagen', preco:"80000.00"},
        {categoria: "Popular|Utilitário", marca: "Fiat", preco: "45000.00"},
        {categoria: "Popular", marca: 'Renaut', preco:"50000.00"},
        {categoria: "Popular|Utilitário", marca: 'Chevrolet', preco: "135000.00"},
        {categoria: "Esporte|Importado", marca:  'Ferrari', preco:"4000000.00"} ,
        {categoria: "Esporte|Importado", marca: 'BMW', preco:"800000.00" },
        {categoria: "Esporte|Importado", marca: 'Mercedes Bens', preco:"400000.00"},
        {categoria: "Suv", marca: 'Volvo', preco:"280000.00"},
        {categoria: "Esporte|Importado", marca: 'Audi', preco:"350000.00" },
        {categoria: "Popular", marca: 'Kia', preco:"38000.00" },
        {categoria: "Importado", marca: 'Land Rover', preco:"340000.00"},
        {categoria: "Esporte|Importado", marca: 'Porsche', preco:"670000.00" },
        {categoria: "Esporte|Importado", marca: 'Suzuki', preco:"740000.00" },
        {categoria: "Importado", marca: 'Troller', preco:"297000.00"},
        {categoria: "Importado", marca: 'Mini', preco:"190000.00" },
        {categoria: "Esporte|Importado", marca: 'Jaguar', preco:"360000.00"},
        {categoria: "Importado", marca: 'Jac', preco:"139000.00"},
        {categoria: "Esporte|Importado", marca: 'Tesla', preco:"395000.00"},
    ]

    const listaCarros=carros.map(
        (c,i)=>
            <li key={i}>{i} - {c.categoria} - {c.marca} - US$ {c.preco}</li>
        
    )

    return(
        <>
            <ul>{listaCarros}</ul>
        </>
    )
}