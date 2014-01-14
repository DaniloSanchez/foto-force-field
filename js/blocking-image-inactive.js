var timeoutToActivateImage = 100;
    windowRemainsOnTop = true;
    windowsOnTop = true;

window.onfocus = function () {
  windowsOnTop = true;
}

window.onblur = function () {
  windowsOnTop = false;
}

setInterval(function () {
  if (window.windowsOnTop)
    windowsIsActive();
  else
    changeToInactiveImage();
}, timeoutToActivateImage);

function windowsIsActive(){
  if (windowRemainsOnTop)
    changeTimeoutToActivateImage();
  else
    changeToActiveImage();
}

function changeTimeoutToActivateImage(){
  timeoutToActivateImage = 100;
  windowRemainsOnTop = true;
}

function changeToInactiveImage(){
  $("#mainPhoto").attr('src', INACTIVE_IMAGE);
  windowRemainsOnTop = false;
}

function changeToActiveImage() {
  timeoutToActivateImage = 1000;
  sleep(500);
  $("#mainPhoto").attr('src', ACTIVE_IMAGE);
  windowRemainsOnTop=true;
}

function sleep(ms) {
  var start = new Date().getTime(), expire = start + ms;
  while (new Date().getTime() < expire) { }
  return;
}

