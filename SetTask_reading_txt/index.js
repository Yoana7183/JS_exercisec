const { readFileSync, promises: fsPromises } = require('fs');
const setValue = new Set

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(' ');
    let uniqueValue;
    for (let i = 0; i < arr.length; i++) {
        uniqueValue = arr[i]
        setValue.add(uniqueValue)
    }

    return arr;
}

syncReadFile('./text.txt');
console.log(setValue);