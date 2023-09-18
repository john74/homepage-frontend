/**
 * Group an array into subarrays of a specified size.
 *
 * @param {Array} data - The array to be grouped.
 * @param {number} groupSize - The size of each subarray.
 * @returns {Array} An array containing subarrays of the original data.
 */
function groupData(data, grouSize) {
    let groups = [];
    for (let i = 0; i < data.length; i += grouSize) {
        let group = data.slice(i, i + grouSize);
        groups.push(group);
    }
    return groups;
}

export default groupData;