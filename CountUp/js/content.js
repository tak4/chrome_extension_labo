'use strict';

(function () {
    // 設定値取得
    chrome.storage.sync.get({
        color: 'Red'
    }, function (item) {
        const divCounter = document.getElementById('Counter');
        divCounter.textContent = 0;
        divCounter.style.color = item.color;
    });

    // 設定変更を受信／反映
    chrome.runtime.onMessage.addListener(
        function (message, sender, callback) {
            const divCounter = document.getElementById('Counter');
            divCounter.style.color = message.color;
        }
    );
})();

// カウント処理
{
    let counter = 0;
    const divCounter = document.getElementById('Counter');
    document.addEventListener('keydown', (event) => {
        var keyName = event.key;

        if (event.ctrlKey) {
            // console.log(`keydown:Ctrl + ${keyName}`);
        } else if (event.shiftKey) {
            // console.log(`keydown:Shift + ${keyName}`);
        } else {
            switch (keyName) {
                case 'Escape':
                    counter = 0;
                    break;
                case 'd':
                    counter--;
                    break;
                case ' ':
                case 'Enter':
                case 'ArrowRight':
                case 'ArrowLeft':
                case 'ArrowUp':
                case 'ArrowDown':
                    counter++;
                    break;
                default:
                    break;
            }
            console.log(`keydown:${keyName}`);
        }
        divCounter.textContent = counter;
    });
}
