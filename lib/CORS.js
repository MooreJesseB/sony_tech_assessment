// I attempted to use CORS to talk with the twitch.tv API but CORS is not suppported by the API, only JSON-P.


// Create XHR object
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();

  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }

  return xhr;
}

// Make CORS request
function makeCorsRequest(url, callback) {

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = callback();

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}