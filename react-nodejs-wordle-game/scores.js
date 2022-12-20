//scores.js is for the next step functions - add leaderboard shows the top3 highest scores list
//To keep code clean, other score-related code is deleted temporarily from corresponding files.

function binaryIntertScore(arr, element) {
    const len = arr.length;
    const name = element.name;
    element = element.score;

    if (len === 0) {
        arr.push(element);
        return;
    } 

    if (len === 1) {
      if (element > arr[0]) {
        arr.push(element);
      } else {
        arr.unshift(element);
      }
      return;
    }

    if (len === 3 && element < arr[0]) {
        return;
    }

    arr.sort(function(a, b) {
        return parseFloat(a.score) - parseFloat(b.score);
    });

    return binaryHelper(arr, element, 0, arr.length - 1, name);
}

function binaryHelper(arr, element, lBound, uBound, name) {
    // element = element.score;
    const userAndScore = {name: name, score: element};
    if (uBound - lBound === 1) {
        // binary search ends, we need to insert the element around here       
        if (element < arr[lBound]) {
            arr.splice(lBound, 0, userAndScore);
        }
        else if (element > arr[uBound]) {
            arr.splice(uBound+1, 0, userAndScore);
        }
        else {
            arr.splice(uBound, 0, userAndScore);
        }
    } else {       
        // we look for the middle point
        const midPoint = Math.floor((uBound - lBound) / 2) + lBound;
        // depending on the value in the middle, we repeat the operation only on one slice of the array, halving it each time
        element < arr[midPoint]
            ? binaryHelper(arr, element, lBound, midPoint, name)
            : binaryHelper(arr, element, midPoint, uBound, name);
    }
}

function getTopThree(arr) {
    if (arr.length < 3) {
        return arr;
    }

    const last3 = arr.slice(-3);
    last3.sort(function(a, b) {
        return parseFloat(b.score) - parseFloat(a.score);
    });
    return last3;
}

module.exports = {
    binaryIntertScore,
    getTopThree,
};