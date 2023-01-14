// var compress = function(chars) {
//     let s = ""
//     let ctr = 0
    
//     for(let i = 0; i < chars.length; i++){
        
//         if(i === 0){
//             s = s.concat(chars[i])
//             continue
//         }
//         if(chars[i] === chars[i - 1]){
//             if(chars[i + 1]){
//                 ctr += 1
//                 continue
//             }
//             if(ctr > 1){
//                 ctr += 1
//                s = s.concat(ctr) 
//             }
//             return s
//         }
//         if(ctr > 1){
//             s = s.concat(ctr) 
//         }
//         s = s.concat(chars[i])
//         ctr = 1
//     }
//     return s
// };

var compress = function(chars) {
    let s = ""
    let ctr = 0
    
    for(let i = 0; i < chars.length; i++){
        
        if(i === 0){
            s = s.concat(chars[i])
            ctr += 1
            continue
        }
        if(chars[i] === chars[i - 1]){
            if(chars[i + 1]){
                ctr += 1
                continue
            }
            if(ctr > 1){
                ctr += 1
                s = s.concat(ctr) 
                console.log(s);
            }
            chars = s.split("")
            return chars
        }
        if(ctr > 1){
            s = s.concat(ctr) 
        }
        s = s.concat(chars[i])
        ctr = 1
    }
    chars = s.split("")
    return chars
};

let func = compress(["a","a","b","b","c","c","c"])
console.log(func)

let func2 = compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])
console.log(func2);