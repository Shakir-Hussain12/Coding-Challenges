/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxAr = 0;
    let start = 0;
    let end = height.length - 1;

    while (start != end) {
        if (height[end] < height[start])  {
            maxAr = Math.max(height[end] * Math.abs(end - start), maxAr);
            end -= 1;
        } else {
            maxAr = Math.max(height[start] * Math.abs(end - start), maxAr);
            start += 1;
        }
    }

    return maxAr;
};