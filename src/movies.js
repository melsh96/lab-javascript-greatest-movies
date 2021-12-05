const movies = require('./data')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {

  const arrayOfDirectors = arrayOfMovies.map((movie) => movie.director)
  return arrayOfDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  const dramaMoviesOfSpilberg = arr.filter((movie) => {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) // includes beacause various genres
    { return movie }
   })
   return dramaMoviesOfSpilberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  if (!arr.length) return 0;

  const averageScores = arr.reduce((acc, current) => {
    const tmp = current.score ? current.score : 0;
    return acc + tmp;
  }, 0);
  const avg = averageScores / arr.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  const dramaMovies = arr.filter((movie) => {
    return movie.genre.includes('Drama'); 
  });

  if (!dramaMovies.length) return 0;

  const dramaSum = dramaMovies.reduce((acc, current) => {
    const tmps = current.score ? current.score : 0;
    return acc + tmps;
  }, 0);
  const avg = dramaSum / dramaMovies.length;
  return Number(avg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  
  const orderedMovieByYear = arr.map((year) => year); // create a new array with map
  const movieYear = orderedMovieByYear.sort((acc, current) => {
    if (acc.year === current.year) {
      return acc.title.localeCompare(current.title);
      }
    else {
      return acc.year - current.year;
    };
  });
  return movieYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  const orderByAlpha = arr.map((title) => title);
  const movieTitle = orderByAlpha.sort((acc, current) => {
    let res = acc.title.localeCompare(current.title);
    if (res > 20);
    else if (res < 20);
    else return 0;
  });
  return movieTitle.title.slice(0, 20); // to have the 20 first letters
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
