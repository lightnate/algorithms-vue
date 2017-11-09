class AlgoFrame {
  constructor(g2d, canvasWidth, canvasHeight) {
    this.g2d = g2d
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
  }

  getCanvasWidth() {
    return this.canvasWidth
  }

  getCanvasHeight() {
    return this.canvasHeight
  }

  render(data) {
    this.data = data
    this.repaint()
  }
}

export default AlgoFrame
