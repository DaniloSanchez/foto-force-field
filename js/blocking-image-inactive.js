var timeoutToActivateImage = 100;
    windowRemainsOnTop = true;
    windowsOnTop = true;

window.onfocus = function () { 
  windowsOnTop = true; 
};

window.onblur = function () { 
  windowsOnTop = false; 
};

setInterval(function () { 
  if (window.windowsOnTop){
    if (windowRemainsOnTop) {
      timeoutToActivateImage = 100;
      windowRemainsOnTop = true;
    }else{
      timeoutToActivateImage = 1000;
      sleep(500);
      $("#mainPhoto").attr('src', ACTIVE_IMAGE);
      windowRemainsOnTop=true;
    }
  }else{
    $("#mainPhoto").attr('src', INACTIVE_IMAGE);
    windowRemainsOnTop = false;
  }
}, timeoutToActivateImage);

function sleep(ms) {
  var start = new Date().getTime(), expire = start + ms;
  while (new Date().getTime() < expire) { }
  return;
}

