chrome.action.onClicked.addListener(function() {
  chrome.windows.create({
    type: 'popup',
    url: 'popup.html',
    width: 250,
    height: 200
  });
});
