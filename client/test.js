import fs from 'fs';


function searchFilms(imdbid) {
  // replace `octocat` with anyone else's GitHub username

  var baseUrl = "http://www.omdbapi.com/?apikey=ab6850df&page=1&i="


  var requestUrl = baseUrl + imdbid

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    });
}

var file = fs.readFileSync('./imdbids.csv','utf8')
const imdbids = file.split('\n');
var randomMovieId = imdbids[Math.floor(Math.random() * imdbids.length)];

var sampleMovie = searchFilms(randomMovieId);

console.log(sampleMovie);
