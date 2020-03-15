
document.addEventListener('DOMContentLoaded', function() {



   function renderMovies(movieArray) {
        // Creating a variable with a .map method (methods by default are always functions)
        var moviesHTML = movieArray.map(function(currentMovie) {
        return  `
        <div>
        <img src="${currentMovie.Poster}" width="150"/>
        <h3>${currentMovie.Title}</h3>
        <p>${currentMovie.Year}</p>
        <button onclick="saveToWatchlist('${currentMovie.imdbID}')">Add Movie</button> 
        </div>
        ` 
    
       }).join("")
       return moviesHTML;
    }

     
        //    document.getElementById("moviesContainer").innerHTML = renderMovies(movieData) 
    document.getElementById("search-form").addEventListener('submit', function(e) {
        e.preventDefault();
        var searchString = document.getElementById('search-bar').value 
        axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=2d91e6e4',urlEncodedSearchString)
        .then(function (response) { console.log(response.data)})        
        var urlEncodedSearchString = encodeURIComponent(searchString);
        var movieContainer = document.getElementById("movieContainer")
         return movieContainer.innerHTML = renderMovies(movieData);

        
    }); 
         
    
    
     
     // END OF RENDER MOVIES FUNCTION
   
 

});

function saveToWatchlist(imdbID) {
    var movie = movieData.find(function(currentMovie) {
       return currentMovie.imdbID == imdbID;
    });

 var watchlistJSON = localStorage.getItem('watchlist');
 var watchlist = JSON.parse(watchlistJSON);  
 if (watchlist == null) {
     watchlist = []
 } 
     watchlist.push(movie);
 
 

 watchlistJSON = JSON.stringify(watchlist);
 localStorage.setItem('watchlist', watchlistJSON);
 }; 

 