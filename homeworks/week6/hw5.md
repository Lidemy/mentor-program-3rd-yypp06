## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
- <audio src=" " controls=" "></audio> HTML5 提供的標籤，可支援 mp3, Wav, Ogg Vorbis
音樂檔，src 來源，controls 為播放方式。
- <hr> 水平線
- <br> </br> 換行格，其實沒有 </br> 也可使用，但養成好習慣還是加上的好。

## 請問什麼是盒模型（box modal）
- 盒模型從外而內由 magin, border, padding 所組成， magin 控制容器外的間隔， border 是
容器的框線， padding 控制容器內物件與 border 的間隔。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
- inline 讓物件都置在同一行，且 margin 可調左右間距，上下無法
- block 讓物件個別佔滿一行，margin 可調上下左右間距。
- inline-block 結合以上兩者特性，讓物件可以都置在同一行，又可以使用 margin 調上下左右的間距。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
- static 正常流向定位，基本上都會讓物件以上下做排列，網頁預設的排列方式。
- relative 相對定位，是相對 static 在排版中的位置，可以用 left, right, top, bottom 來
指定物件的相對位置。
- absolute 絕對定位，跳脫 static 的位置，以父元素作為範圍，可以用 left, right, top, 
bottom 來設定任意位置，且不干擾其他物件空間，非常任性的設定。
- fixed 固定位置，也是用 left, right, top, bottom 來設定任意網頁位置，如何滑動也是固定在
視窗位置，常用於網頁兩端黏住的小廣告。
