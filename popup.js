var originalBackgroundColor;
document.getElementById('changeColor').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: changeBackgroundColor,
    });
  });
});

function changeBackgroundColor() {
  if (typeof originalBackgroundColor === 'undefined') {
    originalBackgroundColor = document.body.style.backgroundColor;
  }
  return (document.body.style.backgroundColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16));
}

document.getElementById('resetColor').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: resetBackgroundColor,
    });
  });
});

function resetBackgroundColor() {
  if (typeof originalBackgroundColor !== 'undefined') {
    document.body.style.backgroundColor = originalBackgroundColor;
  }
}
