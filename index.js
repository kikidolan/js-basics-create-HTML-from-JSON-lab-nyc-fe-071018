document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  console.log(movies)
  
  const titanicButton = document.getElementById('Titanic')
  const terminator2Button = document.getElementById('Terminator 2')
  titanicButton.addEventListener('click', (event) => {
    //do something
  })
  terminatorButton.addEventListener('click',(event) => {
    //do something
  })
});

function updateHTMLContent() {
let title = document.getElementById('title')
let director = document.getElementById('director')
let genre = document.getElementById('genre')
let filmRating = document.getElementById('filmRating')

  title.innerHTML = 'H'
  } 