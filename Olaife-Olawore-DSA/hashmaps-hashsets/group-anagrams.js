/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = new Map();

    for(let str of strs){
        const sortedStr = [...str].sort().join('');
        if(!anagrams.has(sortedStr)){
            anagrams.set(sortedStr, [])
        }
        anagrams.get(sortedStr).push(str)
    }

    return Array.from(anagrams.values());
};