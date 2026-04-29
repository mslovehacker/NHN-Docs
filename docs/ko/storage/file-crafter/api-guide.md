## Application Service > File Crafter > API 사용 가이드

### API 소개

#### API 도메인

```
https://api-file-crafter.nhncloudservice.com
```

#### AppKey & Secret

- 헤더에 AppKey와 Secret 키를 추가해야 합니다.
- **CONSOLE > Application Service > File Crafter > URL & AppKey**에서 확인하거나 생성할 수 있습니다.

### Export 요청
지정된 URL로 반복 요청을 보낸 뒤 받은 응답을 파일로 저장하여 지정된 스토리지로 업로드합니다. Export 콜백 URL에서 요구되는 스펙은 [콜백 API 가이드](./callback-api-guide.md)에서 확인하실 수 있습니다.

#### 요청

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
        "sheetName": "시트1",
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

| 값                               | 타입      | 제약 사항          | 필수  | 설명                                        |
|---------------------------------|----------------|----------------|-------------------------------------------|-------------------------------------------|
| callback                        | Object  | Not Null       | O   | export를 위한 콜백 정보                          | 
| callback.url                    | String  | Not Blank      | O   | export를 위해 File Crafter가 호출해야 할 URL        |
| callback.query                  | Object  |                |     | File Crafter가 지정된 URL을 호출하면서 함께 전달할 쿼리 |
| exportedFile                    | Object  | Not Null       | O   | export 결과 파일 정보                           |
| exportedFile.extension          | String  | Not Null       | O   | [xls, xlsx, csv, json]                    |
| exportedFile.maxRowCountPerFile | Integer | 1000 ~ 1000000 |     | 파일별 최대 행 제한                               |
| exportedFile.password           | String  |                |     | 결과 파일의 암호(xls, xlsx 포맷 지원)                |
| exportedFile.fields             | Object  |                |     | export 대상 필드 키, 항목명                       |
| exportedFile.sheets             | Array   |                |     | 다수 시트로 export 하는 경우 시트 구분 쿼리 키, 시트명       |
| storages                        | Array   | Not Empty      |     | 결과 파일을 업로드할 storage 정보. 최대 5개 지정 가능.      |
| storages.accessKey              | String  |                |     |                                           |
| storages.secretKey              | String  |                |     |                                           |
| storages.bucketName             | String  |                |     |                                           |
| storages.endPoint               | String  |                |     |                                           |
| storages.region                 | String  |                |     |                                           |
| storages.filePath               | String  |                |     |                                           |
| storages.fileName               | String  |                |     |                                           |
| searchKey                       | String  |                |     | 콘솔에서 요청을 조회하는 데 사용할 검색 키                  |

  - exportedFile.fields
      - export callback 응답에서 키를 추출하여 값으로 export 합니다.
  
  - ex) exportedFile.fields

```json
{
    "name": "이름",
    "number": "연락처"
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

| 이름 | 연락처 |
|---|---|
| Jason |01012341234|
| Tim   |01043214321|

- exportedFile.sheets
    - export callback 요청 시 sheetQuery 파라미터를 전달하고, 응답을 sheetName 시트에 export 합니다.

- ex) exportedFile.sheets

```json
[
    {
    "sheetQuery": "October",
    "sheetName": "10월"
    }
]
```
- ex) export callback request

```
http://my.service.com/api/export?sheetQuery=October
```

### Import 요청
업로드된 파일을 파라미터화 하여 지정된 URL로 반복 요청 합니다. import 콜백 URL에서 요구되는 스펙은 [콜백 API 가이드](./callback-api-guide.md)에서 확인하실 수 있습니다.

#### 요청

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

| 값                     | 타입     | 제약 사항   | 필수  | 설명                                    |
|-----------------------|---------|---------|---------------------------------------|---------------------------------------|
| importingCallbackUrl | Object |         | O   | 유효성 검사를 위해 File Crafter가 호출해야 할 URL   |
| validatingCallbackUrl  | String |         |     | export를 위해 File Crafter가 호출해야 할 URL |
| isAutoImporting       | String |         |    | 유효성 검사가 포함된 경우                        |
| dataStartRowNum       | String | 최소 2 이상 |     | 실제 데이터가 시작되는 행 번호                     |
| searchKey             | String |         |     | 콘솔에서 요청을 조회하는 데 사용할 검색 키               |
| password              | String |         |     | 암호화된 excel 파일을 import 하는 경우 해당 파일의 암호 |

### 공통 응답
Export 요청, Import 요청이 공통적으로 사용하는 응답입니다.

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
| 값                    | 타입      | 설명        |
|----------------------|-----------|-------|
| header               | Object  |           |
| header.resultCode    | Integer | 요청 결과 코드  |
| header.resultMessage | String  | 요청 결과 메시지 |
| header.isSuccessful  | Boolean | 요청 처리 결과   |
| fileId               | String  | 요청 ID     |