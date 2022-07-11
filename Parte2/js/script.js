

/*
  Desarrolla la lógica para convertir los valores del textArea en minusculas: 

  Tip: Divide el problema en partes pequeñas. 

  1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
  2) Parte los valores por la coma (,). TIP. Utiliza la función split
  3) convierte los valores a minuscula con alguna de las funciones de javascript. 
  4) Escribe en el textArea los nuevos valores

  Realiza todo lo anterior al hacer click en el botón. 
*/

let convertToLowerCase_btn = document.getElementById("btn_mayusculas").addEventListener("click", convertToLowerCase)

// SOLUCION 1 (PARA MI ES LA MAS SENCILLA) //
/*
function convertToLowerCase(e) {
  e.preventDefault()
  let textArea_values = document.getElementById("txt_may").value
  textArea_values = textArea_values.toLowerCase()
  document.getElementById("txt_may").value = textArea_values
} */

// SOLUCION 2 (MAS COMPLEJA, PERO DIVIDE AL PROBLEMA EN PARTES PEQUEÑAS)
function convertToLowerCase(e) {
  e.preventDefault()
  // 1) Recuperar valores
  let textArea_values = document.getElementById("txt_may").value

  // 2) Dividirlos utilizando la funcion split
  let textArea_values_array = textArea_values.split(',')
  
  // 3-4) Convertir cada uno de los valores a minuscula e irlos añadiendo al textArea
  document.getElementById("txt_may").value = ""
  textArea_values_array.forEach(element => document.getElementById("txt_may").value += element.toLowerCase() + ",")
    
  // Eliminar la ',' extra
  document.getElementById("txt_may").value = document.getElementById("txt_may").value.slice(0, -1)
}


/*
  Crea una funcion llamada "calculateDogAge" que: 

- reciba como argumento un número representando la edad en años humanos.
- realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
- Deberá escribir en valor convertido. 
- Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
- Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
      Deberás convertir el string a Entero. 

*/

let convertToDogAge_btn = document.getElementById("btn_añoshumano").addEventListener("click", convertToDogAge_action)

function convertToDogAge_action(e) {
  e.preventDefault()
  let human_age = parseInt(document.getElementById("edad_humano").value)
  calculateDogAge(human_age)
}

// Funcion llamada "calculateDogAge" que recibe como argumento la edad en años humanos
function calculateDogAge(human_age) {
  document.getElementById("edad_perro").value = human_age*7
}

/*  OBJETOS 

A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros

1) Nombre
2) Especie
3) Ataque
4) Defensa


B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
  Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
  El Nombre y la Especie son Strings, Ataque y Defensa numericos.
  
  Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

*/

class Pokemon {
  constructor(nombre, especie, ataque, defensa) {
    this.nombre = nombre
    this.especie = especie
    this.ataque = ataque
    this.defensa = defensa
  }
}

let pokemon1 = new Pokemon("Wilson", "Dragón", 115, 110)
let pokemon2 = new Pokemon("Lucas", "Agua", 150, 75)

let showPokemon_btn = document.getElementById("btn_muestra").addEventListener("click", showPokemon)

function showPokemon(e) {
  e.preventDefault()
  document.getElementById("nombre_poke1").value = pokemon1.nombre
  document.getElementById("especie_poke1").value = pokemon1.especie
  document.getElementById("ataque_poke1").value = pokemon1.ataque
  document.getElementById("defensa_poke1").value = pokemon1.defensa
  
  document.getElementById("nombre_poke2").value = pokemon2.nombre
  document.getElementById("especie_poke2").value = pokemon2.especie
  document.getElementById("ataque_poke2").value = pokemon2.ataque
  document.getElementById("defensa_poke2").value = pokemon2.defensa
}
