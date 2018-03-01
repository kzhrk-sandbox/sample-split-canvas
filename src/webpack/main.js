import SplitCanvas from './modules/split-canvas';

window.addEventListener(
  'load',
  () => {
    const app = document.getElementById('app');

    const spritCanvas = new SplitCanvas();

    spritCanvas.setImage('/img/dummy.jpeg').then(() => {
      const canvases = spritCanvas.getCanvases(5, 5);
      canvases.forEach(rowCanvases => {
        rowCanvases.forEach(canvas => {
          app.appendChild(canvas);
        });

        const brNode = document.createElement('br');
        app.appendChild(brNode);
      });

      app.appendChild(spritCanvas.canvas);
    });
  },
  false
);
