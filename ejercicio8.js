const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let palabra = ''
  for (let i = 0; i < param.length; i++) {
    if (param[i].length > palabra.length) {
      palabra = param[i]
    }
  }
  return palabra
}
console.log(findLongestWord(avengers))
