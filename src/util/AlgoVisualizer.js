import SortData from './SortData.js'

class AlgoVisualizer {
  constructor(g2d, canvasWidth, canvasHeight, count) {
    // 动画的执行速度
    this.DELAY = 100

    this.g2d = g2d

    // 动画整个存储
    this.data_list = []    
  }

  render() {
    let i = 0
    let renderId = setInterval(() => {
      if (i < this.data_list.length) {
        this.frame.render(this.data_list[i])
        i++
      } else {
        clearInterval(renderId)
      }
    }, this.DELAY)
  }
}

export default AlgoVisualizer