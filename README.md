# app-template


`/system/lib/app.js` 包函的模块是 `QueryRouterServer` 和 `Page` 和 `useConfigKey`



## deploy app的过程

- `envision pack -p`
- `curl` 请求
```sh
curl https://envision.xiongxiao.me/api/router?path=micro-app&key=deploy -d '{
    "data": {
        "id": "17d105b8-9b6b-4cfc-9447-c815f24fe3d7",
        "key": "mark"
    }
}'
```
- 启动 `https://kevisual.xiongxiao.me/api/router?path=local-apps&key=updateStatus&appKey=mark&status=start`
