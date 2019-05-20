## 請以自己的話解釋 API 是什麼
- 點餐單，我想要的所有餐點都照表格填入，送給服務生，服務生確認餐點完再請廚房處理，完成後送回。



## 請找出三個課程沒教的 HTTP status code 並簡單介紹
- 415 不支持的媒體類型
- 505 HTTP版本不受支持
- 401 未經授權


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

URL:http://helloWorld.restaurants.com

| 說明            | Method | path       | 參數                   | 範例             |
|----------------|--------|------------|----------------------|----------------|
| 回傳所有餐廳資料 | GET | /restaurants | _limit:限制回傳資料數量 <br> type:特定餐廳類型 | /restaurants?_limit=5 <br> /restaurants?_limit=5&type=tai |
| 回傳單一餐廳資料 | GET | /restaurants/:id | 無 | /restaurants/33 |
| 新增餐廳 | POST | /restaurants   | name: 餐廳名 <br> type: 餐廳類型 | 無 |
| 更改餐廳 | PATCH|/restaurants/:id | name: 餐廳名 <br> type: 餐廳類型 | 無 |
| 刪除餐廳   | DELETE | /restaurants/:id | 無 | 無 |