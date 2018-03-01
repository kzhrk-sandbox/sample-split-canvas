export default class SplitCanvas {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
  }

  setImage(imgPath) {
    return new Promise(resolve => {
      const tmpImage = new Image();
      tmpImage.addEventListener(
        'load',
        () => {
          this.canvas.width = tmpImage.width;
          this.canvas.height = tmpImage.height;
          this.context.drawImage(
            tmpImage,
            0,
            0,
            tmpImage.width,
            tmpImage.height
          );

          resolve();
        },
        false
      );
      tmpImage.src = imgPath;
    });
  }

  /**
   * this.canvasを指定した縦横の数で分割してcanvasを連想配列で返す
   *
   * @param widthCount
   * @param heightCount
   * @returns {Array}
   */
  getCanvases(widthCount = 10, heightCount = 10) {
    const result = [];
    const splitWidthCount = widthCount;
    const splitHeightCount = heightCount;
    const canvasWidth = this.canvas.width / splitWidthCount;
    const canvasHeight = this.canvas.height / splitHeightCount;

    for (let hi = 0; hi < splitHeightCount; hi++) {
      let rowCanvases = [];

      for (let wi = 0; wi < splitWidthCount; wi++) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        context.drawImage(
          this.canvas,
          canvasWidth * wi,
          canvasHeight * hi,
          canvasWidth * (wi + 1),
          canvasHeight * (hi + 1),
          0,
          0,
          canvasWidth * (wi + 1),
          canvasHeight * (hi + 1)
        );

        rowCanvases.push(canvas);
      }

      result.push(rowCanvases);
    }

    return result;
  }
}
