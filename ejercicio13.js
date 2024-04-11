const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, nombre) {
  array.includes(nombre)
  if (array.includes(nombre) == true) {
    return {
      incuida: true,
      posicion: array.indexOf(nombre)
    }
  } else {
    return {
      incluida: false
    }
  }
}
console.log(finderName(nameFinder, 'Paco'))
