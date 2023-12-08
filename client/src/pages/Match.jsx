import watchBtn from "../assets/images/icons/watch-large.png"
import nopeBtn from "../assets/images/icons/dont-watch-large.png"
import Movie from "../components/Movie"
import { useQuery, useMutation } from '@apollo/client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ADD_MOVIESMALL } from "../utils/mutations";
import { LIKE_MOVIE} from "../utils/mutations";


const Match = () => {

  const [posts, setPosts] = useState([]);
  const [createMovieSmall] = useMutation(ADD_MOVIESMALL);
  const [likeMovie] = useMutation(LIKE_MOVIE)
  let vals = returnRandomMovie();

  let movieUrl = vals[0];
  let imdbID = vals[1]

  useEffect(() => {

    axios.get(movieUrl)
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);


  const handleNope = async (event) => {
    event.preventDefault();

    try {
      location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  const handleWatch = async (event) => {
    event.preventDefault();
    console.log('purple', imdbID)
    try {
      const { data } = await createMovieSmall({ variables: { imdbID: imdbID } });
      console.log('pink', data);

      const { like } = await likeMovie({ variables: { username: imdbID, imdbID: imdbID } });
      console.log('green', like);
    } catch (err) {
      console.error(err);
    }

    console.log('blue', "MovieSmall Added!")
  }

  return (
    <>
      <div className="card-container">
        <div className="card match-card">
          <div>

            <div className="card-image">
            <img src={posts.Poster} className="card-img-top" alt="..." />
          </div>
            <Movie 
              title={posts.Title}
              plot={posts.Plot}
              genre={posts.Genre}
              year={posts.Year}
              actors={posts.Actors}
            />

          </div>

        </div>
      </div>
      <div className="gap-5 yes-no-container">
        <div className="no-watch-btn">
          <button className="nope-btn">
            <img src={nopeBtn} onClick={handleNope}></img>
          </button>
        </div>
        <div className="watch-btn">
          <button className="yes-btn">
            <img src={watchBtn} onClick={handleWatch}></img>
          </button>
        </div>
      </div>
    </>
  )
}

export default Match;



let sampleMovieIds = ["tt0111161",
"tt0468569",
"tt1375666",
"tt0137523",
"tt0944947",
"tt0109830",
"tt0110912",
"tt0903747",
"tt0816692",
"tt0133093",
"tt0068646",
"tt0120737",
"tt0167260",
"tt1345836",
"tt0114369",
"tt0167261",
"tt1853728",
"tt0172495",
"tt0372784",
"tt0361748",
"tt0993846",
"tt0102926",
"tt0120815",
"tt0848228",
"tt7286456",
"tt0076759",
"tt0108052",
"tt1130884",
"tt0482571",
"tt0407887",
"tt0120689",
"tt0499549",
"tt0080684",
"tt0071562",
"tt0209144",
"tt4574334",
"tt0088763",
"tt0120338",
"tt2015381",
"tt4154796",
"tt0099685",
"tt0110413",
"tt0169547",
"tt0325980",
"tt0910970",
"tt4154756",
"tt0266697",
"tt0120586",
"tt0434409",
"tt0120382",
"tt0103064",
"tt0114814",
"tt0110357",
"tt0371746",
"tt0086190",
"tt1049413",
"tt1431045",
"tt0266543",
"tt0081505",
"tt0112573",
"tt0105236",
"tt0264464",
"tt0108778",
"tt1392190",
"tt1520211",
"tt0338013",
"tt0073486",
"tt0114709",
"tt0107290",
"tt2267998",
"tt0477348",
"tt0119217",
"tt0167404",
"tt0082971",
"tt1392170",
"tt1475582",
"tt0268978",
"tt2488496",
"tt0198781",
"tt2582802",
"tt0078748",
"tt1201607",
"tt0095016",
"tt1675434",
"tt6751668",
"tt0088247",
"tt2395427",
"tt3659388",
"tt0075314",
"tt0086250",
"tt0208092",
"tt0253474",
"tt0800369",
"tt1300854",
"tt1843866",
"tt0458339",
"tt0180093",
"tt0435761",
"tt1010048",
"tt2278388",
"tt0066921",
"tt0145487",
"tt0903624",
"tt1228705",
"tt1663202",
"tt1454468",
"tt0416449",
"tt0898266",
"tt10872600",
"tt0118715",
"tt0050083",
"tt0120915",
"tt0246578",
"tt0241527",
"tt3498820",
"tt7366338",
"tt0121766",
"tt1119646",
"tt1825683",
"tt0245429",
"tt7131622",
"tt3315342",
"tt2084970",
"tt0083658",
"tt0947798",
"tt1205489",
"tt0770828",
"tt3501632",
"tt0382932",
"tt0480249",
"tt0097576",
"tt0060196",
"tt0378194",
"tt1211837",
"tt0317705",
"tt0317248",
"tt0401792",
"tt0211915",
"tt0892769",
"tt1392214",
"tt0093058",
"tt2096673",
"tt0383574",
"tt0773262",
"tt0090605",
"tt8946378",
"tt1877830",
"tt2543164",
"tt0121765",
"tt1285016",
"tt2975590",
"tt3896198",
"tt1877832",
"tt1045658",
"tt1160419",
"tt2024544",
"tt0118799",
"tt1074638",
"tt2911666",
"tt1631867",
"tt5013056",
"tt0126029",
"tt0460649",
"tt1270798",
"tt0117951",
"tt1981115",
"tt1386697",
"tt0405159",
"tt0116282",
"tt0478970",
"tt1136608",
"tt0054215",
"tt0062622",
"tt0816711",
"tt1951264",
"tt2250912",
"tt2802144",
"tt0113277",
"tt1504320",
"tt0078788",
"tt1670345",
"tt0457430",
"tt0316654",
"tt1170358",
"tt0948470",
"tt0780504",
"tt0451279",
"tt0144084",
"tt0381061",
"tt0421715",
"tt0449088",
"tt0386676",
"tt0295297",
"tt0304141",
"tt3748528",
"tt5052448",
"tt0369610",
"tt0107048",
"tt0418279",
"tt0330373",
"tt2527336",
"tt0988045",
"tt0454876",
"tt2562232",
"tt1798709",
"tt2294629",
"tt8579674",
"tt0440963",
"tt0758758",
"tt0073195",
"tt1745960",
"tt3460252",
"tt4633694",
"tt3783958",
"tt1637725",
"tt0114746",
"tt0120903",
"tt1856101",
"tt1446714",
"tt1024648",
"tt0469494",
"tt5463162",
"tt0162222",
"tt0413300",
"tt0936501",
"tt0099785",
"tt2085059",
"tt0234215",
"tt2442560",
"tt3032476",
"tt0829482",
"tt0364569",
"tt0373889",
"tt2356777",
"tt0796366",
"tt0075148",
"tt1156398",
"tt0120363",
"tt1190634",
"tt0120735",
"tt0240772",
"tt0119488",
"tt0332280",
"tt1219289",
"tt0119654",
"tt4154664",
"tt0116629",
"tt0034583",
"tt1276104",
"tt1396484",
"tt3890160",
"tt2872718",
"tt1232829",
"tt1250777",
"tt0926084",
"tt0365748",
"tt0443706",
"tt1343092",
"tt0417741",
"tt2861424",
"tt11286314",
"tt0450259",
"tt2119532",
"tt0181689",
"tt1727824",
"tt0470752",
"tt0409459",
"tt1323594",
"tt10811166",
"tt6723592",
"tt0290334",
"tt6644200",
"tt8111088",
"tt0258463",
"tt0455275",
"tt2306299",
"tt2380307",
"tt0343818",
"tt0071853",
"tt0096874",
"tt0332452",
"tt2310332",
"tt5180504",
"tt1298650",
"tt0112641",
"tt1570728",
"tt1318514",
"tt0454921",
"tt1483013",
"tt1022603",
"tt6966692",
"tt1457767",
"tt0467406",
"tt5027774",
"tt0945513",
"tt6320628",
"tt1659337",
"tt0095953",
"tt4972582",
"tt0242653",
"tt15398776",
"tt0376994",
"tt2948356",
"tt2713180",
"tt0097165",
"tt1872181",
"tt0425112",
"tt0356910",
"tt0087469",
"tt1411697",
"tt1270797",
"tt0475784",
"tt2872732",
"tt1856010",
"tt0458525",
"tt10048342",
"tt1663662",
"tt0206634",
"tt1229238",
"tt2179136",
"tt0800080",
"tt0099487",
"tt6468322",
"tt0289879",
"tt10919420",
"tt0047396",
"tt0314331",
"tt0367594",
"tt0790636",
"tt0057012",
"tt0449059",
"tt0268380",
"tt0185906",
"tt1477834",
"tt0448157",
"tt0441773",
"tt1979320"]

function returnRandomMovie() {

  let baseUrl = "http://www.omdbapi.com/?apikey=ab6850df&page=1&i="
  let sampleMovie = sampleMovieIds[Math.floor(Math.random()*sampleMovieIds.length)];
  let movieUrl = baseUrl + sampleMovie
  
  return [movieUrl, sampleMovie]

}
