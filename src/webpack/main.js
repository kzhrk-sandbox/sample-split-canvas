import SplitCanvas from './modules/split-canvas';

window.addEventListener(
  'load',
  () => {
    const app = document.getElementById('app');

    const splitCanvas = new SplitCanvas();

    splitCanvas.setImage('img/dummy.jpeg').then(() => {
      const canvases = splitCanvas.getCanvases(10, 10);
      canvases.forEach(rowCanvases => {
        rowCanvases.forEach(canvas => {
          app.appendChild(canvas);
        });

        const brNode = document.createElement('br');
        app.appendChild(brNode);
      });

      app.appendChild(splitCanvas.canvas);
    });
  },
  false
);
