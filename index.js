/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
    function getAllMovieTitles(movies) {
      let titlesArr = [];
      for (let movie of movies) {
        titlesArr.push(movie.title);
      }
      return titlesArr;
    }

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
 function getHighestMetascore(movies) {
  let highestMetascore = 0;
  for(let movie of movies) {
    if (+movie.metascore > highestMetascore){
      highestMetascore = +movie.metascore;
    }
  }
  return highestMetascore;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
 function getAverageIMDBRating(movies) {
  let averageImdbRating = 0;
  for (let i=0; i<movies.length; i++) {
    averageImdbRating += Number(movies[i].imdbRating);
    if (i === movies.length-1) {
      averageImdbRating /= movies.length;
    }
  }
  return averageImdbRating;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
 function countByRating(movies) {
  let ratedObj = {};
  for(let movie of movies) {
    if (ratedObj[movie.rated]) {
      ratedObj[movie.rated] += 1;
    } else {
      ratedObj[movie.rated] = 1
    }
  }
  return ratedObj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
    function findById(movies, id) {
      for(let movie of movies){
        if(movie.imdbID === id) {
          return movie; 
        } 
      }
      return null;
    }

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
    function filterByGenre(movies, genre) {
      let sameGenreArr = [];
      for (let movie of movies) {
        if(movie.genre.toLowerCase().includes(genre.toLowerCase())) {
          sameGenreArr.push(movie);
        }
      }
      return sameGenreArr;
    }

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
    function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
      let givenPeriodMoviesArr = [];
      for (let movie of movies) {
        if (Number(movie.released.split(" ")[2]) <= year) {
          givenPeriodMoviesArr.push(movie);
        }
      }
      return givenPeriodMoviesArr;
    }

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
 function getBiggestBoxOfficeMovie(movies) {
  let assumedAmount=0;
  let highestmovieName = "";
  for (let i=0; i<movies.length; i++) {
    let totalInStringArr = movies[i].boxOffice.split("");
    totalInStringArr.shift();
    let total = totalInStringArr.join("");
    total = Number(total.split(",").join(""));
    if(total > assumedAmount) {
      assumedAmount = total;
      highestmovieName = movies[i].title;
    }
  }
  return !movies.length? null:highestmovieName;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
