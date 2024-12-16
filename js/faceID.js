const video = document.getElementById('video');
const scanningTime = 2000; // 2 seconds scan delay

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
]).then(startVideo);

function startVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: {} })
    .then(stream => (video.srcObject = stream))
    .catch(err => console.error(err));
}

video.addEventListener('playing', () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);

  // Position and resize canvas to match the video
  canvas.style.position = 'absolute';
  canvas.style.top = video.offsetTop + 'px';
  canvas.style.left = video.offsetLeft + 'px';

  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  let isScanning = false; // Prevent multiple redirects

  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    // Clear and redraw canvas
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);

    if (detections.length > 0 && !isScanning) {
      isScanning = true;
      document.getElementById('scanningText').style.display = 'block';

      setTimeout(() => {
        window.location.href = '/html/donefaceID.html';
      }, scanningTime);
    }
  }, 500);
});
