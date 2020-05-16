# express-structure
Express 架構練習。
簡單的小架構
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
啟動後在瀏覽器輸入: localhost:5000/api/user/user?user_id=1，就可以看到輸出結果了。

***輸出結果***


<img width="400" alt="screenshot" src="https://user-images.githubusercontent.com/18310281/82120522-56d89580-97b9-11ea-82f0-44e4030085c5.png">


***錯誤回傳***


<img width="400" alt="截圖 2020-05-16 下午8 49 52" src="https://user-images.githubusercontent.com/18310281/82120654-52f94300-97ba-11ea-9fc4-215c92534061.png">



