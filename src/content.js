let searchTimeOut = () => {}
// const test = chrome.runtime.getURL('eiei.gif')
// console.log(test)
const imgSrc = chrome.runtime.getURL('assets/image/eiei.gif')
function ready() {
  const element = document.getElementsByTagName("img");
  clearTimeout(searchTimeOut)
  const timeOut = setTimeout(async () => {
    for (i = 0; i < element.length - 1; i++) {
      if (element[i].src !== imgSrc) {
        element[i].src = imgSrc
      }
    }
  }, 100)
  searchTimeOut = timeOut
}

document.addEventListener("DOMSubtreeModified", ready);

