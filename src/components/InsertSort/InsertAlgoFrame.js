import AlgoFrame from '../../util/AlgoFrame.js'
import AlgoVisHelper from '../../util/AlgoVisHelper.js'

class InsertAlgoFrame extends AlgoFrame {
  constructor(g2d, canvasWidth, canvasHeight) {
		super(g2d, canvasWidth, canvasHeight)
	}
	
	// 插入排序具体绘制
	repaint() {
    this.g2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

    let w = this.canvasWidth / this.data.length(),
        len = this.data.length()

    for (let i = 0; i < len; i++) {
      if (i < this.data.orderedIndex) {
        AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.Red)
      } else {
        AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.Grey)
      }

      if (i === this.data.currentCompareIndex) {
        AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.LightBlue)
      }

      AlgoVisHelper.fillRectangle(this.g2d, i * w, 0, w - 1, this.data.get(i))
    }
  }
}

export default InsertAlgoFrame