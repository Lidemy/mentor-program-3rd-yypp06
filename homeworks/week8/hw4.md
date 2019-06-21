## 什麼是 Ajax？
- 非同步的與 server 存取資料方法

## 用 Ajax 與我們用表單送出資料的差別在哪？
- 差別在於同步及非同步，用表單送出的話需要等待他完成才能進行下一個動作且會換頁，ajax 就不需
要等待了。

## JSONP 是什麼？
- 基於安全性，ajax 會被瀏覽器限制，所以就會用 HTML 的某些標籤，如 script 標籤中 src 可以
拿到跨網域的資料，利用這些標籤的存取方法。

## 要如何存取跨網域的 API？
- 如果 server 在 header 裡沒有 access-control-allow-origin，用 JSONP 的方法，建立屬
性 src 來源網址，建立接收回來的 response 的  callback function 在回傳給用戶端執行，取得
資料。


## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
- 第四週只使用 Node.js 直接呼叫 API，並沒有透過瀏覽器，這週有過路，就要被刁難一下。  
