## Application Service > File Crafter > API使用ガイド

### API紹介

#### APIドメイン

```
https://api-file-crafter.nhncloudservice.com
```

#### AppKey & Secret

- ヘッダにAppKeyとSecretキーを追加する必要があります。
- **CONSOLE > Application Service > File Crafter > URL & AppKey**で確認または作成できます。

### Exportリクエスト
指定されたURLに繰り返しリクエストを送った後、受け取ったレスポンスをファイルとして保存して指定されたストレージにアップロードします。ExportコールバックURLで要求されるスペックは[コールバックAPIガイド](./callback-api-guide.md)で確認できます。

#### リクエスト

- [URL]
```
POST /file-crafter/v2.0/export/files 
Content-Type: appliction/json
```

- [Header]
```json
{
  "x-tc-app-key": "String",
  "x-secret-key": "String"
}
```

- [Request body]

```json
{
  "callback": {
    "url": "http://my.service.com/api/export",
    "query": {
      "endOffset": 300,
      "pageSize": 50
    }
  },
  "exportedFile": {
    "extension": "xls",
    "maxRowCountPerFile": 1000,
    "password": "test",
    "fields": {
      "key": "headerName"
    },
    "sheets": [
      {
        "sheetName": "シート1",
        "sheetQuery": "sheetQuery1"
      }
    ]
  },
  "storages": [
    {
      "secretKey": "String",
      "bucketName": "String",
      "endPoint": "https://api-storage.cloud.toast.com",
      "region": "KR1",
      "filePath": "String",
      "fileName": "String",
      "fileFullPath": "String",
      "used": true
    }
  ],
  "searchKey": "localTestType"
}
```

| 値                             | タイプ    | 制約事項        | 必須 | 説明                                      |
|---------------------------------|----------------|----------------|-------------------------------------------|-------------------------------------------|
| callback                        | Object  | Not Null       | O   | exportのためのコールバック情報                        | 
| callback.url                    | String  | Not Blank      | O   | exportのためにFile Crafterが呼び出す必要があるURL        |
| callback.query                  | Object  |                |     | File Crafterが指定されたURLを呼び出す時に一緒に渡すquery |
| exportedFile                    | Object  | Not Null       | O   | export結果ファイル情報                         |
| exportedFile.extension          | String  | Not Null       | O   | [xls、xlsx、csv、json]                    |
| exportedFile.maxRowCountPerFile | Integer | 1000 ~ 1000000 |     | ファイルごとの最大行制限                             |
| exportedFile.password           | String  |                |     | 結果ファイルのパスワード(xls、xlsxフォーマットをサポート)                |
| exportedFile.fields             | Object  |                |     | export対象フィールドキー、項目名                     |
| exportedFile.sheets             | Array   |                |     | 複数のシートでexportする場合、シート区分クエリキー、シート名      |
| storages                        | Array   | Not Empty      |     | 結果ファイルをアップロードするstorage情報。最大5個指定可能。      |
| storages.accessKey              | String  |                |     |                                           |
| storages.secretKey              | String  |                |     |                                           |
| storages.bucketName             | String  |                |     |                                           |
| storages.endPoint               | String  |                |     |                                           |
| storages.region                 | String  |                |     |                                           |
| storages.filePath               | String  |                |     |                                           |
| storages.fileName               | String  |                |     |                                           |
| searchKey                       | String  |                |     | コンソールでリクエストを照会するのに使用する検索キー                 |

  - exportedFile.fields
      - export callbackレスポンスからキーを抽出して値でexportします。

  - ex) exportedFile.fields

```json
{
    "name": "名前",
    "number": "連絡先"
}
```

  - ex) export callback response

```json
[
    {"name": "Jason", "number": "01012341234"}, 
    {"name":"Tim", "number": "01043214321"}
]
```

  - ex) export result

| 名前 | 連絡先 |
|---|---|
| Jason |01012341234|
| Tim   |01043214321|

- exportedFile.sheets
    - export callbackをリクエストする時、sheetQueryパラメータを渡し、レスポンスをsheetNameシートにexportします。

- ex) exportedFile.fields

```json
[
    {
      "sheetQuery": "October",
      "sheetName": "10月"
    }
]
```
- ex) export callback request

```
http://my.service.com/api/export?sheetQuery=October
```

### Importリクエスト
アップロードされたファイルをパラメータ化して指定されたURLに繰り返しリクエストします。 importコールバックURLで要求されるスペックは[コールバックAPIガイド](./callback-api-guide.md)で確認できます。

#### リクエスト

- [URL]
```
POST /file-crafter/v2.0/import/files
```

- [Header]
```json
{
  "x-tc-app-key": "String",
  "x-secret-key": "String"
}
```

- [Query parameter]

| 値                   | タイプ   | 制約事項 | 必須 | 説明                                  |
|-----------------------|---------|---------|---------------------------------------|---------------------------------------|
| importingCallbackUrl | Object |         | O   | 有効性検査のためにFile Crafterが呼び出す必要があるURL   |
| validatingCallbackUrl  | String |         |     | exportのためにFile Crafterが呼び出す必要があるURL |
| isAutoImporting       | String |         |    | 有効性検査が含まれる場合                      |
| dataStartRowNum       | String | 最小2以上 |     | 実際のデータが始まる行番号                   |
| searchKey             | String |         |     | コンソールでリクエストを照会するのに使用する検索キー              |
| password              | String |         |     | 暗号化されたexcelファイルをimportする場合、そのファイルのパスワード |

### 共通レスポンス
Exportリクエスト、 Importリクエストが共通に使用するレスポンスです。

- [Response body]
```json
{
  "header": {
    "resultCode": 0,
    "resultMessage": "success",
    "isSuccessful": true
  },
  "fileId": "String"
}
```
| 値                  | タイプ    | 説明      |
|----------------------|-----------|-------|
| header               | Object  |           |
| header.resultCode    | Integer | リクエスト結果コード |
| header.resultMessage | String  | リクエスト結果メッセージ |
| header.isSuccessful  | Boolean | リクエスト処理結果 |
| fileId               | String  | リクエストID     |
