// A containter for the individual streams and their associated elements and values

function Stream(displayName, gameName, viewers, description, preview, link) {
  this.displayName = displayName;
  this.gameName = gameName;
  this.viewers = viewers;
  this.description = description;
  this.preview = preview;
  this.link = link;
}

Stream.prototype.constructStream = function(stream) {

  // build out all of the elements for each stream instance

  var newContainerDiv = document.createElement('div');
  var newImgDiv = document.createElement('div');
  var newTextDiv = document.createElement('div');
  var newImage = document.createElement('img');
  var newName = document.createElement('p');
  var newGame = document.createElement('p');
  var newDescription = document.createElement('p');
  var newAnchorTag = document.createElement('a');

  newContainerDiv.className = 'stream-container';
  newContainerDiv.appendChild(newAnchorTag);
  newContainerDiv.appendChild(newTextDiv);

  newAnchorTag.href = this.link;
  newAnchorTag.target = '_blank';
  newAnchorTag.appendChild(newImgDiv);

  newImgDiv.className = 'image-container stream-div float-left';
  newImgDiv.appendChild(newImage);

  newImage.src = this.preview;
  newImage.className = 'preview';
  
  newTextDiv.className = 'stream-div stream-text float-left';
  newTextDiv.appendChild(newName);
  newTextDiv.appendChild(newGame);
  newTextDiv.appendChild(newDescription);

  newName.className = 'name-header stream-text';
  newName.innerHTML = this.displayName;

  newGame.className = 'game-header stream-text';
  newGame.innerHTML = this.gameName + ' - ' + this.viewers + ' viewers';

  newDescription.className = 'description stream-text';
  newDescription.innerHTML = this.description;
  
  return newContainerDiv;
};