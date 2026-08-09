class MyHashSet {
    set = [];
    constructor() {}

    hashFunction(key) {
        const ascii = key.toString();
        return 'abc'+ascii+'123';
    }
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const hashValue = this.hashFunction(key);
        if(!this.set.includes(hashValue)) {
            this.set.push(hashValue)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hashValue = this.hashFunction(key);
        if(this.set.includes(hashValue)) {
            const index = this.set.indexOf(hashValue);
            this.set.splice(index, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const hashValue = this.hashFunction(key);
        if(this.set.includes(hashValue)) {
            return true;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
