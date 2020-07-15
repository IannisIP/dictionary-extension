function getMessageFromPopup() {

}

function computeElementsAmount() {
    const messageFromPopup = getMessageFromPopup()
    messageFromPopup = true;
    if(messageFromPopup) {
        //const totalElements = document.body.getElementsByTagName(messageFromPopup).length
    
        const tag = document.createElement("h1");
        const text = document.createTextNode("TESTING...");
        tag.appendChild(text);
        document.body.appendChild(tag);
    
        //send also to popup
        chrome.runtime.sendMessage(totalElements)
    }
}

//document.getElementById("valoare intarosa din popup")

computeElementsAmount();
