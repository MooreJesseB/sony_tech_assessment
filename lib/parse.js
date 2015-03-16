var parseResponse = function(data) {
  console.log(data);

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