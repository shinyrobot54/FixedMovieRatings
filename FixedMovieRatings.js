/**
 *   @author Meyerson, Gabe (gabemeyerson@gmail.com)
 *   @version 0.0.2
 *   @summary A movie rating booth that can store infinite movies || created: 10.26.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let movies = [];
let avgRating,whichTask, movieChoice;

function main() {
    const INFINITE = 0, NO_MOVIES = 1
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse();
    while (INFINITE = INFINITE){
        if (movies.length < NO_MOVIES){
            populateMovies();
        } else {
            setWhichTask();

        }
    }
}

function populateMovies() {
    const NO_MOVIES = 0, MOVIE_TITLE = 0, MOVIE_RATING = 1, TOTAL_RATING = 2, NUM_OF_RATINGS = 3, COLUMNS = 4;
    if (movies.length != NO_MOVIES){
        for(let i = 0; i < movies.length; i++){
            

        }
    } else {
        movies[0] = [];
        for (let i = 0; i < COLUMNS; i++){
            if (i === MOVIE_TITLE){
                movies[0][i] = PROMPT.question('\nPlease enter the new movie title');
            } else if (i === MOVIE_RATING){
                movies[0][i] = PROMPT.question('\nPlease enter your rating of ${movies[0][0]}');
            } else if (i === TOTAL_RATING){
                movies[0][i] = movies[0][1];
            } else { //NUM_OF_RATING
                movies[0][i] = 1
            }
        }
    }
}

function setWhichTask() {
    const VIEW = 0, RATE = 1;
    while (typeof whichTask == null || isNan(whichTask) || whichTask !== VIEW || whichTask !== RATE){
        whichTask = PROMPT.question('\nWould you like to view the average rating of a movie or rate a movie?\nTo view an average rating type "0"\nTo rate a movie type "1"');
    }
}

function setAvgRating() {
    
}

function setMovieChoice() {

}