const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btnAdd=document.querySelector("#btn_copiar")
const btnRemove=document.querySelector("#btn_remover")
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
    })
})

btnAdd.addEventListener("click", ()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})

removeEventListener("click", (btnRemove)=>{
    const cursoSelecionado=[...document.querySelectorAll("selecionado")]
    cursoSelecionado.map((el)=>{
        caixa1.append(el)
    })
})