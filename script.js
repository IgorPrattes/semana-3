document.querySelector('.date').innerHTML = new Date().toLocaleString()


var texto = document.getElementById('title')

function changeText(){
    if(texto.innerHTML ==  'F  a  l  l  e  N'){
        texto.innerHTML =  'O Verdadeiro'
        texto.style.fontSize = '10em'
    } else{
        texto.innerHTML = 'F  a  l  l  e  N'
        texto.style.fontSize = '10em'
    }
}