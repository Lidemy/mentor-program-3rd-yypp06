## 什麼是 DOM？
- DOM 是 JavaScript 跟 HTML 溝通的橋樑，之於地球跟阿斯嘉之間的彩虹橋。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
- 事件的傳遞機制 DOM event flow：Capturing Phase, Target Phase, Bubbling Phase 
，先捕獲，再 Target Phase，最後再冒泡。 

- 冒泡事件指的是「從啟動事件的元素節點開始，逐層往上傳遞」，直到整個網頁的根節點，也就是 document。
- 捕獲事件的順序則是相反的

## 什麼是 event delegation，為什麼我們需要它？
- 通常我們設置 addEventListener 在子元素上，看似沒有問題，但後來動態新增的同層子元素，
監聽事件就失效了，是可以每個動態元素再重新加上 addEventListener ，但是非常沒有效率且重
複性程式碼太多，那不如就把監聽事件加在父元素上，讓上面去傳遞事件。
- 此技巧原理來自捕獲冒泡事件

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
- event.preventDefault 阻止瀏覽器預設的行為，例如：表單沒填完就無法按送出。
- e.stopPropagation 防止事件冒泡到 DOM 上，但還是會執行監聽效果。例如有兩重疊父子元素皆有
綁定事件，為了不牽一髮動全身，就必須設置停止傳遞。