// parseResponse is the callback function that is passed through the JSON-P ajax call
// parses and feeds data into the layout object for display

var parseResponse = function(data) {

  // clear out old streams from previous search
  if (layout.streams.length > 0) {
    layout.clearStreams();  
  }

  // set the query text to display
  el = document.getElementById('query');
  layout.setQuery(el.value);

  // clear out input field
  el.value = "";

  layout.setTotal(data.streams.length);
  layout.calcPages();
  layout.updatePageCurrent(0);
  layout.parseStreams(data.streams);
  layout.displayStreams();

};