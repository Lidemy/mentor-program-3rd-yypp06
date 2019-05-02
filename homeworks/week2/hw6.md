``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行 isValid function ，設定變數 i 為 0 ，檢查 i <= 變數陣列的長度，是的話開始進入迴圈
2. 如果變數陣列 arr[i] <= 0 ，則回傳 invalid
3. 第一圈檢查 3 是否 <= 0 ，否
4. 第二圈檢查 5 是否 <= 0 ，否
5. 第三圈檢查 8 是否 <= 0 ，否
6. 第四圈檢查 13 是否 <= 0 ，否
7. 第五圈檢查 22 是否 <= 0 ，否
8. 第六圈檢查 35 是否 <= 0 ，否
9. 進入下一個檢查迴圈，設變數 i 為 2 ，檢查 i <= 變數陣列的長度，是的話開始進入迴圈
10. 如果 arr[i] 不等於 arr[i-1] + arr[i-2] 回傳 invalid ，如果都不成立的話則回傳 valid
11. 第一圈檢查 8 是否成立，否
12. 第二圈檢查 13 是否成立，否
13. 第三圈檢查 22 是否成立，是
14. 回傳 invalid
15. 執行完畢