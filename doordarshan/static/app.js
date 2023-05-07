import { toggleCamera } from "./toggleCamera.js";
import { disableButton } from "./utils.js";

const sourceVidScreen = document.getElementById("sourceVidScreen");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
  disableButton(btn);
  toggleCamera(sourceVidScreen, btn);
});
