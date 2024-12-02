// Determine if a given array contains a subarray of at least two elements whose sum is a multiple of a specified number k.

// An array is considered to have a "good subarray" if there exists at least one subarray (consisting of two or more elements) such that the sum of the elements in this subarray is a multiple of k.

// For example, the array [23, 2, 4, 7] with k = 6 has a "good subarray" ([2, 4]), as the sum 6 is a multiple of k = 6. The array [5, 0, 0, 0] with k = 3 does not have any "good subarray", as no subarray of two or more elements sums to a multiple of 3.

if (nums ==  null) return false;

if (k == 1) return true;

let start = 0;
let end = 1;

while(end < nums.length) {
    if ((nums[start] + nums[end]) % k == 0) return true;
    start++;
    end++;
}

return false;