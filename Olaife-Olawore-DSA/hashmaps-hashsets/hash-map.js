
var MyHashMap = function() {
    this.hashMap = []
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    for(let i = 0; i < this.hashMap.length; i++){
        if(this.hashMap[i][0] === key){
            this.hashMap[i][1] = value
            return
        }
    }
    this.hashMap.push([key, value])
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    for(let i = 0; i < this.hashMap.length; i++){
        if(this.hashMap[i][0] === key){
            return this.hashMap[i][1]
        }
    }
    
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    for(let i = 0; i < this.hashMap.length; i++){
        if(this.hashMap[i][0] === key){
            delete this.hashMap[i]
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */