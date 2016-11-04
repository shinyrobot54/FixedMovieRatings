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
    const MOVIE_TITLE = 0, MOVIE_RATING = 1, TOTAL_RATING = 2, NUM_OF_RATINGS = 3, COLUMNS = 4;
    
}

function setWhichTask() {
    const VIEW = 0, RATE = 1;
    while (typeof whichTask == null || isNan(whichTask) || whichTask !== VIEW || whichTask !== RATE){
        whichTask = PROMPT.question('\nWould you like to view the average rating of a movie or rate a movie?\nTo view an average rating type "0"\nTo rate a movie type "1"');
    }
}

function setAvgRating() {
    avgRating =
}

function setMovieChoice() {

}