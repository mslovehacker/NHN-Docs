## Application Service > File Crafter > 콜백 API 가이드

File Crafter의 import/export 기능을 이용하기 위해서는 적절한 콜백 API 제공이 필요합니다.
각 콜백 API의 요구사항을 안내합니다.

### Export 콜백

페이징 처리된 목록 조회를 위한 콜백 API 입니다. 페이징을 위해 두가지 타입의 파라미터 셋을 이용할 수 있습니다.
더 이상 조회 결과가 없을때까지 반복해서 호출하여 데이터를 export 합니다.

- [HTTP Method]

```
GET
```
- [Content-Type]

```
application/json
```

- [Query parameter]

  | 항목                 | 키                 | 비고                              |
  |--------------------|-------------------|---------------------------------|
  | 한번에 조회 할 데이터 갯수    | limit or pageSize | offset or pageNum 과 세트 사용 필수    |             
  | 페이징을 위해 건너뛸 데이터 갯수 | offset or pageNum |                                 |
  | 시트 구분 파라미터         | sheetQuery        | 다중 시트 export인 경우 시트 구분을 위한 파라미터 |                              |

- offset, limit 파라미터 셋
```json
{
  "offset": 0,
  "limit": 10
}
```

- pageNum, pageSize 파라미터 셋

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

### Import 콜백

다수 항목으로 구성된 객체 배열을 요청으로 받아 처리할 수 있는 콜백 API 입니다.

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

### Validate 콜백

Import 콜백 요청 전 적절한 데이터인지 검증할 수 있는 콜백 API 입니다. 받은 요청 데이터를 검증 성공/실패로 구분하여 반환해야 합니다.

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