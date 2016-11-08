/**
 *   @author Meyerson, Gabe (gabemeyerson@gmail.com)
 *   @version 0.0.2
 *   @summary A movie rating booth that can store infinite movies || created: 10.26.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let movies = [];
let avgRating,whichTask, whichMovie;
const MOVIE_TITLE = 0, MOVIE_RATING = 1, TOTAL_RATING = 2, NUM_OF_RATINGS = 3, COLUMNS = 4;

function main() {
    const INFINITE = 0, NO_MOVIES = 0, VIEW = 0, RATE = 1;
    process.stdout.write('\x1Bc'); //Clears the screen
    while (INFINITE === INFINITE){
        if (movies.length > NO_MOVIES){
            setWhichTask(VIEW, RATE);
            if(whichTask === RATE){
                populateMovies();
            } else {
                setWhichMovie();
            }
        } else {
            populateMovies();

        }
    }
}

main();
//@todo

function displayMovieTitles(){
    for(let i = 0; i < movies.length; i++){
        console.log('\n' + i + ' = ' + movies[i][0] + '');
    }
}

function populateMovies() {
    const NO_MOVIES = 0;
    let newTitle;
    if (movies.length != NO_MOVIES){
        console.log('populate movies if');
        displayMovieTitles();
    } else {
        console.log('populatemovies else');
        movies[0] = [];
        for (let i = 0; i < COLUMNS; i++){
            if (i === MOVIE_TITLE){
                movies[0][i] = PROMPT.question('\nPlease enter the new movie title: ');
            } else if (i === MOVIE_RATING){
                movies[0][i] = PROMPT.question('\nPlease enter your rating of ' + movies[0][0] + ': ');
            } else if (i === TOTAL_RATING){
                movies[0][i] = movies[0][1];
            } else { //NUM_OF_RATING
                movies[0][i] = 1
            }
        }
    }
}

function setWhichTask() {
    console.log('top of setwhichtask');
    const VIEW = 0, RATE = 1;
    while (whichTask == null || isNaN(whichTask) || whichTask !== VIEW || whichTask !== RATE){
        console.log('setwhichtask while loop');
        whichTask = PROMPT.question('\nWould you like to view the average rating of a movie or rate a movie?' +
            '\nTo view an average rating type "0"' +
            '\nTo rate a movie type "1"' +
            '\n');
    }
}

function setAvgRating() {
    avgRating = Number(movies[whichMovie][TOTAL_RATING] / movies[whichMovie][NUM_OF_RATINGS]);
}

function setWhichMovie() {
    displayMovieTitles();
    whichMovie = PROPMT.question()
}