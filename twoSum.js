const twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let complement_pair = target - value;
        if (map[complement_pair] !== undefined) {
            return [map[complement_pair], i];
        } else {
            map[value] = i;
        }
    }
};

const getResult = twoSum([2, 7, 11, 15], 9);

console.log('getResult', getResult);

// ** time complexity is O(n) and Space Complexity is O(n)
