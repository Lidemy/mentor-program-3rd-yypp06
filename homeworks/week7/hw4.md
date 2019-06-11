## 什麼是 DOM？
    

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？


## 什麼是 event delegation，為什麼我們需要它？


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
- event.preventDefault 阻止瀏覽器預設的行為，例如：表單沒填完就無法按送出。
- e.stopPropagation 防止事件冒泡到 DOM 上，但還是會執行監聽效果。例如有兩重疊父子元素皆有
綁定事件，為了不讓一個動作引起多層觸發，就必須設置停止傳遞。