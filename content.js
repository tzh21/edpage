chrome.runtime.onMessage.addListener(msgObj => {
    if (msgObj === 'EditButtonClicked') {
        document.body.contentEditable = 'true'
        document.body.setAttribute('spellcheck', false)
        console.log("Page becomes editable.")
        alert("Page becomes editable.")
    }
    if (msgObj === 'DisableButtonClicked') {
        document.body.contentEditable = 'false'
        document.body.setAttribute('spellcheck', false)
        console.log("Page becomes uneditable.")
        alert("Page becomes uneditable.")
    }
})
