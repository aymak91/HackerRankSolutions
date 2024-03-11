const axios = require('axios');

async function getMovieList(year) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/moviesdata?Year=<year>
    let res = await axios.get(`https://jsonmock.hackerrank.com/api/moviesdata?Year=${year}`);
    let movies = res.data.data
    let titleArr = [];
    
    for (let movie of movies) {
        titleArr.push(movie.Title)
    }
    
    return titleArr;
}