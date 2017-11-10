import AlgoVisualizer from '../../util/AlgoVisualizer.js'
import ShellAlgoFrame from './ShellAlgoFrame.js'
import ShellSortData from './ShellSortData.js'

class ShellAlgoVisualizer extends AlgoVisualizer {
  constructor(g2d, canvasWidth, canvasHeight, count) {
    super(g2d, canvasWidth, canvasHeight, count)

    // 初始化数据
    this.data = new ShellSortData(count, canvasHeight)

    this.frame = new ShellAlgoFrame(g2d, canvasWidth, canvasHeight)

    this.run()
  }

  run() {
    let len = this.data.length()
    this.setData([])

    // 初始排序间距
    let gap = 1
    while (gap < len / 3) {
      gap = gap * 3 + 1
    }

    while (gap >= 1) {
      for (let i = gap; i < len; i++) {
        let indexs = [],
            index = i
        while (index >= 0) {
          indexs.push(index)
          index -= gap
        }
        this.setData(indexs.reverse())
        for (let j = i; j >= gap && this.data.get(j) < this.data.get(j - gap); j -= gap) {
          this.data.swap(j, j - gap)
          this.setData(indexs, j - gap)
        }
      }
      // 缩小间距
      gap = (gap - 1) / 3
    }

    let indexs=[]
    for(let i=0;i<len;i++) indexs.push(i)
    this.setData(indexs)
    this.render()
  }

  setData(indexs, currentCompareIndex) {
    let data = new ShellSortData()
    data.indexs = indexs
    data.currentCompareIndex = currentCompareIndex
    data.numbers = this.data.numbers.slice()
    this.data_list[this.data_list.length] = data
  }
}

export default ShellAlgoVisualizer
