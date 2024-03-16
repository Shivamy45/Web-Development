console.log('This is a custom module tutorial');

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

function maxOf(arr2) {
    let ans = 0;
    arr2.forEach(element => {
        if (element > ans) {
            ans = element;
        }
    });
    return ans;
}

// For single export
// module.exports = average;

module.exports = {
    name: 'function exporter',
    avg: average,
    maximum: maxOf,
}