var nome= (window.prompt('teu nome?'))
const imagem = document.getElementById("imagem1");
         
function changeColor(color) {
    document.body.style.background = color;
}
 
function verdão() {
    changeColor('green');

}       
 
function vermei() {
    changeColor('#c11');
}       

function reset() {
    changeColor('#fff');
    imagem1.src = "la2.png";
}   

function Nome() {
 imagem1.src = "la1.webp";
 window.alert('Nome completo:' + nome);
}       
