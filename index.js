let fullMovies = []
const addedMovies = []

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault()

    const inputEl = document.getElementById('search-input').value
    const movieList = document.getElementById('movie-list')
    
     try {
        
        const searchResponse = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(inputEl)}&apikey=f0eeb5ed`)
        const data = await searchResponse.json()

        
        if (data.Response === "False") {
            movieList.innerHTML = `<p>Unable to find what you’re looking for. Please try another search.</p>`
            return
        }

        
        const moviePlaceholder = document.querySelector('.movie')
        if (moviePlaceholder) {
            moviePlaceholder.style.display = 'none'
        }

       const detailedMovieRequests = data.Search.map(async (movie) => {
            const res = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=f0eeb5ed`)
            return res.json()
        })

        

        fullMovies = await Promise.all(detailedMovieRequests)

        
        let moviesHTML = ''
        fullMovies.forEach(fullMovie => {
            moviesHTML += `
                <section class="movie-section">
                    <img src="${fullMovie.Poster !== "N/A" ? fullMovie.Poster : ""}" alt="${fullMovie.Title}">
                    <div class="movie-container">
                        <div class="movie-title">
                            <h3>${fullMovie.Title}</h3>
                            <i class="fa-solid fa-star"></i>
                            <p>${fullMovie.imdbRating}</p>
                        </div>
                        <div class="about-movie">
                            <div class="mobile-about">
                                <p>${fullMovie.Runtime}</p>
                                <p>${fullMovie.Genre}</p>
                            </div>
                            <div class="mobile-watchlist">
                                <i class="fa-solid fa-circle-plus" data-add="${fullMovie.imdbID}"></i>
                                <p>Watchlist</p>
                            </div>
                        </div>
                        <p class="movie-plot">${fullMovie.Plot}</p>
                    </div>
                </section>
            `
        })

        
        movieList.innerHTML = moviesHTML

    } catch (err) {
       
        console.error("An error occurred:", err)
        movieList.innerHTML = `<p>Something went wrong with the network. Please try again.</p>`
    }
})


document.addEventListener('click',function(e){
    if(e.target.dataset.add){
       watchList(e.target.dataset.add) 
    }
})


function watchList(added){
    const addedWatch = fullMovies.find(movie => movie.imdbID === added)
    addedMovies.unshift(addedWatch)
    localStorage.setItem('watchlist', JSON.stringify(addedMovies))
}



   