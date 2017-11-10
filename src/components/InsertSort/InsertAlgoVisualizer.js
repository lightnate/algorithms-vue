import AlgoVisualizer from '../../util/AlgoVisualizer.js'
import InsertAlgoFrame from './InsertAlgoFrame.js'
import InsertSortData from './InsertSortData.js'

class InsertAlgoVisualizer extends AlgoVisualizer {
	constructor(g2d, canvasWidth, canvasHeight, count) {
    super(g2d, canvasWidth, canvasHeight, count)
    
    // 初始化数据
    this.data = new InsertSortData(count, canvasHeight)

    this.frame = new InsertAlgoFrame(g2d, canvasWidth, canvasHeight)
    
    this.run()
	}

	run() {
    let len = this.data.length()
    
    this.setData(0, -1)
    for(let i = 1; i < len; i++) {
      this.setData(i, -1)
      for(let j = i; j > 0 && this.data.get(j) < this.data.get(j - 1); j--) {
        this.data.swap(j, j - 1)
        this.setData(i, j - 1)
      }
    }
    this.setData(len, -1)
    this.render()
	}
	
	setData(orderedIndex, currentCompareIndex) {
    let data = new InsertSortData()
    data.orderedIndex = orderedIndex
    data.currentCompareIndex = currentCompareIndex
    data.numbers = this.data.numbers.slice()
    this.data_list[this.data_list.length] = data
  }
}

export default InsertAlgoVisualizer