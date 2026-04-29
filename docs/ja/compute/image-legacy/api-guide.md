## Content Delivery > Image Manager > API ガイド

Image Managerサービスの APIを説明します。


## API共通情報

### 事前準備

- API使用のためには、アプリキーが必要です。
- アプリキーはコンソール上部の"URL & Appkey"メニューで確認できます。

### リクエスト共通情報

- API呼び出し時の認証/認可のためにUser Access Keyトークンを使用します。User Access Keyトークンは、User Access Keyに基づいて発行されるBearerタイプの一時的なアクセストークンです。
- User Access Keyトークンの発行及び使用に関する詳細は、[User Access Keyトークン](/nhncloud/ja/public-api/user-access-key-token)を参照してください。

[リクエストヘッダー]

| 名前 | 値 | 説明 |
|---|---|---|
| X-NHN-AUTHORIZATION | {token} | Public APIで発行されたBearerタイプトークン |

### レスポンス共通情報

- すべてのAPIリクエストに "200 OK"で応答します。詳しいレスポンスの結果はレスポンス内容のヘッダーを参照してください。

[成功したレスポンス例]

```
{
	"header": {
		"isSuccessful": true,
		"resultCode": 0,
		"resultMessage": "Success"
	}
}
```

[失敗したレスポンス例]

```
{
	"header": {
		"isSuccessful": false,
		"resultCode": 404,
		"resultMessage": "Please check your API Url, HTTP Method."
	}
}
```


## フォルダAPI

### フォルダ作成

- 指定したパスにフォルダを作成します。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| POST | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/folders |

[リクエスト内容]

- myfolderという名前のフォルダをルートフォルダの下位に作成します。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X POST 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/folders' \
-H 'X-NHN-AUTHORIZATION: {token}' \
-H 'Content-Type: application/json' \
--data '{"path": "/myfolder"}'
```

[フィールド]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| path | String | 少なくとも 2文字、最大 255Byte | 必須 |  | 作成するフォルダの絶対パス、上位フォルダの自動生成 |

#### レスポンス

[レスポンス内容]

```
{
	"header": {
		// 省略
	},
	"folder": {
		"id": "c337256d-b17e-42ce-9f63-a792a05ae0ef",
		"name": "myfolder",
		"path": "/myfolder",
		"isFolder": true,
		"updatedAt": "2015-09-02T10:27:15+0900"
	}
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| folder | Object | フォルダ情報 |
| folder.isFolder | boolean | フォルダの有無 |
| folder.id | String | フォルダのーのユニークID |
| folder.name | String | フォルダ名 |
| folder.path | String | フォルダの絶対パス |
| folder.updatedAt | DateTime | フォルダの最終更新日 |


### フォルダ内のファイルリストの照会

- 指定したパスの配下の一覧を照会するか、名前に特定の文字を含むリストを照会します。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| GET | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/folders |

[リクエスト例]

- /myfolder の下位のフォルダとファイルを照会します。
- {appKey}と {token}はコンソールで確認した値に変更します。

```
curl -X GET 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/folders?basepath=/myfolder' \
-H 'X-NHN-AUTHORIZATION: {token}'
```

[リクエスト]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| basepath | String | 少なくとも2文字、最大255Byte | 必須 |  | 照会するフォルダの絶対パス |
| createdBy | String | 1文字 | オプション |  | リスト照会対象 <br>(空白: 全体, <br>U: ユーザーのアップロードした画像、 <br>P: オペレーションで生成された画像) |
| name | String | 少なくとも 2文字, 最大 255Byte | オプション |  | 検索する画像名 |
| page | int | 最小 1 | オプション | 1 | ページ番号 |
| rows | int | 最小 1, 最大 10,000 | オプション | 100 | 照会の表示件数 |
| sort | String | | オプション | name:asc | 並べ替えの仕方 (ソート対象 : name or date、ソート方式 : asc or dsc) |

#### レスポンス

[レスポンス例]

```
{
	"header": {
		// 省略
	},
	"paging": {
		"page": 1,
		"rows": 100,
		"totalFolderCount": 1,
		"totalFileCount": 1
	},
	"folders": [
		{
		"isFolder": true,
		"id": "5b6ad839-a920-4b88-895d-64ffc3f4d89a",
		"name": "banner",
		"path": "/myfolder/banner",
		"updatedAt": "2016-02-26T15:57:06+0900"
		}
	],
	"files": [
		{
			"isFolder": false,
			"id": "69528a77-0cc2-4407-a83d-ea4aacbe207f",
			"url": "http://image.toast.com/aaaaaag/myfolder/toast.png",
			"name": "toast.png",
			"path": "/myfolder/toast.png",
			"bytes": 10173,
			"createdBy": "U",
			"updatedAt": "2016-02-26T15:57:14+0900",
			"operationId": "",
			"queues": []
			"imageProperty": {
				"width": 90,
				"height": 90,
				"createdAt": "2016-02-26T15:56:50+0900"
				"coordinate": {
					"lat": 0,
					"lng": 0
				}
			}
		}
	]
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| paging | Object | ページング情報 |
| paging.page | int | リクエストページ情報 |
| paging.rows | int | リクエストした照会の表示数 |
| paging.totalFolderCount | long | 全フォルダ数 |
| paging.totalFileCount | long | 全ファイル数 |
| folders | List | フォルダ一覧 |
| folders[0].isFolder | boolean | フォルダの有無 |
| folders[0].id | String | フォルダのユニークID |
| folders[0].name | String | フォルダ名 |
| folders[0].path | String | フォルダの絶対パス |
| folders[0].updatedAt | DateTime | フォルダの最終更新日 |
| files | List | 画像ファイル一覧 |
| files[0].isFolder | boolean | ファイルの有無 |
| files[0].id | String | ファイルのユニークID |
| files[0].url | String | イメージサービスのURL |
| files[0].name | String | 画像ファイル名 |
| files[0].path | String | この画像ファイルの絶対パス |
| files[0].bytes | long | 画像ファイルのサイズ |
| files[0].createdBy | String | 画像区分 (U: ユーザーがアップロードした画像、 P: オペレーションで生成された画像) |
| files[0].updatedAt | DateTime | ファイルの最終更新日 |
| files[0].operationId | String | createdBy === Pの場合、参照されたオペレーションID |
| files[0].queues | List | 作業情報一覧 (当該APIでは不使用) |
| files[0].imageProperty | Object | 画像のプロパティー |
| files[0].imageProperty.width | int | 横のサイズ |
| files[0].imageProperty.height | int | 縦のサイズ |
| files[0].imageProperty.coordinate | Object | GPS情報 |
| files[0].imageProperty.createdAt | DateTime | 撮影日または作成日 |
| files[0].imageProperty.coordinate.lat | double | 緯度 |
| files[0].imageProperty.coordinate.lng | double | 経度 |


### フォルダのプロパティー照会

- フォルダのID、容量、ファイル数などのプロパティーを照会します。
- フォルダに保存されたファイルの数によっては、時間がかなりかかる場合があります。フォルダ内のファイル数および全体容量の照会が必要でない場合は、**フォルダ基本属性照会**APIを使用してください。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| GET | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/properties |

[リクエスト例]

- myfolderのフォルダのプロパティーを照会します。
- {appKey}と{token}はコンソールで確認した値に変更してください。

```
curl -X GET 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/properties?path=/myfolder' \
-H 'X-NHN-AUTHORIZATION: {token}'
```

[オプション]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| path | String | 少なくとも2文字、最大255Byte | 必須 |  | 照会するフォルダの絶対パス |

#### レスポンス

[レスポンス例]

```
{
	"header": {
		// 省略
	},
	"folder": {
		"isFolder": true,
		"id": "996dd430-5172-4178-86c9-0704e88b28e3",
		"name": "myfolder",
		"path": "/myfolder",
		"bytes": 64857,
		"totalFolderCount": 1,
		"totalFileCount": 2,
		"updatedAt": "2016-02-26T15:57:06+0900"
	}
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| folder | Object | フォルダ情報|
| folder.isFolder | boolean | フォルダの有無 |
| folder.id | String | フォルダのユニークID |
| folder.name | String | フォルダ名 |
| folder.path | String | フォルダの絶対パス |
| folder.bytes | long | フォルダサイズ (byte) |
| folder.totalFolderCount | long | 配下のフォルダ数 |
| folder.totalFileCount | long | 配下のファイル数 |
| folder.updatedAt | DateTime | 最終更新日 |

### フォルダ基本属性照会

- フォルダ属性照会APIで容量、ファイル数、フォルダ数を除外した属性を照会します。

#### リクエスト

[URI]

| メソッド | URI                                                                                 |
|---|-------------------------------------------------------------------------------------|
| GET | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/properties/simple |

[リクエスト本文]

- myfolderのフォルダの属性を照会します。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X GET 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/properties/simple?path=/myfolder' \
-H 'X-NHN-AUTHORIZATION: {token}'
```

[オプション]

| 名前 | タイプ | 有効範囲 | 必須かどうか | デフォルト値 | 説明 |
|---|---|---|---|---|---|
| path | String | 最低2文字、最大255Byte | 必須 |  | 照会するフォルダの絶対パス |

#### レスポンス

[レスポンス本文]

```
{
	"header": {
		// 省略
	},
	"folder": {
		"isFolder": true,
		"id": "996dd430-5172-4178-86c9-0704e88b28e3",
		"name": "myfolder",
		"path": "/myfolder",
		"updatedAt": "2016-02-26T15:57:06+0900"
	}
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| folder | Object | フォルダ情報 |
| folder.isFolder | boolean | フォルダの有無 |
| folder.id | String | 固有ID |
| folder.name | String | フォルダ名 |
| folder.path | String | フォルダ絶対パス |
| folder.updatedAt | DateTime | 最終修正日 |

## アップロードAPI

### 単一ファイルのアップロード

- 画像ファイルをひとつアップロードします。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| PUT | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/images |

[リクエスト例]

- /myfolderフォルダに sample.png 画像をアップロードします。
- {appKey}と{token}はコンソールで確認した値に変更します。
- 画像ファイルのBinary Dataを転送します。

```
curl -X PUT 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/images?path=/myfolder/sample.png&overwrite=true' \
-H 'X-NHN-AUTHORIZATION: {token}' \
-H 'Content-Type:application/octet-stream' \
--data-binary 'path/to/imageFile/@sample.png'
```

[オプション]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| path | String | 少なくとも2文字、最大255Byte | 必須 |  | 作成する絶対パスのファイル名 |
| overwrite | boolean |  | オプション | false | 同じ名前がある場合上書きするかどうか |
| autorename | boolean |  | オプション | false | 同じ名前がある場合<br>"名前(1).拡張子" 形式でファイル名を変更するかどうか |
| operationIds | String List |  | オプション |  | 画像オペレーションIDリスト(カンマで区分けされる) |

- 画像オペレーションIDを追加してリクエストする場合、アップロード時に希望のオプションを指定し、オペレーションファイルを作成することができます。
- [イメージオプションAPI](./api-guide/#api_4)を参照ください。

#### レスポンス

[レスポンス例]

```
{
	"header": {
		// 省略
	},
	"file": {
		"isFolder": false,
		"id": "9cf11176-045c-4708-8dbd-35633f029a91",
		"url": "http://image.toast.com/aaaaach/myfolder/sample.png",
		"name": "sample.png",
		"path": "/myfolder/sample.png",
		"bytes": 54684,
		"createdBy": "U",
		"updatedAt": "2016-02-26T16:38:34+0900",
		"operationId": "100x100",
		"imageProperty": {
			"width": 200,
			"height": 150,
			"createdAt": "2016-02-26T16:38:11+0900",
			"coordinate": {
				"lat": null,
				"lng": null
			}
		},
		"queues": [
			"queueId": "0256316c-7dcf-4940-975b-673afb62e8a3",
			"queueType": "image",
			"status": "W",
			"tryCount": 0,
			"queuedAt": "2016-02-26T16:38:11+0900",
			"operationId": "100x100",
			"url": "http://image.toast.com/aaaaach/myfolder/sample_100x100.png",
			"name": "sample_100x100.png",
			"path": "/myfolder/sample_100x100.png"
		],
	}
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| file | Object | 画像ファイルの情報 |
| file.isFolder | boolean | ファイルの有無 |
| file.id | String | ファイルのユニークID |
| file.url | String | イメージサービスURL |
| file.name | String | 画像ファイル名 |
| file.path | String | 画像の絶対パス |
| file.bytes | long | 画像ファイルのサイズ |
| file.createdBy | String | 画像ファイルの区分 (U: ユーザーがアップロードした画像、 P: オペレーションで生成された画像) |
| file.updatedAt | DateTime | 最終更新日 |
| file.operationId | String | createdBy === Pの場合、参照されたオペレーションID |
| file.imageProperty | Object | 画像のプロパティ |
| file.imageProperty.width | int | 横のサイズ |
| file.imageProperty.height | int | 縦のサイズ |
| file.imageProperty.createdAt | DateTime | 撮影日または作成日 |
| file.imageProperty.coordinate | Object | GPS情報 |
| file.imageProperty.coordinate.lat | double | 緯度 |
| file.imageProperty.coordinate.lng | double | 経度 |
| file.queues | List | operationIdsリクエストによる作業情報リスト |
| file.queues[0].queueId | String | 作業のユニークID |
| file.queues[0].queueType | String | 作業区分 (image: オペレーション, delete: ファイルまたはフォルダの削除) |
| file.queues[0].status | String | 作業状態 (W: 待機中、 D: 完了、 P: 作業中、 F: 失敗) |
| file.queues[0].tryCount | int | 再試行回数 |
| file.queues[0].queuedAt | DateTime | 作業登録日 |
| file.queues[0].operationId | String | 参照されるオペレーションID |
| file.queues[0].url | String | サービスされるイメージサービスURL |
| file.queues[0].name | String | 作成される画像名 |
| file.queues[0].path | String | 作成される画像の絶対パス |


### 複数ファイルの一括アップロード

- 複数の画像ファイルアップロードします。
- 圧縮ファイルのアップロードも可能です。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| POST | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/images |

[リクエスト例]

- /myfolder/bannerフォルダへleft.png、 right.png 画像をアップロードします。
- {appKey}と{token}はコンソールで確認した値に変更します。
- multipart/form–data 形式で転送します。

```
curl -X POST 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/images' \
-H 'X-NHN-AUTHORIZATION: {token}' \
-F 'params={"basepath": "/myfolder/banner", "overwrite": true, "operationIds":["100x100"]}' \
-F 'files=@left.png' \
-F 'files=@right.png'
```

[フィールド]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| files | multipart/form–data |  | 必須 |  | 画像ファイルリスト |
| params | String | json形式の文字列 | 必須 |  | アップロードオプション |
| params.basepath | String | 少なくとも2文字、最大255Byte | 必須 |  | アップロードする絶対パス |
| params.overwrite | boolean |  | オプション | false | 同じ名前がある場合の上書きするかどうか |
| params.autorename | boolean |  | オプション | false | 同じ名前がある場合<br>"名前(1).拡張子" の形式でファイル名を変更するかどうか |
| params.operationIds | String List |  | オプション |  | 画像オペレーションIDリスト。 <br>アプロード時、希望のオプションでオペレーションファイルを生成。 <br>画像オペレーション関連APIを参照 |
| params.callbackUrl | String |  | オプション |  | 処理結果の通知を受け取るコールバックURLのパス。 <br>cクエリ文字列にidを付与するとコールバック転送時に一緒に送信される。 <br>ポートは80番と443番のみサポート。 |

#### レスポンス

[レスポンス例]

```
{
	"header": {
		// 省略
	},
	"errors": [],
	"successes": [
		{
			"isFolder": false,
			"id": "5fa8ce52-d066-490c-85dd-f8cef181dd28",
			"url": "http://image.toast.com/aaaaach/myfolder/banner/left.png",
			"name": "left.png",
			"path": "/myfolder/banner/left.png",
			"bytes": 7322,
			"createdBy": "U",
			"updatedAt": "2016-02-26T16:56:50+0900",
			"operationId": "100x100",
			"imageProperty": {
				"width": 60,
				"height": 60,
				"createdAt": "2016-02-26T16:56:27+0900"
				"coordinate": {
					"lat": null,
					"lng": null
				}
			},
			"queues": [
				{
					"queueId": "bef1736f-6637-459e-ae10-ac0961ebf59c",
					"queueType": "image",
					"status": "W",
					"tryCount": 0,
					"queuedAt": "2016-02-26T16:56:29+0900",
					"operationId": "100x100",
					"url": "http://image.toast.com/aaaaach/myfolder/banner/left_100x100.png",
					"name": "left_100x100.png",
					"path": "/myfolder/banner/left_100x100.png"
				}
			]
		},
		{
			"isFolder": false,
			"id": "96f726bd-93e4-4f7c-ad55-56e85aa323a8",
			"url": "http://image.toast.com/aaaaach/myfolder/banner/right.png",
			"name": "right.png",
			"path": "/myfolder/banner/right.png",
			"bytes": 267801,
			"createdBy": "U",
			"updatedAt": "2016-02-26T16:56:51+0900",
			"operationId": "100x100",
			"imageProperty": {
				"width": 1440,
				"height": 2560,
				"createdAt": "2016-02-26T16:56:28+0900",
				"coordinate": {
					"lat": null,
					"lng": null
				}
			},
			"queues": [
				{
					"queueId": "6691a01a-4585-4e26-989c-8ef25dd627a0",
					"queueType": "image",
					"status": "W",
					"tryCount": 0,
					"queuedAt": "2016-02-26T16:56:29+0900",
					"operationId": "100x100",
					"url": "http://image.toast.com/aaaaach/myfolder/banner/right_100x100.png",
					"name": "right_100x100.png",
					"path": "/myfolder/banner/right_100x100.png"
				}
			]
		}
	]
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| errors | List | アップロード失敗のリスト |
| errors[0].path | String | ファイルの絶対パス |
| errors[0].bytes | long | ファイルサイズ |
| errors[0].error | Object | エラー情報 |
| errors[0].error.resultCode | int | エラーコード |
| errors[0].error.resultMessage | String | エラーメッセージ |
| successes | List | アップロード成功一覧 |
| successes[0].isFolder | boolean | フォルダの有無 |
| successes[0].id | String | ユニークID |
| successes[0].url | String | イメージサービスURL |
| successes[0].name | String | 画像名 |
| successes[0].path | String | 画像の絶対パス |
| successes[0].bytes | long | 画像ファイルサイズ |
| successes[0].createdBy | String | 画像区分 (U: ユーザーがアップロードした画像、 P: オペレーションにより生成された画像) |
| successes[0].updatedAt | DateTime | 最終更新日 |
| successes[0].operationId | String | createdBy === Pの場合、参照されたオペレーションID |
| successes[0].imageProperty | Object | 画像のプロパティ |
| successes[0].imageProperty.width | int | 横のサイズ |
| successes[0].imageProperty.height | int | 縦のサイズ |
| successes[0].imageProperty.createdAt | DateTime | 撮影日または作成日 |
| successes[0].imageProperty.coordinate | Object | GPS情報 |
| successes[0].imageProperty.coordinate.lat | double | 緯度 |
| successes[0].imageProperty.coordinate.lng | double | 経度 |
| successes[0].queues | List | operationIdsリクエストによる作業情報リスト |
| successes[0].queues[0].queueId | String | 作業のユニークID |
| successes[0].queues[0].queueType | String | 作業区分 (image: オペレーション、 delete: ファイルまたはフォルダの削除) |
| successes[0].queues[0].status | String | 作業状態 (W: 待機中、 D: 完了、 P: 作業中、 F: 失敗) |
| successes[0].queues[0].tryCount | int | 再試行回数 |
| successes[0].queues[0].queuedAt | DateTime | 作業登録日 |
| successes[0].queues[0].operationId | String | 参照されたオペレーションID |
| successes[0].queues[0].url | String | サービスされたイメージサービスURL |
| successes[0].queues[0].name | String | 作成された画像名 |
| successes[0].queues[0].path | String | 作成された画像の絶対パス |

[リクエスト結果コールバックの例]

```
{
	"header": {
		"resultMessage": "Partial Success",
		"resultCode": 1,
		"isSuccessful": false
	},
	"id": "100",
	"successFiles": [
		{
			"id": "c4de7cec-ba9c-44fa-b1fc-93e2eb29ed10",
			"name": "image.jpg",
			"path": "/myfolder/image.jpg",
			"url": "http://image.toast.com/aaaaach/myfolder/image.jpg",
			"width": 546,
			"height": 304,
			"sizeByte": 105190,
			"overwritten": true,
			"updatedAt": "2017-11-28T14:30:14+0900"
		}
	],
	"failFiles": [
		{
			"name": "test.jpg",
			"path": "/myfolder/test.jpg",
			"sizeByte": 105190,
			"resultCode": 20010,
			"resultMessage": "There is same file name."
		},
		{
			"name": "big_size.jpg",
			"path": "/myfolder/big_size.jpg",
			"sizeByte": 12925663,
			"resultCode": 11004,
			"resultMessage": "It was exceed the max volume you can upload at once."
		}
	]
}
```



## 削除API

### 単一削除 (同期)

- フォルダまたはファイルをひとつ削除します。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| DELETE | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/images/sync |

[リクエスト例]

- /myfolder/sample.pngのファイルを削除します。
- /myfolder/sample.pngのIDは右メニューの"フォルダ内ファイルリスト照会"APIで知ることができます。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X DELETE 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/images/sync?
fileId=9cf11176-045c-4708-8dbd-35633f029a91' \
-H 'X-NHN-AUTHORIZATION: {token}'
```

[フィールド]

- "folderId"または"fileId"は少なくともひとつを必ず使わなければなりません。

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| folderId | String | 最大50文字 |  |  | 削除するフォルダのID |
| fileId | String | 最大50文字 |  |  | 削除するファイルのID |
| includeThumbnail | boolean |  | オプション | false | 削除するファイルによって生成されたオペレーションファイルも削除 |

#### レスポンス

[レスポンス例]

```
{
	"header": {
		"isSuccessful": true,
		"resultCode": 0,
		"resultMessage": "Success"
	}
}
```

### 一括削除 (非同期)

- 複数のフォルダとファイルを削除します。
- 実際のデータの削除は非同期で処理されます。
- 処理結果は、レスポンスで受け取った"queueId"を用い [作業照会API](./api-guide/#api_6)を通じて確認することができます。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| DELETE | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/images/async |

[リクエスト例]

- /myfolder/banner/left.png, /myfolder/banner/right.pngのファイルを削除します。
- ファイルおよびフォルダIDは [フォルダ内ファイルリスト照会](./api-guide/#_7)を通して知ることができます。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X DELETE 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/images/async?
fileIds=5fa8ce52-d066-490c-85dd-f8cef181dd28,96f726bd-93e4-4f7c-ad55-56e85aa323a8' \
-H 'X-NHN-AUTHORIZATION: {token}'
```

[フィールド]

- "folderIds"または"fileIds"は少なくともひとつを必ず使わなければなりません。

| 名前 | タイプ | 有効な値の範囲 | 必死か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| folderIds | String | IDひとつ当たり最大50文字 |  |  | 削除するフィールドのIDリスト(カンマで区分される) |
| fileIds | String | IDひとつ当たり最大50文字 |  |  | 削除するフィールドのIDリスト (カンマで区分される) |
| includeThumbnail | boolean |  | オプション| false | 削除するファイルによって生成されたオペレーションファイルも削除 |

#### レスポンス

[レスポンス例]

```
{
	"header": {
		// 省略
	},
	"queue": {
		"tryCount": 0,
		"queueId": "f1d27571-84e1-4892-9261-7d46755d45cc",
		"queueType": "delete",
		"status": "W",
		"queuedAt": "2018-01-12T10:44:44+0900",
		"operationId": "",
		"url": "",
		"name": "",
		"path": ""
	}
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| queue | Object | 作業情報 |
| queue.queueId | String | 作業ユニークID |
| queue.queueType | String | 作業区分(delete: ファイルまたはフォルダの削除) |
| queue.status | String | 作業状態 (W: 待機中、 D: 完了、 P: 作業中、 F: 失敗) |
| queue.tryCount | int | 再試行回数 |
| queue.queuedAt | DateTime | 作業登録日 |
| queue.operationId | String | 参照されたオペレーションID |
| queue.url | String | サービスされたイメージサービスURL |
| queue.name | String | 生成された画像名 |
| queue.path | String | 生成された画像の絶対パス |


## 画像オペレーションAPI

- 画像オペレーションAPIを通じ、さまざまなサムネイルを作成することができます。
- サムネイルの大きさ、モノクロフィルター、クロップ(Rectangle, Circle, Slice)、ウォーターマークを提供

### 画像オペレーション生成と修正

- 画像処理のためのオペレーションを生成または修正します。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| PUT | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/operations/{operationId} |

[リクエスト例]

- 画像の横、縦、長い方をを基準として、サイズを100x100に縮小し、100x100という名前で作成または修正します。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X PUT 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/operations/100x100' \
-H 'X-NHN-AUTHORIZATION: {token}' \
-H 'Content-Type: application/json' \
--data '{"description": "", "realtimeService": true, "data": [{"templateOperationId": "resize_max_fit",
"option": {"resizeType": "max_fit", "width": 100, "height": 100, "quality": 80,
"upDownSizeType": "downOnly"}}]}'
```

[フィールド]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| operationId | String | 少なくとも1文字、最大20文字、 <br>英数字またはハイフン(-) | 必須 |  | 生成・修正するオペレーション名 |
| description | String | 最大30文字 | オプション |  | オペーションの説明 |
| realtimeService | boolean |  | オプション | true | リアルタイムでサービス提供するか否か |
| deleteThumbnail | boolean |  | オプション | false | 以前、当該オペレーションで生成されたサムネイルを削除するか否か |
| data | List |  | オプション |  | オペレーション作業リスト |

[dataオプション]

- サムネイルサイズ

```
{
	"templateOperationId": "resize_max_fit", 	// (required, value: resize_max_fit, resize_min_fit, resize_fix, resize_width_fit, resize_height_fit)
												// ベースとなるテンプレートID
	"option": {
		"width": int, 							// (required) 横のサイズ
		"height": int, 							// (required) 縦のサイズ
		"quality": double, 						// (optional, default: 75, value: 1~100) 品質
		"upDownSizeType": String, 				// (optional, default: downOnly, value: downOnly / upOnly / upDownAll)
												// 原本以上に拡大/縮小させるか
		"keepAnimation": boolean, 				// (optional, default: true) GIFアニメーションを維持するかどうか
		"keepExif": boolean, 					// (optional, default: true) メタ情報を維持するかどうか
		"autoOrient": boolean, 					// (optional, default: false) Orientation情報を基準に回転するかどうか
		"targetExtension": String 				// (optional, default: null) 出力フォーマット(拡張子)
	}
}
```

- モノクロフィルター

```
{
	"templateOperationId": "gray", 		// (required) ベースとなるテンプレートID
	"option": {  						// (required) オプションなし
		"keepAnimation": boolean 		// (optional, default: true) GIF アニメーションを維持するかどうか
	}
}
```

- Rectangleクロップ

```
{
	"templateOperationId": "rectangle",	// (required) ベースとなるテンプレートID
	"option": {
		"gravity": String, 				// (optional, default: Center, value: NorthWest / North / NorthEast /
										// West / Center / East / SouthWest / South / SouthEast)
										// 基準位置
		"offsetX": int,					// (optional, default: 0) 基準位置移動。 負の数は逆方向に移動
		"offsetY": int,					// (optional, default: 0) 基準位置移動。 負の数は逆方向に移動
		"width": int, 					// (required) 横サイズ
		"height": int, 					// (required) 縦サイズ
		"keepAnimation": boolean 		// (optional, default: false) GIFアニメーションを維持するかどうか
	}
}
```

- Circleクロップ

```
{
	"templateOperationId": "circle", 	// (required) ベースとなるテンプレートID
	"option": {
		"gravity": String, 				// (optional, default: Center, value: NorthWest / North / NorthEast /
										// West / Center / East / SouthWest / South / SouthEast)
										// 基準位置
		"offsetX": int,					// (optional, default: 0) 基準位置移動。 負の数は逆方向に移動
		"offsetY": int,					// (optional, default: 0) 基準位置移動。 負の数は逆方向に移動
		"radius": int 					// (required) 半径
	}
}
```

- Sliceクロップ: 横・縦の分割

```
{
	"templateOperationId": "slice",		// (required) ベースとなるテンプレートID
	"option": {
		"sliceCropType": String, 		// (optional, default: "vertical") 基準位置移動。 負の数は逆方向に移動 (vertical, horizontal)
		"sliceSize": int, 				// (optional, default: 0) 分割の大きさ
		"keepAnimation": boolean, 		// (optional, default: true) GIF アニメーションを維持するかどうか
		"callbackUrl": string 			// (optional) 処理結果の通知を受けるURLパス。ポートは80番と443番のみサポート
	}
}
```

- Sliceクロップ : 格子状分割

```
{
	"templateOperationId": "grid", 		// (required) ベースとなるテンプレートID
	"option": {
		"countX": int, 					// (Required) 横分割数
		"countY": int, 					// (Required) 縦分割数
										// オリジナルサイズによって分割する個数を分けると、分割されてできたサイズが定数にならない
										// 場合は、 設定した分割数より少ない数に分割されることがあります。
		"callbackUrl": string 			// (optional) 処理結果の通知を受けるURLパス。ポートは80番と443番のみサポート
	}
}
```

- ウォーターマーク

```
{
	"templateOperationId": "watermark", // (required) ベースとなるテンプレートID
	"option": {
		"gravity": String, 				// (optional, default: Center, value: NorthWest / North / NorthEast /
										// West / Center / East / SouthWest / South / SouthEast)
										// 基準位置
		"offsetX": int,					// (optional, default: 0) 基準位置移動。 負の数は逆方向に移動
		"offsetY": int,					// (optional, default: 0) 基準位置移動。 負の数は逆方向に移動
		"watermarkImagePath": String 	// (Required) 合成するイメージファイルのパス
	}
}
```


#### レスポンス

[レスポンス例]

```
{
	"header": {
		// 省略
	},
	"operation": {
		"appKey": {appKey},
		"operationId": "100x100",
		"description": "",
		"realtimeService": true,
 		"updatedAt": "2016-02-26T17:42:27+0900",
		"jobTemplate": [
			{
				"templateOperationId": "resize_max_fit",
				"jobType": "ResizeJob",
				"option": {
					"resizeType": "max_fit",
					"width": 100,
					"height": 100,
					"quality": 80,
					"shrinkLargerOnly": false,
					"upDownSizeType": "downOnly",
					"keepAnimation": false,
					"keepExif": true,
					"autoOrient": true,
					"targetExtension": ""
				}
			}
		]
	}
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| operation | Object | オペレーション情報 |
| operation.appKey | String | ユーザーのアプリキー |
| operation.operationId | String | オペレーション名 |
| operation.description | String | オペレーションの説明 |
| operation.realtimeService | boolean | リアルタイムでサービス提供するか否か |
| operation.updatedAt | DateTime | 最終更新日 |
| operation.jobTemplate | List | オペレーション作業リスト |
| operation.jobTemplate[0].templateOperationId | String | ベースとなるテンプレートID |
| operation.jobTemplate[0].jobType | String | オペレーション作業のタイプ |
| operation.jobTemplate[0].option | Object | オペレーション作業の内容 |

### 画像オペレーションリストの照会

- 画像のリストを照会します。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| GET | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/operations |

[リクエスト例]

- ユーザーのオペレーションリストを照会します。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X GET 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/operations' \
-H 'X-NHN-AUTHORIZATION: {token}'
```

[フィールド]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| name | String | 最大20文字、<br>英数字 | オプション |  | 検索するオペレーション名 (入力した値で開始) |
| page | int | 最小1 | オプション | 1 | ページ情報 |
| rows | int | 最大10,000 | オプション | 20 | 照会件数 |
| sort | String |  | オプション | date:desc | ソート方式 (ソート対象 : name or date, ソート方式 : asc or desc) |
| template | boolean |  | オプション | false | リスト照会対象(true: 基本オペレーション、 false: ユーザー生成オペレーション) |

#### レスポンス

[レスポンス例]

```
{
	"header": {
		// 省略
	},
	"paging": {
		"page": 1,
		"rows": 20,
		"totalCount": 1
	},
	"operations": [
		{
			"appKey": {appKey},
			"operationId": "100x100",
			"description": "",
			"realtimeService": true,
			"updatedAt": "2016-02-26T17:42:27+0900",
			"jobTemplate": [
				{
					"templateOperationId": "resize_max_fit",
					"jobType": "ResizeJob",
					"option": {
						"resizeType": "max_fit",
						"width": 100,
						"height": 100,
						"quality": 80,
						"shrinkLargerOnly": false,
						"upDownSizeType": "downOnly",
						"keepAnimation": false,
						"keepExif": true,
						"autoOrient": true,
						"targetExtension": ""
					}
				}
			]
		}
	]
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| paging | Object | ページ除法 |
| paging.page | int | リクエストページ情報 |
| paging.rows | int | リクエスト照会件数 |
| paging.totalCount | long | 総件数 |
| operations | List | オペレーションリスト |
| operations[0].appKey | String | ユーザーのアプリキー |
| operations[0].operationId | String | オペレーション名 |
| operations[0].description | String | オペレーションの説明 |
| operations[0].realtimeService | boolean | リアルタイムでサービスするか否か |
| operations[0].updatedAt | DateTime | 最終修正日 |
| operations[0].jobTemplate | List | オペレーション作業リスト |
| operations[0].jobTemplate[0].templateOperationId | String | ベースとなるテンプレートID |
| operations[0].jobTemplate[0].jobType | String | オペレーション作業タイプ |
| operations[0].jobTemplate[0].option | Object | オペレーション作業内容 |

### 画像オペレーション詳細照会

- 特定の画像オペレーションの詳細を照会します・

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| GET | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/operations/{operationId} |

[リクエスト例]

- 100x100 オペレーションを照会します。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X GET 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/operations/100x100' \
-H 'X-NHN-AUTHORIZATION: {token}'
```

#### レスポンス

[レスポンス例]

```
{
	"header": {
		// 省略
	},
	"operation": {
		"appKey": {appKey},
		"operationId": "100x100",
		"description": "",
		"realtimeService": true,
		"updatedAt": "2016-02-26T17:42:27+0900",
		"jobTemplate": [
			{
				"templateOperationId": "resize_max_fit",
				"jobType": "ResizeJob",
				"option": {
					"resizeType": "max_fit",
					"width": 100,
					"height": 100,
					"quality": 80,
					"shrinkLargerOnly": false,
					"upDownSizeType": "downOnly",
					"keepAnimation": false,
					"keepExif": true,
					"autoOrient": true,
					"targetExtension": ""
				}
			}
		]
	}
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| operation | Object | オペレーション情報 |
| operation.appKey | String | ユーザーのアプリキー |
| operation.operationId | String | オペレーション名 |
| operation.description | String | オペレーション説明 |
| operation.realtimeService | boolean | リアルタイムでサービスを提供するか否か |
| operation.updatedAt | DateTime | 最終更新日 |
| operation.jobTemplate | List | オペレーション作業リスト |
| operation.jobTemplate[0].templateOperationId | String | ベースとなるテンプレートID |
| operation.jobTemplate[0].jobType | String | オペレーション作業タイプ |
| operation.jobTemplate[0].option | Object | オペレーション作業内容 |

### 画像オペレーション削除

- 特定の画像オペレーションを削除します。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| DELETE | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/operations/{operationId} |

[リクエスト例]

- 100x100 オペレーションを削除します。
- {appKey}と{token}はコンソールで確認した値を変更します。

```
curl -X DELETE 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/operations/100x100' \
-H 'X-NHN-AUTHORIZATION: {token}'
```

[フィールド]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| deleteThumbnail | boolean |  | オプション | false | 以前に当該オペレーションで生成されたサムネイルを削除するかどうか |

#### レスポンス

[レスポンス例]

```
{
	"header": {
		"isSuccessful": true,
		"resultCode": 0,
		"resultMessage": "Success"
	}
}
```

### 画像オペレーションの実行 (非同期)

- 指定されたファイルにオペレーションを実行してサムネイルを作成します。
- 処理結果は、回答で受け取った "queueId"を用い [作業照会API](./api-guide/#api_6)を通じて確認することができます。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| POST | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/operations-exec |

[リクエスト例]

- /myfolder/left.png、 /myfolder/right.png 原本ファイルから100x100オペレーション指定が適用されたファイルを作成します。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X POST 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/operations-exec' \
-H 'X-NHN-AUTHORIZATION: {token}' \
-H 'Content-Type: application/json' \
--data '{"basepath": "/myfolder", "operationIds": ["100x100"],
"filepaths": ["/myfolder/left.png", "/myfolder/right.jpg"]}'
```

[フィールド]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| basepath | String | 少なくとも2文字、最大255Byte | 必須 |  | 基準となるフォルダの絶対パス |
| filepaths | String List |  | 必須 |  | 実行する絶対パスのフォルダもしくはファイルリスト |
| operationIds | String List |  | 必須 |  | 実行するオペレーションIDリスト |
| callbackUrl | String |  | オプション |  | 処理結果の通知を受けるURLパス、 <br>クエリ文字列にidを付与するとコールバック送信時に一緒に送信される。 <br>ポートは80番、443番のみサポート |

#### レスポンス

[レスポンス例]

```
{
	"header": {
		// 省略
	},
	"paging": {
		"page": 1,
		"rows": 20,
		"totalCount": 1
	},
	"operations": [
		{
			"appKey": {appKey},
			"operationId": "100x100",
			"description": "",
			"realtimeService": true,
			"updatedAt": "2016-02-26T17:42:27+0900",
			"jobTemplate": [
				{
					"templateOperationId": "resize_max_fit",
					"jobType": "ResizeJob",
					"option": {
						"resizeType": "max_fit",
						"width": 100,
						"height": 100,
						"quality": 80,
						"shrinkLargerOnly": false,
						"upDownSizeType": "downOnly",
						"keepAnimation": false,
						"keepExif": true,
						"autoOrient": true,
						"targetExtension": ""
					}
				}
			]
		}
	],
	"queues": [
		{
			"queueId": "6691a01a-4585-4e26-989c-8ef25dd627a0",
			"queueType": "image",
			"status": "W",
			"tryCount": 0,
			"queuedAt": "2016-02-26T16:56:29+0900",
	| オペレーション説明 |		"operationId": "100x100",
			"url": "http://alpha-image.toast.com/aaaaach/myfolder/banner/right_100x100.png",
			"name": "right_100x100.png",
			"path": "/myfolder/banner/right_100x100.png"
		}
	]
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| operations | List | 実行するオペレーションリスト |
| operations[0].appKey | String | ユーザーのアプリキー |
| operations[0].operationId | String | オペレーション名 |
| operations[0].description | String | オペレーション説明 |
| operations[0].realtimeService | boolean | リアルタイムでサービスを提供するか否か |
| operations[0].updatedAt | DateTime | 最終更新日 |
| operations[0].jobTemplate | List | オペレーション作業リスト |
| operations[0].jobTemplate[0].templateOperationId | String | ベースとなるテンプレートID |
| operations[0].jobTemplate[0].jobType | String | 作業区分 |
| operations[0].jobTemplate[0].option | Object |  作業内容 | 
| queues | List | 作業情報リスト |
| queues[0].queueId | String | 作業ユニークID |
| queues[0].queueType | String | 作業区分(image: オペレーション, delete: ファイルかフォルダの削除) |
| queues[0].status | String | 作業状態 (W: 待機中、 D: 完了、 P: 作業中、 F: 失敗) |
| queues[0].tryCount | int | 再試行回数 |
| queues[0].queuedAt | DateTime | 作業登録日 |
| queues[0].operationId | String | 参照されるオペレーションID|
| queues[0].url | String | サービスされるイメージサービスURL |
| queues[0].name | String | 生成される画像名 |
| queues[0].path | String | 生成される画像の絶対パス |

[リクエスト結果コールバック例]

```
// fail sample
{
	"header": {
		"isSuccessful": false,
		"resultCode": 500201,
		"resultMessage": "Operation fail. "
	},
	"id": "100",
	"overwritten": false,
	"operationId": "100x100",
	"sourceFile": {
		"url": "http://image.toast.com/aaaaach/myfolder/banner/left.png",
		"name": "left.png",
		"path": "/myfolder/banner/left.png"
	}
}

// success sample
{
	"header": {
		"isSuccessful": true,
		"resultCode": 0,
		"resultMessage": "Success"
	},
	"id": "100",
	"overwritten": true,
	"operationId": "slice-v",
	"sourceFile": {
		"url": "http://image.toast.com/aaaaach/myfolder/banner/vertical.png",
		"name": "vertical.png",
		"path": "/myfolder/banner/vertical.png"
	},
	"resultFiles": [
		{
			"url": "http://image.toast.com/aaaaach/myfolder/banner/vertical_slice-v_0000.png",
			"name": "vertical_slice-v_0000.png",
			"path": "/myfolder/banner/vertical_slice-v_0000.png"
		},
		{
			"url": "http://image.toast.com/aaaaach/myfolder/banner/vertical_slice-v_0001.png",
			"name": "vertical_slice-v_0001.png",
			"path": "/myfolder/banner/vertical_slice-v_0001.png"
		}
	]
}
```


## リアルタイムサービスAPI

### リアルタイムサービスの照会

- ユーザーの画像オペレーションをリアルタイムで利用するか、設定状況を照会します。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| GET | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/users |

[リクエスト例]

- ユーザーのリアルタイムサービスを照会します。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X GET 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/users' \
-H 'X-NHN-AUTHORIZATION: {token}'
```

#### レスポンス

[レスポンス例]

```
{
	"header": {
		// 省略
	},
	"user": {
		"appKey": {appkey},
		"containerName": "aaaaach",
		"realtimeService": true
	}
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| user | Object | ユーザー情報 |
| user.appKey | String | ユーザーのアプリキー |
| user.containerName | String | ユーザーのコンテナ情報 |
| user.realtimeService | boolean | リアルタイムでサービス提供するか否か |


### リアルタイムサービスの変更

- ユーザーの画像オペレーションをリアルタイムで使用するかどうかの設定内容を変更します。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| PUT | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/users |

[リクエスト例]

- ユーザーのリアルタイムサービスの設定を変更します。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X PUT 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/users' \
-H 'X-NHN-AUTHORIZATION: {token}' \
-H 'Content-Type: application/json' \
--data '{"realtimeService": false}'
```

[フィールド]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| realtimeService | boolean |  | 必須 |  | リアルタイムでサービスを提供するか否か |

#### レスポンス

[レスポンス例]

```
{
	"header": {
		"isSuccessful": true,
		"resultCode": 0,
		"resultMessage": "Success"
	}
}
```


## 作業API

### 作業照会

- 画像オペレーション処理と削除作業を照会します。

#### リクエスト

[URI]

| メソッド | URI |
|---|---|
| GET | https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appkey}/queues/{queueId} |

[リクエスト例]

- オペレーションリクエストについて現在の状態を照会します。
- {appKey}と{token}はコンソールで確認した値に変更します。

```
curl -X GET 'https://api-image.nhncloudservice.com/image/v3.0/appkeys/{appKey}/queues/6691a01a-4585-4e26-989c-8ef25dd627a0' \
-H 'X-NHN-AUTHORIZATION: {token}'
```

[フィールド]

| 名前 | タイプ | 有効な値の範囲 | 必須か否か | 既定値 | 説明 |
|---|---|---|---|---|---|
| queueId | String | 最大64文字 | 必須 |  | 照会する作業のユニークID |

#### レスポンス

[レスポンス例]

```
{
	"header": {
		"isSuccessful": true,
		"resultCode": 0,
		"resultMessage": "Success"
	},
	"queue": {
		"queueId": "6691a01a-4585-4e26-989c-8ef25dd627a0",
		"queueType": "image",
		"status": "D",
		"tryCount": 0,
		"queuedAt": "2016-02-26T16:56:52+0900",
		"operationId": "100x100",
		"url": "http://image.toast.com/aaaaach/myfolder/banner/right_100x100.png",
		"name": "right_100x100.png",
		"path": "/myfolder/banner/right_100x100.png"
	}
}
```

[フィールド]

| 名前 | タイプ | 説明 |
|---|---|---|
| queue | Object | 作業情報 |
| queue.queueId | String | 作業ユニークID |
| queue.queueType | String | 作業区分(image: オペレーション, delete: ファイルかフォルダの削除) |
| queue.status | String | 作業状態 (W: 待機中、 D: 完了、 P: 作業中、 F: 失敗) |
| queue.tryCount | int | 再試行回数 |
| queue.queuedAt | DateTime | 作業開始日 |
| queue.operationId | String | 参照されるオペレーションID|
| queue.url | String | サービスされる(された) イメージサービスURL |
| queue.name | String | 作成される(された) 画像名 |
| queue.path | String | 作成される(された) 画像の絶対パス |
