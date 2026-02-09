const isPerfect = (num) => {
        if (num <= 1) return false;
        let sum = 1; // 1 is a proper divisor
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                sum += i;
                if (i !== num / i) {
                    sum += num / i;
                }
            }
        }
        return sum === num;
};


const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
};

module.exports = { isPerfect, quickSort };