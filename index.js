document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const inputEl = document.getElementById('search-input').value;

    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(inputEl)}&apikey=f0eeb5ed`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.Response === "False") {
                document.getElementById('movie-list').innerHTML =
                    `<p>No results found</p>`
                return
            }

            const movieList = data.Search.map(movie => {
                return `
                    <div class="movie">
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <div class="movie-details">
                            <h3>${movie.Title}</h3>
                            <div class="about-movie">
                                <p>${movie.Year}</p>
                                <i class="fa-solid fa-circle-plus"></i>
                                <p>Watchlist</p>
                            </div>
                        </div>
                    </div>
                `
            }).join('')

            document.getElementById('movie-list').innerHTML = movieList
        })
        .catch(err => {
            console.error(err)
        })
})