const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Corto', durationInMinutes: 90 }
]
const sMovie = []
const mMovie = []
const lMovie = []
for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    sMovie.push(movies[i])
  } else if (
    movies[i].durationInMinutes >= 100 &&
    movies[i].durationInMinutes < 200
  ) {
    mMovie.push(movies[i])
  } else {
    lMovie.push(movies[i])
  }
}
console.log(sMovie)
console.log(mMovie)
console.log(lMovie)
