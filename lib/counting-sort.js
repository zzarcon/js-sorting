/**
 * @module lib/counting-sort
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Sorts an array using counting sort.
 * @param {Array} array The array to sort.
 * @param {number} maxValue The max value for the counting sort.
 */
function sort(array, maxValue) {
  var buckets = new Array(maxValue + 1);
  var sortedIndex = 0;
  var i;

  for (i = 0; i < array.length; i++) {
    if (!buckets[array[i]]) {
      buckets[array[i]] = 0;
    }
    buckets[array[i]]++;
  }

  for (i = 0; i < buckets.length; i++) {
    while (buckets[i] > 0) {
      array[sortedIndex++] = i;
      buckets[i]--;
    }
  }

  return array;
}

/**
 * Sorts an array using counting sort.
 * @param {Array} array The array to sort.
 * @param {Object} maxValue The max value in the array.
 * @returns The sorted array.
 */
module.exports = sort;
