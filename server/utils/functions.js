const imdbids = ['tt0076759', 'tt0816692', 'tt0145487']
var randomMovieId = imdbids[Math.floor(Math.random() * imdbids.length)];
var baseUrl = "http://www.omdbapi.com/?apikey=ab6850df&page=1&i="
var a = baseUrl + randomMovieId

getdata = () =>
  fetch(a).then(response => {
    if (response.status === 200) {
      return response.json();
    }
      else {
        throw new Error("asidfhasfhadf");
      }
  });

function printData(data) {
  return data
}


getdata().then(data => {
  printData(data);
})


var data = printData();

console.log(Data);