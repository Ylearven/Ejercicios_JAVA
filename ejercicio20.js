const popularToys = []
const toys = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 }
]
for (const juguete of toys) {
  if (juguete.sellCount >= 15) {
    popularToys.push(juguete)
  }
}
console.log(popularToys)
/* for (let i = 0; i < toys.length; i++) {
  if (toys[i].sellCount >= 15) {
    popularToys.push(toys[i])
  }
}
console.log(popularToys) */
