console.log("background running");

chrome.runTime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
    console.log(request)
}


// const activeTab = tabs;
// chrome.tabs.sendMessage()