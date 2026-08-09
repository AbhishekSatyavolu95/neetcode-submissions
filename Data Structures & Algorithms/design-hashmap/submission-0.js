class MyHashMap {
    map = [];

    constructor() {}


    hashFunction(key) {
        const hashValue = 'abc'+key.toString()+'123';
        return hashValue;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const hash = this.hashFunction(key);
        if(this.map.includes(hash)) {
            const index = this.map.indexOf(hash);
            this.map[index+1] = value;
        }
        else {
            this.map.push(hash, value);
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const hash = this.hashFunction(key);
        if(this.map.includes(hash)) {
            const index = this.map.indexOf(hash);
            return this.map[index+1];
        }
        else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hash = this.hashFunction(key);
        if(this.map.includes(hash)) {
            const index = this.map.indexOf(hash);
            this.map.splice(index, 2);
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
