var myContent = document.getElementById("content");
var searching = document.querySelector("[type = 'text']");

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2FlNzI4MGYwMTlmY2EzOTlmNTYxZTExMGIyMDQ2MSIsInN1YiI6IjY1MzdmMjJmNDFhYWM0MDBlMDQwNDc3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.89HilZNaKgftWGR30MjInrSH0iE4Sm1uOBAXjbkTeig'
    }
  };

function getMovies (category) {
  
  fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => {
        var arr = response.results;
        myContent.innerHTML = '';
         arr.forEach(element => {
             myContent.innerHTML += `

             <div class="Movie">
             <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" >
             <div class="description">
                 <div class="coo-description">
                     <h3>${element.title}</h3>
                     <p class="paragraph">${element.overview}</p>
                     <p>Rate: ${element.vote_average}</p>
                     <p>Date: ${element.release_date}</p>
                 </div>
             </div>
         </div>            
      
             `
         });
         
    })

}

window.onload = function () {
    getMovies('now_playing');
}


searching.addEventListener("keyup" , function () {

    var key = searching.value;
    fetch(`https://api.themoviedb.org/3/search/movie?query=${key}&include_adult=false&language=en-US&page=1`, options)
   .then(response => response.json())
   .then(response => {
    var arr = response.results;
    myContent.innerHTML = '';
     arr.forEach(element => {
         myContent.innerHTML += `
         <div class="Movie">
         <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" >
            <div class="description">
               <div class="coo-description">
                  <h3>${element.title}</h3>
                  <p class="paragraph">${element.overview}</p>
                  <p>Rate: ${element.vote_average}</p>
                  <p>Date: ${element.release_date}</p>
               </div>
             </div>
         </div>            
  
         `
     });

   })

});


 