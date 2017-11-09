import SortData from '../../util/SortData.js'

class SelectSortData extends SortData {
  constructor(count, range) {
    super()

    this.numbers = new Array(count)

    // 用于选择排序
    this.orderedIndex = 1 //[0...orderedIndex)是有序的
    this.currentCompareIndex = -1 //当前正在比较的第一个元素索引
    this.currentMinIndex = -1 //当前正在比较的第二个元素索引

    for (let i = 0; i < count; i++) {
      this.numbers[i] = parseInt(Math.random() * range) + 1
    }
  }
}

export default SelectSortData
