import AlgoVisualizer from '../../util/AlgoVisualizer.js'
import SelectAlgoFrame from './SelectAlgoFrame.js'
import SelectSortData from './SelectSortData.js'

class SelectAlgoVisualizer extends AlgoVisualizer {
	constructor(g2d, canvasWidth, canvasHeight, count) {
    super(g2d, canvasWidth, canvasHeight, count)
    
    // 初始化数据
    this.data = new SelectSortData(count, canvasHeight)

    this.frame = new SelectAlgoFrame(g2d, canvasWidth, canvasHeight)
    
    this.run()
	}

	run() {
    let len = this.data.length()
    
    this.setData(0, -1, -1)
    for (let i = 0; i < this.data.length(); i++) {
      var minIndex = i
      this.setData(i, -1, minIndex)
      for (let j = i + 1; j < this.data.length(); j++) {
        this.setData(i, j, minIndex)
        if (this.data.get(j) < this.data.get(minIndex)) {
          minIndex = j
          this.setData(i, j, minIndex)
        }
      }
      this.data.swap(i, minIndex)
      this.setData(i + 1, -1, -1)
    }
    this.setData(this.data.length(), -1, -1)
    this.render()
	}
	
	setData(orderedIndex, currentCompareIndex, currentMinIndex) {
    let data = new SelectSortData()
    data.orderedIndex = orderedIndex
    data.currentCompareIndex = currentCompareIndex
    data.currentMinIndex = currentMinIndex
    data.numbers = this.data.numbers.slice()
    this.data_list[this.data_list.length] = data
  }
}

export default SelectAlgoVisualizer