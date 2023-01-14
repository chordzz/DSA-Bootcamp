
var MyHashSet = function() {
    this.hashSet = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    for (let i = 0; i < this.hashSet.length; i++){
        if (this.hashSet[i] === key){
            return
        }
    }
    this.hashSet.push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const i = this.hashSet.indexOf(key)
    if(i >= 0) {
        delete this.hashSet[i]
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.hashSet.indexOf(key) >= 0
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */