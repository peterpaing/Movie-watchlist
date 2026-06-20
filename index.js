document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()

    const inputEl = document.getElementById('search-input').value

    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(inputEl)}&apikey=f0eeb5ed`)
        .then(res => res.json())
        .then(data => console.log(data))
})
