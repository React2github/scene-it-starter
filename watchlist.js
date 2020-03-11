localStorage.getItem('watchlist');


       var renderData = function renderData() { 
        //    document.getElementById("moviesContainer").innerHTML = renderMovies(movieData) 
    document.getElementById("myForm").addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById("moviesContainer").innerHTML = renderMovies(movieData);
    })} 