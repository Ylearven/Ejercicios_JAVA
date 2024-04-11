//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
let h = avengers.at(0)
console.log(h)

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = 'IRONMAN'
console.log(avengers)

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
let num = avengers.length
console.log(num)

//1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
let cant = rickAndMortyCharacters.length
console.log(cant)
console.log(rickAndMortyCharacters.at(4))

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters2.pop()
console.log(rickAndMortyCharacters2)
console.log(rickAndMortyCharacters.at(0), rickAndMortyCharacters2.at(4))

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters3.splice(1, 1) // No deja espacio
//delete rickAndMortyCharacters3[1]  --> Deja el espacio
console.log(rickAndMortyCharacters3)
