 //Modelo Composicional

 function obterLinkPerfil(username){
    return 'https://github.com' + username
 }

 function obterImagenPerfil (username){
    return 'https://github.com' + username +'.png?size=150'
 }
 function obterDadosPerfil(username){
    return {
        imagem: obterImagenPerfil(username),
        link: obterLinkPerfil(username)
    }
 }


 function obterDadosPerfil(username){
    return{
        imagem:'https://github.com' + username '.png?size=150',
        link:'https://github.com/' + username
    }
 }


//Natureza Declarativa
 const pessoa = ['Bruno','Josiane', 'Theo']
 const pessoaCopia = []

 for(let i=0; i<pessoa.length; i++){
    pessoaCopia[i] + '2'
 }
    
 //Código Declarativo

 const pessoa= ['Bruno','Josiane', 'Theo']
 const pessoaCopia = pessoa.map(nome => nome +'2')

 