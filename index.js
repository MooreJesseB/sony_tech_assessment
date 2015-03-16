

window.onload = function(event) {

  var searchEndpoint = "https://api.twitch.tv/kraken/search/streams?q=";
  var version = "&api_version=3";
  var limit = '&limit=50';
  var jsonPCallback = '&callback=parseResponse';
  var url;
  
  var setFormSubmit = function() {

    var el = document.getElementById('form-submit');

    el.onsubmit = function(event) {
      event.preventDefault();

      console.log('this.query.value', this.query.value);

      url = searchEndpoint + this.query.value + version + limit + jsonPCallback;

      getJsonP(url);
    };
  };

  var setPageChangeButton = function(id) {
    var el = document.getElementById(id);

    el.onclick = function() {
      layout.updatePageCurrent(parseInt(el.value));
      layout.displayStreams();
    };
  };

  // enable event handlers
  setFormSubmit();
  setPageChangeButton('prev-page');
  setPageChangeButton('next-page');
};