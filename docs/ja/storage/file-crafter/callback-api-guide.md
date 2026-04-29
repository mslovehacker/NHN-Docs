## Application Service > File Crafter > コールバックAPIガイド

File Crafterのimport/export機能を利用するには適切なコールバックAPIの提供が必要です。
各コールバックAPIの要件を案内します。

### Exportコールバック

ページング処理されたリスト照会のためのコールバックAPIです。ページングのために2つのタイプのパラメータセットを利用できます。
照会結果がなくなるまで繰り返し呼び出してデータをexportします。

- [HTTP Method]

```
GET
```
- [Content-Type]

```
application/json
```

- [Query parameter]

  | 項目               | キー                | 備考                            |
  |--------------------|-------------------|---------------------------------|
  | 一度に照会するデータ数  | limit or pageSize | offset or pageNumとセット使用必須  |             
  | ページングのためにスキップするデータ数 | offset or pageNum |                                 |
  | シート区分パラメータ       | sheetQuery        | 複数シートexportの場合、シート区分のためのパラメータ |                              |

- offset、limitパラメータセット
```json
{
  "offset": 0,
  "limit": 10
}
```

- pageNum、pageSizeパラメータセット

```json
{
  "pageNum": 1,
  "pageSize": 10
}
```

- [Response body]
```json
{
  "data": [
    {
      "key1-1": "value1-1",
      "key2-1": "value2-1"
    },
    {
      "key1-2": "value1-2",
      "key2-2": "value2-2"
    }
  ]
}
```

### Importコールバック

複数の項目で構成されたオブジェクト配列をリクエストとして受け取り処理できるコールバックAPIです。

- [HTTP Method]
```
POST
```
- [Content-Type]
```
application/json
```

- [Request body]
```json
{
  "data": [
    {
      "key1-1": "value1-1",
      "key2-1": "value2-1"
    },
    {
      "key1-2": "value1-2",
      "key2-2": "value2-2"
    }
  ]
}
```
- [Response body]
```json
{
  "header": {
    "resultCode": 0,
    "resultMessage": "success",
    "isSuccessful": true
  },
  "errors": []  
}
```

### Validateコールバック

Importコールバックリクエスト前に適切なデータであることを検証できるコールバックAPIです。受け取ったリクエストデータを検証成功/失敗で区分して返す必要があります。

- [HTTP Method]

```
POST
```
- [Content-Type]
```
application/json
```

- [Request body]
```json
{
  "data": [
    {
      "key1-1": "value1-1",
      "key2-1": "value2-1"
    },
    {
      "key1-2": "value1-2",
      "key2-2": "value2-2"
    }
  ]
}
```

- [Response body]

```json
{
  "header": {
    "resultCode": 0,
    "resultMessage": "success",
    "isSuccessful": true
  },
  "success": [
    {
      "key1-1": "value1-1",
      "key2-1": "value2-1"
    }
  ],
  "errors": [
    {
      "key1-2": "value1-2",
      "key2-2": "value2-2"
    }
  ]         
}
```