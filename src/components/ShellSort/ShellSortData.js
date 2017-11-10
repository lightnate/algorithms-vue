import SortData from '../../util/SortData.js'

class ShellSortData extends SortData {
  constructor(count, range) {
    super()

    this.numbers = new Array(count)

    // 用于希尔排序
    this.indexs = []  //保存每组在排序的序列的索引
    this.currentCompareIndex = null //保存每组序列正在比较的元素

    for (let i = 0; i < count; i++) {
      this.numbers[i] = parseInt(Math.random() * range) + 1
    }
  }
}

export default ShellSortData
