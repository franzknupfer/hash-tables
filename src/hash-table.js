export default class HashTable {
  constructor() {
    this.array = [];
  }

  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
  }

  set(key, value) {
    const element = this.hash(key);
    if (this.array[element] === undefined) {
      this.array[element] = []
    }
    this.array[element].push([key, value]);
  }
}