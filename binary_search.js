let recursiveFunction = function (arr, x, start, end) {
    if (start > end) return false;
    let mid=Math.floor((start + end)/2);
    if (arr[mid]===x) return true;
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else
        return recursiveFunction(arr, x, mid+1, end);
}
let arr = [1, 3, 5, 7, 8, 9];
if (recursiveFunction(arr, 6, 0, arr.length-1))
    console.log("Element found!");
else console.log("Element not found!");
