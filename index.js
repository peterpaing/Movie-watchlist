document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()

    const inputEl = document.getElementById('search-input').value

    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(inputEl)}&apikey=f0eeb5ed`)
        .then(res => res.json())
        .then(data => {

            if (data.Response === "False") {
                document.getElementById('movie-list').innerHTML =
                    `<p>Unable to find what you’re looking for. Please try another search.</p>`
                return
            }

            data.Search.forEach(id => {
                fetch(`https://www.omdbapi.com/?i=${id.imdbID}&apikey=f0eeb5ed`)
                    .then(res => res.json())
                    .then(fullMovie  => {
                        const movieHTML = `
                            <section class="movie-section">
                                <img src="${fullMovie.Poster !== "N/A" ? fullMovie.Poster : ""}" alt="${fullMovie.Title}">
                                <div class="movie-container">
                                <div class="movie-title">
                                <h3>${fullMovie.Title}</h3>
                                <i class="fa-solid fa-star"></i>
                                <p>${fullMovie.imdbRating}</p>
                                </div>
                                <div class="about-movie">
                                <p>${fullMovie.Runtime}</p>
                                <p>${fullMovie.Genre}</p>
                                <i class="fa-solid fa-circle-plus"></i>
                                <p>Watchlist</p>
                                </div>
                                <p class="movie-plot">${fullMovie.Plot}</p>
                                </div>
                            </section>
                        `
                    document.querySelector('.moive').style.display ='none'
                    document.getElementById('movie-list').innerHTML += movieHTML
                    })
            })
        })
        .catch(err => console.error(err))
})

