import SortData from '../../util/SortData.js'

class BubbleSortData extends SortData {
  constructor(count, range) {
    super()

    this.numbers = new Array(count)

    // 用于冒泡排序
    this.orderedIndex = count     //[orderedIndex,...,count]是有序的
		this.currentCompareIndex_1 = -1 //当前正在比较的第一个元素索引
		this.currentCompareIndex_2 = -1 //当前正在比较的第二个元素索引

    for (let i = 0; i < count; i++) {
      this.numbers[i] = parseInt(Math.random() * range) + 1
    }
  }
}

export default BubbleSortData
