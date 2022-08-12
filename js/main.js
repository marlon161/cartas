let root = document.querySelector("#root");

let frutas = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎'];
let frutas2 = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎'];

let frutas_combinadas = frutas.concat(frutas2);

frutas_combinadas.sort(function(){return Math.random() });

function agregar_datos_al_DOM(){
frutas_combinadas.forEach(function(elemento,indice){

let contenedor = document.createElement("div");

contenedor.innerHTML = 
'<div class="carta_atras">' +
'<div class="carta_adelante" id="fruta">' +
 elemento +
'</div>' +
'</div>';

 root.appendChild(contenedor);

    });
}
agregar_datos_al_DOM();

let datos_del_dom = document.querySelectorAll(".carta_atras");

function activar(){
    this.classList.add("activo_parce");
}
datos_del_dom.forEach(function(elemento){
elemento.addEventListener('click', activar);
});