class SortData {
  constructor() {}

  length() {
    return this.numbers.length
  }

  get(index) {
    if (index < 0 || index >= this.numbers.length) {
      throw ReferenceError("Invalid index to access Sort Data")
    }
    return this.numbers[index]
  }

  swap(i, j) {
    if (i < 0 || i >= this.numbers.length || j < 0 || j >= this.numbers.length) {
      throw ReferenceError("Invalid index to access Sort Data")
    }

    let t = this.numbers[i]
    this.numbers[i] = this.numbers[j]
    this.numbers[j] = t
  }
}

export default SortData
