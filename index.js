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
                            <div class="movie">
                                <img src="${fullMovie.Poster !== "N/A" ? fullMovie.Poster : ""}" alt="${fullMovie.Title}">
                                <h3>${fullMovie.Title}</h3>
                                <p>${fullMovie.imdbRating}</p>
                                <p>${fullMovie.Runtime}</p>
                                <p>${fullMovie.Plot}</p>
                            </div>
                        `
                    document.getElementById('movie-list').innerHTML += movieHTML
                    })
            })
        })
        .catch(err => console.error(err))
})

