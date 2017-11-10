import AlgoFrame from '../../util/AlgoFrame.js'
import AlgoVisHelper from '../../util/AlgoVisHelper.js'

class ShellAlgoFrame extends AlgoFrame {
  constructor(g2d, canvasWidth, canvasHeight) {
		super(g2d, canvasWidth, canvasHeight)
	}
	
	// 希尔排序具体绘制
	repaint() {
    this.g2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

    let w = this.canvasWidth / this.data.length(),
        len = this.data.length()

    
    let index = 0
    for (let i = 0; i < len; i++) {
      if(i === this.data.indexs[index]) {
        AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.Red)
        index++
      }else {
        AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.Grey)
      }

      if(i === this.data.currentCompareIndex) {
        AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.LightBlue)
      }

      AlgoVisHelper.fillRectangle(this.g2d, i * w, 0, w - 1, this.data.get(i))
    }
  }
}

export default ShellAlgoFrame