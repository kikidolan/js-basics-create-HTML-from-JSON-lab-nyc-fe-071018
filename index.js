document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  updateHTMLContent('Titanic')
  const titanicButton = document.getElementById('Titanic')
  const terminatorButton = document.getElementById('Terminator 2')
  titanicButton.addEventListener('click', (event) => {
    //do something
    updateHTMLContent('Titanic')
     
  })
  terminatorButton.addEventListener('click',(event) => {
    //do something
    updateHTMLContent('Terminator 2')
  })
});

function updateHTMLContent(movieName) {
  let title = document.getElementById('title')
  let director = document.getElementById('director')
  let genre = document.getElementById('genre')
  let filmRating = document.getElementById('filmRating')
  let poster = document.getElementById('poster')
  let description = document.getElementById('description')
  let audienceScore = document.getElementById('audienceScore')
  let currentMovie = movies[movieName]
  let cast = document.getElementById('cast')
  let reviews = document.getElementById("reviews")

  title.innerHTML = currentMovie.title
  director.innerHTML = currentMovie.director
  genre.innerHTML = currentMovie.genre
  filmRating.innerHTML = currentMovie.filmRating
  poster.setAttribute('src', currentMovie.poster)
  description.innerHTML = currentMovie.description
  audienceScore.innerHTML = currentMovie.audienceScore
  let castInnerHTML = "<ul>"
  let reviewInnerHTML = "<div>"
  
  for (let i = 0; i < currentMovie.cast.length; i++) {
    let role = currentMovie.cast[i].role
    let actor = currentMovie.cast[i].actor
    castInnerHTML += ("<li>" + role + ":" + actor +"</li>")
  }
  castInnerHTML += "</ul>"
  cast.innerHTML = castInnerHTML
  
  for (let review of currentMovie.reviews) {
    let userName = review.userName
    let content = review.content
    reviewInnerHTML += ("<p>" + username + ":" + content + "<p>")
  }

reviewInnerHTML += "</div>"
reviews.innerHTML = reviewInnerHTML
}
  