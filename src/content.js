let searchTimeOut = () => {}
// const test = chrome.runtime.getURL('eiei.gif')
// console.log(test)
const imgSrc = 'https://media.tenor.com/UJSaelt_l0MAAAAd/%E0%B8%AD%E0%B8%B2%E0%B8%88%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%94%E0%B8%87.gif'
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

