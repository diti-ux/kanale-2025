function addChannel() {
    var link = document.getElementById('m3uLink').value;
    if (link) {
        var channelList = document.getElementById('channelList');

        var channelItem = document.createElement('div');
        channelItem.classList.add('channel-item');

        var channelLink = document.createElement('span');
        channelLink.textContent = link;

        var copyButton = document.createElement('button');
        copyButton.classList.add('copy-btn');
        copyButton.textContent = 'Kopjo';
        copyButton.onclick = function() { copyToClipboard(link); };

        channelItem.appendChild(channelLink);
        channelItem.appendChild(copyButton);
        channelList.appendChild(channelItem);

        document.getElementById('m3uLink').value = '';
    }
}

function copyToClipboard(text) {
    var tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Linku M3U u kopjua në clipboard!');
}
