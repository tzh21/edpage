document.getElementById('editButton').addEventListener('click', function () {
    // This sends a message to content.js from where it receives it
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, "EditButtonClicked");
        })
    })
})
document.getElementById('disableButton').addEventListener('click', function () {
    // This sends a message to content.js from where it receives it
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, "DisableButtonClicked");
        })
    })
})