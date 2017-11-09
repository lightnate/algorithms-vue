class AlgoVisHelper {
  constructor() {}
  static fillRectangle(g2d, x, y, w, h) {
    g2d.fillRect(x, y, w, h);
  }
  static setColor(g2d, color) {
    g2d.fillStyle = color;
  }

}

AlgoVisHelper.Red = '#f44336'
AlgoVisHelper.Pink = '#e91e63'
AlgoVisHelper.Indigo = '#3f51b5'
AlgoVisHelper.LightBlue = '#03a9f4'
AlgoVisHelper.Grey = '#9e9e9e'

export default AlgoVisHelper
