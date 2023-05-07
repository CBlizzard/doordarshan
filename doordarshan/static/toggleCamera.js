let isPlaying = false;

/**
 * @function startCamera - Starts the user's camera and microphone
 * @return {Promise<MediaStream>} A promise that resolves with the stream object if
 * access is granted, or rejects with an error if access is denied.
 */
async function startCamera() {
  // Check if the browser supports the mediaDevices API and getUserMedia method
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      // Try to get a stream object with audio and video tracks from the user's camera and microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

      return stream;
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  }
}

/**
 * @function stopCamera - Stops all tracks of the given media stream.
 * @param {MediaStream} stream - The media stream to stop.
 */
function stopCamera(stream) {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
  }
}

/**
 * @function toggleCamera - Toggles the camera on and off.
 * @async
 * @param {HTMLVideoElement} sourceVidScreen - The video element to display the camera stream.
 * @param {HTMLButtonElement} btn - The button element used to toggle the camera on and off.
 */
export async function toggleCamera(sourceVidScreen, btn) {
  if (!isPlaying) {
    try {
      const stream = await startCamera();

      sourceVidScreen.srcObject = stream;
      sourceVidScreen.play();
      isPlaying = true;

      btn.innerText = "Camera Off";
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  } else {
    stopCamera(sourceVidScreen.srcObject);

    sourceVidScreen.srcObject = null;
    isPlaying = false;

    btn.innerText = "Camera On";
  }
}
