
document.addEventListener('DOMContentLoaded', function() {
    localStorage.getItem('watchlist');


     function renderWatchlist(Watchlist) {
        // Creating a variable with a .map method (methods by default are always functions)
        var moviesHTML = Watchlist.map(function(savedMovie) {
           
        return  `
        <div>
        <img src="${savedMovie.Poster}" width="150"/>
        <h3>${savedMovie.Title}</h3>
        <p>${savedMovie.Year}</p>
        </div>
        ` 
    
       }).join("")
       return moviesHTML;
    }

var movies = document.getElementById('moviesContainer');
movies.innerHTML = renderWatchlist(JSON.parse(localStorage.getItem('watchlist')));


})