/**
 *   @author Meyerson, Gabe (gabemeyerson@gmail.com)
 *   @version 0.0.2
 *   @summary A movie rating booth that can store infinite movies || created: 10.26.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let movieTitles = [], starRatings = [], totalStarRatings = [], numCounter = [];
let continueResponse;
let movies = [];
function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse();
    while (continueResponse = 1){
        populateMovies();
    }
}

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function populateMovies() {
    process.stdout.write('\x1Bc'); //Clears the screen
    movies[i] = [];
}