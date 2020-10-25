'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // 設定値読み込み Load完了時
    chrome.storage.sync.get({
        color: 'Red'
    }, function (item) {
        document.getElementById('colors').value = item.color;
    });
});

document.getElementById('save').addEventListener('click', function () {
    // 設定を保存
    var color = document.getElementById('colors').value;
    chrome.storage.sync.set({
        color: color
    }, function () {
        console.log('saved: ' + color);
    });

    // 設定変更を通知／反映
    chrome.runtime.sendMessage({ color: color }, function () {
        console.log('message sent!');
    });
});
