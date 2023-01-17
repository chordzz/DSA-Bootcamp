
var MyHashMap = function() {
    this.hashMap = []
    this.size = 0
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let index = 0;
    console.log(this.hashMap)
    
    if (this.hashMap.length > 0){
        for ([x, y] of this.hashMap){
            if(x === key){
                this.hashMap[index] = [key, value];
                return
            }
            index++;
        }
    }
    
    this.hashMap.push([key, value])
    this.size++
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    for ([x, y] of this.hashMap){
        if(x === key){
            return y;
        }
    }
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let index = 0;
    
    for ([x, y] of this.hashMap){
        if(x === key){
            this.hashMap.splice(index, 1);
            return
        }
        index++;
    }
    
    this.size--;
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */