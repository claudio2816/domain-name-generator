let pronombres = ["el","nuestro"];
let adjetivos = ["genial","pequeño"];
let sustantivos = ["jugador", "trabajador"];

// unir pronombre + adjetivo + sustantivo + .com

function estoyAtrasado (pronombres,adjetivos,sustantivos){
  
    let vacio = [];

    pronombres.forEach(pronombre => {
        adjetivos.forEach(adjetivo =>{
            sustantivos.forEach(sustantivo =>{
                return vacio.push(pronombre + adjetivo + sustantivo + ".com ");
             })
         })
         
    });
    console.log(vacio);
    return vacio;
}

console.log(estoyAtrasado(pronombres,adjetivos,sustantivos));
let elemento = document.getElementById("Generador")
elemento.innerHTML =estoyAtrasado(pronombres,adjetivos,sustantivos)

//onClick="vacio";