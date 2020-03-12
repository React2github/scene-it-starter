localStorage.getItem('watchlist');

document.addEventListener('DOMContentLoaded', function() {
    var saveToWatchlist = function saveToWatchlist(imdbID) {
        var movie = movieData.find(function(currentMovie) {
           return currentMovie.imdbID == imdbID;
        });

     var watchlistJSON = localStorage.getItem('watchlist');
     var watchlist = JSON.parse(watchlistJSON);  
     if (watchlist === null)
     return []; 

     watchlist.push(movie);
     watchlistJSON = JSON.stringify(watchlist);
     localStorage.setItem('watchlist', watchlistJSON);
     }; 

    var renderMovies = function renderMovies(movieArray) {
        // Creating a variable with a .map method (methods by default are always functions)
        moviesHTML = movieArray.map(function(currentMovie) {
           
        return  `
        <div>
        <img src="${currentMovie.Poster}" width="150"/>
        <h3>${currentMovie.Title}</h3>
        <p>${currentMovie.Year}</p>
        <button onclick="saveToWatchlist(${currentMovie.imdbID})">Add Movie</button> 
        </div>
        ` 
    
       }).join("")
       return moviesHTML;
    }

    var renderData = function renderData() { 
        //    document.getElementById("moviesContainer").innerHTML = renderMovies(movieData) 
    document.getElementById("myForm").addEventListener('submit', function(e) {
        e.preventDefault();
        for (var i =0; i < 3; i++) {
        document.getElementsByClassName("movie")[i].innerHTML = renderMovies(localStorage.getItem('watchlist'));
        }; 
        
    })}
    console.log(moviesHTML)
    saveToWatchlist += renderData(); 
    return renderData(); 
})