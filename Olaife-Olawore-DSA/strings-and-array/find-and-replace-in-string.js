// /**
//  * @param {string} s
//  * @param {number[]} indices
//  * @param {string[]} sources
//  * @param {string[]} targets
//  * @return {string}
//  */
//  var findReplaceString = function(s, indices, sources, targets) {
//     let arr = []
//     let testStr = s
    
//     for(let i = 0; i < indices.length; i++){

//         if(sources[i] === s.substr(indices[i], sources[i].length)){

//             testStr = testStr.replace(s.substr(indices[i], sources[i].length), targets[i])
//         }
//     }
//     return testStr
// };

const findReplaceString = function(s, indices, sources, targets) {
    let ans = '', map = {}
    for(i=0;i<indices.length;i++){

        map[indices[i]] = [sources[i],targets[i]]
    }
    for(i=0;i<s.length;i++){
       
        if(map[i] && s.substr(i,map[i][0].length) === map[i][0]){
            ans += map[i][1]
            i += map[i][0].length - 1
            indices.shift()
            sources.shift()
            targets.shift()
        }else{
            ans += s[i] 
        }
    }
    console.log(ans)
    return ans
}


let func = findReplaceString('abcd', [0,2], ["ab", "cd"], ["eee", "fff"])
console.log(func)

// let func2 = findReplaceString("ejvzndtzncrelhedwlwiqgdbdgctgubzczgtovufncicjlwsmfdcrqeaghuevyexqdhffikvecuazrelofjmyjjznnjdkimbklrh"
// [25,35,60,77,69,79,15,19,58,92,27,64,4,11,51,7,72,67,30,0,74,98,17,85,48,32,38,62,43,2,9,55,87]
// ["gc","tov","vy","re","ikv","lo","dw","iqgdbd","ue","kimbk","tgu","qd","ndt","elhe","crq","zn","ec","ff","bz","ej","ua","rh","lw","jj","mfd","cz","ufn","ex","cjl","vz","cr","agh","znnj"],
// ["dxs","hn","vfc","wnr","tira","rko","oob","mlitiwj","zrj","onpp","ot","c","lm","hbsje","dgc","ruf","qi","h","vzn","ja","ow","te","km","imq","pia","ixp","xsod","m","eat","yf","lzu","dgy","dyrsc"])
// console.log(func2)