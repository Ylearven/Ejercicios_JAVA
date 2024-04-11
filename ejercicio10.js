const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let media
  let suma = param.reduce(Function)
  function Function(total, valor) {
    return total + valor
  }
  media = suma / 2
  return media
}
console.log(average(numbers))
