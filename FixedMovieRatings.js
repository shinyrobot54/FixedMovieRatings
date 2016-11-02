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
    process.stdout.write('\x1Bc'); //Clears the screen
    movies[i] = [];

}

function setWhichTask() {

}

function setAvgRating() {

}

function setRatingMovieChoice() {

}