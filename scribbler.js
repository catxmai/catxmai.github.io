// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

  function openImage(element) {
    var newTab = window.open();
    setTimeout(function() {
      newTab.document.body.innerHTML = element.innerHTML;
    }, 500);
    return false;
  }

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = `   
                🔍🔍🔍 Research: 
                      - HCI: social media, online campaigns, mental health
                      - Learning sci.: discourse analysis
              
                🌱🌱🌱 Free time: play Go, garden, play Go, code`;
  var speed = 0;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 0);
}

