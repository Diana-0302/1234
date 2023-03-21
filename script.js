const reverse = function (source) {
    if (typeof source === 'string') {
        let newString = "";
        for (let i = source.length - 1; i >= 0; i--) {
            newString += source[i];
        }
        return newString;
    }
    if (typeof source === 'object') {
        let newArray = [];
        for (let i = source.length - 1; i >= 0; i--) {
            newArray[newArray.length] = source[i];
        }
        return newArray;
    }
    else {
        console.log('not an array/not a string');
    }
};

const verifyNumbers = function (source) {
    if (typeof source === 'object') {
        let newArray = [];
        for (let i = 0; i < source.length; i++) {
            let element = source[i];
            if (typeof element === 'number' && element === element) {
                newArray[newArray.length] = source[i];
            }
        }
        return newArray;
    }
    else {
        console.log('not an array');
    }
};

const getMin = function (source) {
    if (typeof source === 'object') {
        let minNumber = source[0];
        for (let i = 1; i < source.length; i++) {
            if (minNumber > source[i]) {
                minNumber = source[i];
            }
        }
        return minNumber;
    }
    else {
        console.log('not an array');
    }
};

const getAverage = function (source) {
    if (typeof source === 'object') {
        let averageNumber = 0;
        for (let i = 0; i < source.length; i++) {
            averageNumber += source[i];
        }
        return averageNumber / source.length;
    }
    else {
        console.log('not an array');
    }
};

const getMaxString = function (source) {
    if (typeof source === 'object') {
        let maxString = source[0];
        for (let i = 1; i < source.length; i++) {
            if (maxString.length < source[i].length) {
                maxString = source[i];
            }
        }
        return maxString;
    }
    else {
        console.log('not an array');
    }
};

const util = {
    reverse: reverse, //util.reverse()
    verifyNumbers: verifyNumbers, //util.verifyNumbers()
    getMin: getMin, //util.getMin()
    getAverage: getAverage, //util.getAverage()
    getMaxString: getMaxString //util.getMaxString()
}