var ajax = {};

ajax.x = function() {
  if (typeof XMLHttpRequest !== undefined) {
    return new XMLHttpRequest();
  }
  var versions = [
    "MSXML2.XmlHttp.5.0",
    "MSXML2.XmlHttp.4.0",
    "MSXML2.XmlHttp.3.0",
    "MSXML2.XmlHttp.2.0",
    "Microsoft.XmlHttp"
  ];

  var xhr;

  for (var i = 0; i < versions.length; i++) {
    try {
      xhr = new ActiveXObject(versions[i]);
      break;
    } catch(e) {
    }
  }

  return xhr;
};

ajax.send = function(url, callback, method, data, sync) {
  var x = ajax.x();

  x.open(method, url, sync);

  x.onreadystatechange = function() {
    if (x.readystate === 4) {
      callback(x.responseText);
    }
  };

  x.send(data);
};

ajax.get = function(url, data, callback, sync) {
  var query = [];
  for (var key in data) {
    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&callback=');
  }
  ajax.send(url + '?' + query.join('&'), callback, 'GET', null, sync);
};


var ajaxGet = function(url, callback) {
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      callback(xmlhttp.responseText);
    }
  };
  xmlhttp.open('GET', url, true);
  xmlhttp.send();
};







