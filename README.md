# express-structure
Express 架構練習。
最近新開啟的專案剛好是用express 作為 web framework，網路上稍微找了一下，沒有找到自己喜歡的架構，所以就自己稍微摸一下，做個簡單的小架構
## File structure

```
+-- models
|   +-- user.js
|   +-- user.js
+-- routes
|   +-- user.js
|   +-- product.js
+-- utils
|   +-- helper.js
|   +-- api.js
|   +-- validate.js
+-- app.js
+-- www
+-- config.js
+-- config.json
+-- ecosystem.config.js
```

- ***utils***: 包含自己定義的底層function.
- ***utils/api.js***: 在express中，在包一層自定義的中間件，方便除錯以及輸出格式統一。
- ***utils/validate.js***: express-validator的驗證模式
- ***config.json***: 設定檔~並藉由config.js檢查是否有少必要設定檔(正常專案下並不會把config.json 放入git內，此為示範範例)
- ***ecosystem.config.js***: pm2 的啟動檔案
## 啟動服務 

```
pm2 start ecosystem.config.js
```
