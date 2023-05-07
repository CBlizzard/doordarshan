/**
 * @function disableButton - Disables the specified button for a given time
 * @param {HTMLButtonElement} btn
 * @param {number} [milliseconds=1000]
 */
export function disableButton(btn, milliseconds = 1000) {
  btn.disabled = true;
  setTimeout(() => (btn.disabled = false), milliseconds);
}
