const savedEl = document.getElementById('saved')
const storedMovies = JSON.parse(localStorage.getItem('watchlist')) || []

let savedMovies = ''

storedMovies.forEach((movie,index) => {
    savedMovies += `
        <section class="movie-section">
            <img src="${movie.Poster !== "N/A" ? movie.Poster : ""}" alt="${movie.Title}">
            <div class="movie-container">
                <div class="movie-title">
                    <h3>${movie.Title}</h3>
                    <i class="fa-solid fa-star"></i>
                    <p>${movie.imdbRating}</p>
                </div>
                <div class="about-movie">
                    <div class="mobile-about">
                        <p>${movie.Runtime}</p>
                        <p>${movie.Genre}</p>
                    </div>
                    <div class="mobile-watchlist">
                        <i class="fa-solid fa-circle-minus" data-remove="${index}"></i>
                        <p>Remove</p>
                    </div>
                </div>
                <p class="movie-plot">${movie.Plot}</p>
            </div>
        </section>
    `
})

savedEl.innerHTML = savedMovies

document.addEventListener('click',function(e){
    if(e.target.dataset.remove !== undefined){
        removeMovie(e.target.dataset.remove)
    }
})

function removeMovie(index) {
    storedMovies.splice(index, 1)
    localStorage.setItem('watchlist', JSON.stringify(storedMovies))
    location.reload()
}
