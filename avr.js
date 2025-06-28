function findAverage(array) {
    if (array.length === 0)
    {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    return sum / array.length;;
}
console.log(findAverage([1, 2, 3, 4, 5]));

// second method
function avr(arr)
{
    return arr.length === 0 ? 0 : arr.reduce((a,b)=>a+b)/arr.length;
}
console.log(avr([1,2,3,4,5]));

