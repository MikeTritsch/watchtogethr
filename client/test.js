function searchFilms(search_term) {

    var baseUrl = "http://www.omdbapi.com/?apikey=ab6850df&page=1&s="


    var requestUrl = baseUrl + search_term
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

      });
  }

  searchFilms("a");
