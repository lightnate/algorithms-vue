import AlgoVisualizer from '../../util/AlgoVisualizer.js'
import BubbleSortData from './BubbleSortData.js'
import BubbleAlgoFrame from './BubbleAlgoFrame.js'

class BubbleAlgoVisualizer extends AlgoVisualizer {
	constructor(g2d, canvasWidth, canvasHeight, count) {
    super(g2d, canvasWidth, canvasHeight, count)

    // 初始化数据
    this.data = new BubbleSortData(count, canvasHeight)

    this.frame = new BubbleAlgoFrame(g2d, canvasWidth, canvasHeight)
    
    this.run()
	}

	run() {
    let len = this.data.length()

    this.setData(len, -1, -1)
    for(let i = 0; i < len - 1; i++) {
      this.setData(len - i, -1, -1)
      for(let j = 0; j < len - 1 - i; j++) {
        this.setData(len - i, j, j + 1)
        if(this.data.get(j) > this.data.get(j + 1)) {
          this.data.swap(j, j + 1)
          this.setData(len - i, j, j + 1)
        }
      }
    }

    this.setData(0, -1, -1)
    this.render()
	}
	
	setData(orderedIndex, currentCompareIndex_1, currentCompareIndex_2) {
    let data = new BubbleSortData()
    data.orderedIndex = orderedIndex
    data.currentCompareIndex_1 = currentCompareIndex_1
    data.currentCompareIndex_2 = currentCompareIndex_2
    data.numbers = this.data.numbers.slice()
    this.data_list[this.data_list.length] = data
  }
}

export default BubbleAlgoVisualizer