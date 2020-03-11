document.addEventListener('DOMContentLoaded', function() {

    var renderMovies = function renderMovies(movieArray) {
        // Creating a variable with a .map method (methods by default are always functions)
        moviesHTML = movieArray.map(function(currentMovie) {
            
        return  `
        <div>
        <img src="${currentMovie.Poster}" width="150"/>
        <h3>${currentMovie.Title}</h3>
        <p>${currentMovie.Year}</p>
        </div>
        ` 
    
       }).join("")
       return moviesHTML;
    }

       var renderData = function renderData() { 
        //    document.getElementById("moviesContainer").innerHTML = renderMovies(movieData) 
    document.getElementById("myForm").addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById("moviesContainer").innerHTML = renderMovies(movieData);
    })
    } 
         
 
// END OF RENDER MOVIES FUNCTION
renderData();

console.log(moviesHTML)


})
