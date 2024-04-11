const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  const sinDuplicates = param.filter((item, index) => {
    return param.indexOf(item) === index
  })
  return sinDuplicates
}
console.log(removeDuplicates(duplicates))
