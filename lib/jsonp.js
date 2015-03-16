
var getJsonP = function(src) {

  var script = document.createElement('script');

  var container = document.getElementById("script-container");
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }

  script.src = src;
  container.appendChild(script);
};

  



