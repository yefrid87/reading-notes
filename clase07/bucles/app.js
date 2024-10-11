
   
   
    //pregunta al usuario
    while (true){
    const pregunta = prompt("cuanto es la suma de de 8+6")
if (parseInt(pregunta) ===14){
    break;
}
}
const cantidadDeGatos = prompt("cuantas veces quieres ver al gato");
let contador = 0;
while (contador <parseInt (cantidadDeGatos)){
    document.write("<img src='./imagin/gatos.jpg' width='200'/>");
    document.write("<h4>"+contador+>"</h4>");
    contador +=1;
}