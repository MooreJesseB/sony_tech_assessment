function Layout(total) {
  this.total = total;
  this.pageCurrent = 0;
  this.pageTotal = 0;
  this.calcPages();
  this.query = '';

  this.streams = [];
}

Layout.prototype.setTotal = function(total) {
  this.total = total;
  var el = document.getElementById('total');
  el.innerHTML = 'Total results: ' + total;
};

Layout.prototype.setPages = function() {
  var el = document.getElementById('pages');
  el.innerHTML = this.pageCurrent + '/' + this.pageTotal;
};

Layout.prototype.setQuery = function(query) {

  this.query = query;

  var el = document.getElementById('query-container');
  var newParagraph = document.createElement('p');
  var newTextNode = document.createTextNode(this.query);

  newParagraph.className = "arial";

  console.log('setQuery el', el);
  // remove old query text
  if (el.firstChild) {
    el.removeChild(el.firstChild);  
  }

  newParagraph.appendChild(newTextNode);
  el.appendChild(newParagraph);
};

Layout.prototype.clearStreams = function() {
  this.streams = [];
};

Layout.prototype.calcPages = function() {
  var val = 0;

  val = parseInt(this.total / 5);
  if (this.total % 5 > 0) {
    val++;
  }
  this.pageTotal = val;
};

Layout.prototype.updatePageCurrent = function(val) {

  // for val: 1 is next page, -1 is previous page, 0 is reinitialize

  if ((val < 0 && this.pageCurrent !== 1) || (val > 0 && this.pageCurrent !== this.pageTotal)) {
    this.pageCurrent += val;
  } else if (val === 0) {
    this.pageCurrent = 1;
  }
  this.setPages();  
};

Layout.prototype.parseStreams = function(arr) {
  var that = this;
  arr.forEach(function(item) {
    var stream = new Stream(item.channel.display_name, 
      item.channel.game, 
      item.viewers, 
      item.channel.status, 
      item.preview.medium, 
      item.channel.url);
    that.streams.push(stream);
  });
};

Layout.prototype.getCurrentStreams = function() {
  var firstStream = (this.pageCurrent - 1) * 5;
  var lastStream = firstStream + 4;
  var length = this.streams.length - 1;
  var arr = [];

  if (lastStream > length) {
    lastStream = length;
  }

  for (var i = firstStream; i <= lastStream; i++) {
    console.log('value of i', i);
    arr.push(this.streams[i]);
  }
  return arr;
};

Layout.prototype.displayStreams = function() {
  var container = document.getElementById("streams");

  // remove old streams
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
 
  // get a subset of streams limit 5
  var arr = this.getCurrentStreams();

  console.log(arr);

  arr.forEach(function(stream) {
    container.appendChild(stream.constructStream());
  });
};

var layout = new Layout();





