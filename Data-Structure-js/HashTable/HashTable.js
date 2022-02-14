class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    for (let pair of this.keyMap[index]) {
      if (pair[0] == key) return pair[1];
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        keys.push(this.keyMap[i][j][0]);
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        values.push(this.keyMap[i][j][1]);
      }
    }
    return values;
  }
}

const myHash = new HashTable(10);
myHash.set(0, "hi");
myHash.set(1, "hello");
myHash.set(2, "bye");

const results = [];
results.push(myHash.get(0));
results.push(myHash.get(1));
results.push(myHash.get(2));
results.push(myHash.get(5));
console.log("results", results);

const keys = myHash.keys();
console.log("keys", keys);

const values = myHash.values();
console.log("values", values);
