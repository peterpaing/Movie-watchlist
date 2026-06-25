# 🎬 Movie Scout

Movie Scout is a simple web application that allows users to search for movies and build a personal watchlist. It uses the OMDb API to fetch movie data and stores selected movies in the browser’s local storage.

---

## 🚀 Features

* 🔍 Search for movies using the OMDb API
* 🎞️ View movie details (poster, rating, runtime, genre, plot)
* ➕ Add movies to a personal watchlist
* ❌ Remove movies from watchlist
* 💾 Persistent storage using `localStorage`
* 📱 Responsive design for mobile and desktop

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* OMDb API
* Font Awesome Icons

---

## 📂 Project Structure

```
/project-folder
│
├── index.html        # Movie search page
├── watchlist.html    # Saved watchlist page
├── style.css         # Styling for both pages
├── index.js          # Search + add to watchlist logic
├── watchlist.js      # Display + remove watchlist logic
```

---

## 🔑 API Setup

This project uses the OMDb API.

Example request:

```
https://www.omdbapi.com/?s=movieName&apikey=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your own OMDb API key.

---

## ▶️ How to Run

1. Clone or download the project
2. Open `index.html` in your browser
3. Search for movies and start building your watchlist

---

## 💡 Future Improvements

* Prevent duplicate movies in watchlist
* Add loading animation while fetching data
* Improve UI with modal movie details
* Remove page reload after deleting movies
* Add dark/light theme toggle

---

## 👨‍💻 Author

Created by **Peter Paing**

---

## 📜 License

This project is open source and free to use for learning purposes.
