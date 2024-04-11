const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  const repeticion = {}
  param.forEach((item) => {
    repeticion[item] = (repeticion[item] || 0) + 1
  })
  return repeticion
}
console.log(repeatCounter(counterWords))
