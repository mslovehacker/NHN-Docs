
## Network > Service Gateway > API v2ガイド

APIを使用するには、APIエンドポイントとトークンなどが必要です。[API使用準備](/Compute/Compute/ja/identity-api/)を参照して、API使用に必要な情報を準備します。

サービスゲートウェイAPIは`network`タイプエンドポイントを利用します。正確なエンドポイントはトークン発行レスポンスの`serviceCatalog`を参照します。

| タイプ | リージョン | エンドポイント |
|---|---|---|
| network | 韓国(パンギョ)リージョン<br>韓国(ピョンチョン)リージョン<br>韓国(光州)リージョン | https://kr1-api-network-infrastructure.nhncloudservice.com<br>https://kr2-api-network-infrastructure.nhncloudservice.com<br>https://kr3-api-network-infrastructure.nhncloudservice.com |

APIレスポンスにガイドに記載されていないフィールドが表示される場合があります。このようなフィールドは、NHN Cloudの内部用途に使用され、事前告知なしに変更される可能性があるため、使用しないでください。

## サービスゲートウェイ

### サービスゲートウェイリスト表示

```
GET /v2.0/gateways/servicegateways
X-Auth-Token: {tokenId}
```

#### リクエスト
このAPIはリクエスト本文を要求しません。

| 名前 | 種類 | 形式 | 必須 | 説明 |
|---|---|---|---|---|
| tokenId | Header | String | O | トークンID |
| id | Query | UUID | - | 照会するサービスゲートウェイID |
| name | Query | String | - | 照会するサービスゲートウェイ名 |
| service_endpoint_id | Query | UUID | - | 照会するサービスゲートウェイのサービスエンドポイントID |
| network_id | Query | UUID | - | 照会するサービスゲートウェイVPC ID |
| subnet_id | Query | UUID | - | 照会するサービスゲートウェイサブネットID |
| port_id | Query | UUID | - | 照会するサービスゲートウェイポートID |
| fixed_ip| Query | String | - | 照会するサービスゲートウェイIPアドレス |
| include_gateway_identity| Query | Boolean | - | NAT IPアドレス固定の使用有無 |


#### レスポンス

| 名前 | 種類 | 形式 | 説明 |
|---|---|---|---|
| servicegateways | Body | Array | サービスゲートウェイ情報オブジェクトリスト |
| servicegateways.id | Body | UUID | サービスゲートウェイID |
| servicegateways.name | Body | String | サービスゲートウェイ名 |
| servicegateways.port_id | Body | UUID | ポートID |
| servicegateways.tenant_id | Body | String | テナントID |
| servicegateways.network_id | Body | UUID | VPC ID |
| servicegateways.subnet_id | Body | UUID | サブネットID |
| servicegateways.fixed_ip | Body | String | サービスゲートウェイIPアドレス |
| servicegateways.include_gateway_identity| Body | Boolean | NAT IPアドレス固定の使用有無 |
| servicegateways.service_endpoint_id | Body | UUID | サービスエンドポイントID |
| servicegateways.description | Body | String | サービスゲートウェイの説明 |

<details><summary>例</summary>

```json
{
  "servicegateways": [
    {
      "status": "AVAILABLE",
      "include_gateway_identity": true,
      "description": "",
      "network_id": "55529e1d-c6ee-4be8-baa9-2b6546667e6d",
      "tenant_id": "302406c4a1d44b2cb2bc07a652c0b202",
      "fixed_ip": "192.168.0.82",
      "subnet_id": "72d9d6e0-3ee2-4287-bcf9-be45a8422ff1",
      "service_endpoint_id": "7ba5b6e7-d871-43d3-90d2-7e2beecaaae5",
      "create_time": "2023-08-31 02:11:09",
      "project_id": "302406c4a1d44b2cb2bc07a652c0b202",
      "port_id": "182a31be-9e29-400d-983b-f701cf9b4bbc",
      "id": "d383a4a3-dae7-4609-b2db-ecdf5859fac5",
      "name": "sgw_test"
    }
  ]
}
```
</details>

---
### サービスゲートウェイ表示

```
GET /v2.0/gateways/servicegateways/{serviceGatewayId}
X-Auth-Token: {tokenId}
```

#### リクエスト
このAPIはリクエスト本文を要求しません。

| 名前 | 種類 | 形式 | 必須 | 説明 |
|---|---|---|---|---|
| tokenId | Header | String | O | トークンID |
| serviceGatewayId | URL | UUID | O | サービスゲートウェイID |

#### レスポンス

| 名前 | 種類 | 形式 | 説明 |
|---|---|---|---|
| servicegateway | Body | Object | サービスゲートウェイ情報オブジェクト|
| servicegateway.id | Body | UUID | サービスゲートウェイID |
| servicegateway.name | Body | String | サービスゲートウェイ名 |
| servicegateway.port_id | Body | UUID | ポートID |
| servicegateway.tenant_id | Body | String | テナントID |
| servicegateway.network_id | Body | UUID | VPC ID |
| servicegateway.subnet_id | Body | UUID | サブネットID |
| servicegateway.fixed_ip | Body | String | サービスゲートウェイIPアドレス |
| servicegateway.include_gateway_identity| Body | Boolean | NAT IPアドレス固定の使用有無 |
| servicegateway.service_endpoint_id | Body | UUID | サービスエンドポイントID |
| servicegateway.api_endpoints | Body | Array | APIエンドポイント情報オブジェクトリスト |
| servicegateway.api_endpoints.domain_name | Body | String | APIエンドポイントドメイン |
| servicegateway.description | Body | String | サービスゲートウェイの説明 |

<details><summary>例</summary>

```json
{
  "servicegateway": {
    "status": "AVAILABLE",
    "include_gateway_identity": true,
    "description": "",
    "network_id": "55529e1d-c6ee-4be8-baa9-2b6546667e6d",
    "tenant_id": "302406c4a1d44b2cb2bc07a652c0b202",
    "fixed_ip": "192.168.0.82",
    "subnet_id": "72d9d6e0-3ee2-4287-bcf9-be45a8422ff1",
    "api_endpoints": [
      {
        "domain_name": "test.test.com"
      }
    ],
    "service_endpoint_id": "7ba5b6e7-d871-43d3-90d2-7e2beecaaae5",
    "create_time": "2023-08-31 02:11:09",
    "project_id": "302406c4a1d44b2cb2bc07a652c0b202",
    "port_id": "182a31be-9e29-400d-983b-f701cf9b4bbc",
    "id": "d383a4a3-dae7-4609-b2db-ecdf5859fac5",
    "name": "sgw_test"
  }
}
```
</details>

---
### サービスゲートウェイを作成する

```
POST /v2.0/gateways/servicegateways
X-Auth-Token: {tokenId}
```

#### リクエスト

| 名前 | 種類 | 形式 | 必須 | 説明 |
|---|---|---|---|---|
| tokenId | Header | String | O | トークンID |
| servicegateway | Body | Object | O | サービスゲートウェイ情報オブジェクト |
| servicegateway.name | Body | String | - | サービスゲートウェイ名 |
| servicegateway.description | Body | String | - | サービスゲートウェイの説明 |
| servicegateway.network_id | Body | UUID | O | VPC ID |
| servicegateway.subnet_id | Body | UUID | O | サブネットID |
| servicegateway.fixed_ip | Body | String | - | サービスゲートウェイIPアドレス |
| servicegateway.include_gateway_identity| Body | Boolean | - | NAT IPアドレス固定の使用有無 |
| servicegateway.service_endpoint_id | Body | UUID | O | サービスエンドポイントID |




<details><summary>例</summary>

```json
{
  "servicegateway": {
    "network_id": "55529e1d-c6ee-4be8-baa9-2b6546667e6d",
    "subnet_id": "72d9d6e0-3ee2-4287-bcf9-be45a8422ff1",
    "fixed_ip": "192.168.0.82",    
    "service_endpoint_id": "7ba5b6e7-d871-43d3-90d2-7e2beecaaae5",
    "name": "sgw_test",
    "description": "test"
  }
}
```
</details>

#### レスポンス

| 名前 | 種類 | 形式 | 説明 |
|---|---|---|---|
| servicegateway | Body | Object | サービスゲートウェイ情報オブジェクトリスト |
| servicegateway.id | Body | UUID | サービスゲートウェイID |
| servicegateway.name | Body | String | サービスゲートウェイ名 |
| servicegateway.port_id | Body | UUID | ポートID |
| servicegateway.tenant_id | Body | String | テナントID |
| servicegateway.network_id | Body | UUID | VPC ID |
| servicegateway.subnet_id | Body | UUID | サブネットID |
| servicegateway.fixed_ip | Body | String | サービスゲートウェイIPアドレス |
| servicegateway.include_gateway_identity| Body | Boolean | NAT IPアドレス固定の使用有無 |
| servicegateway.service_endpoint_id | Body | UUID | サービスエンドポイントID |
| servicegateway.api_endpoints | Body | Array | APIエンドポイント情報オブジェクトリスト |
| servicegateway.api_endpoints.domain_name | Body | String | APIエンドポイントドメイン |
| servicegateway.description | Body | String | サービスゲートウェイの説明 |


<details><summary>例</summary>

```json
{
  "servicegateway": {
    "status": "AVAILABLE",
    "include_gateway_identity": false,
    "description": "",
    "network_id": "55529e1d-c6ee-4be8-baa9-2b6546667e6d",
    "tenant_id": "302406c4a1d44b2cb2bc07a652c0b202",
    "fixed_ip": "192.168.0.82",
    "subnet_id": "72d9d6e0-3ee2-4287-bcf9-be45a8422ff1",
    "api_endpoints": [
      {
        "domain_name": "test.test.com"
      }
    ],
    "service_endpoint_id": "7ba5b6e7-d871-43d3-90d2-7e2beecaaae5",
    "create_time": "2023-08-31 02:11:09",
    "project_id": "302406c4a1d44b2cb2bc07a652c0b202",
    "port_id": "182a31be-9e29-400d-983b-f701cf9b4bbc",
    "id": "d383a4a3-dae7-4609-b2db-ecdf5859fac5",
    "name": "sgw_test"
  }
}
```
</details>

---
### サービスゲートウェイを修正する

```
PUT /v2.0/gateways/servicegateways/{serviceGatewayId}
X-Auth-Token: {tokenId}
```

#### リクエスト

| 名前 | 種類 | 形式 | 必須 | 説明 |
|---|---|---|---|---|
| tokenId | Header | String | O | トークンID |
| serviceGatewayId | URL | UUID | O | サービスゲートウェイID |
| servicegateway | Body | Object | O | サービスゲートウェイ情報オブジェクト |
| servicegateway.name | Body | String | - | サービスゲートウェイ名 |
| servicegateway.description | Body | String | - | サービスゲートウェイの説明 |

<details><summary>例</summary>

```json
{
  "servicegateway": {
    "name": "sgw_test1",
    "description": "test1"
  }
}
```
</details>

#### レスポンス

| 名前 | 種類 | 形式 | 説明 |
|---|---|---|---|
| servicegateway | Body | Object | サービスゲートウェイ情報オブジェクト |
| servicegateway.id | Body | UUID | サービスゲートウェイID |
| servicegateway.name | Body | String | サービスゲートウェイ名 |
| servicegateway.port_id | Body | UUID | ポートID |
| servicegateway.tenant_id | Body | String | テナントID |
| servicegateway.network_id | Body | UUID | VPC ID |
| servicegateway.subnet_id | Body | UUID | サブネットID |
| servicegateway.fixed_ip | Body | String | サービスゲートウェイIPアドレス |
| servicegateway.include_gateway_identity| Body | Boolean | NAT IPアドレス固定の使用有無 |
| servicegateway.service_endpoint_id | Body | UUID | サービスエンドポイントID |
| servicegateway.api_endpoints | Body | Array | APIエンドポイント情報オブジェクトリスト |
| servicegateway.api_endpoints.domain_name | Body | String | APIエンドポイントドメイン |
| servicegateway.description | Body | String | サービスゲートウェイの説明 |


<details><summary>例</summary>

```json
{
  "servicegateway": {
    "status": "AVAILABLE",
    "include_gateway_identity": false,
    "description": "test1",
    "network_id": "55529e1d-c6ee-4be8-baa9-2b6546667e6d",
    "tenant_id": "302406c4a1d44b2cb2bc07a652c0b202",
    "fixed_ip": "192.168.0.82",
    "subnet_id": "72d9d6e0-3ee2-4287-bcf9-be45a8422ff1",
    "api_endpoints": [
      {
        "domain_name": "test.test.com"
      }
    ],
    "service_endpoint_id": "7ba5b6e7-d871-43d3-90d2-7e2beecaaae5",
    "create_time": "2023-08-31 02:11:09",
    "project_id": "302406c4a1d44b2cb2bc07a652c0b202",
    "port_id": "182a31be-9e29-400d-983b-f701cf9b4bbc",
    "id": "d383a4a3-dae7-4609-b2db-ecdf5859fac5",
    "name": "sgw_test1"
  }
}
```
</details>

---
### サービスゲートウェイを削除する

```
DELETE /v2.0/gateways/servicegateways/{serviceGatewayId}
X-Auth-Token: {tokenId}
```

#### リクエスト
このAPIはリクエスト本文を要求しません。

| 名前 | 種類 | 形式 | 必須 | 説明 |
|---|---|---|---|---|
| tokenId | Header | String | O | トークンID |
| serviceGatewayId | URL | UUID | O | サービスゲートウェイID |


#### レスポンス
このAPIはレスポンス本文を返しません。










## サービスエンドポイント

### サービスエンドポイントリスト表示

```
GET /v2.0/gateways/serviceendpoints/
X-Auth-Token: {tokenId}
```

#### リクエスト
このAPIはリクエスト本文を要求しません。

| 名前 | 種類 | 形式 | 必須 | 説明 |
|---|---|---|---|---|
| tokenId | Header | String | O | トークンID |
| id | Query | UUID | - | 照会するサービスエンドポイントID |
| display_name | Query | UUID | - | 照会するサービスエンドポイントの名前 |



#### レスポンス

| 名前 | 種類 | 形式 | 説明 |
|---|---|---|---|
| serviceendpoints | Body | Array | サービスエンドポイント情報オブジェクトリスト |
| serviceendpoints.id | Body | UUID | サービスエンドポイントID |
| serviceendpoints.display_name | Body | String | コンソールに出力されるサービスエンドポイントの名前 |
| serviceendpoints.support_gateway_identity | Body | Boolean | NAT IPアドレス固定の使用有無 |
| serviceendpoints.description | Body | String | サービスエンドポイントの説明 |

<details><summary>例</summary>

```json
{
  "serviceendpoints": [
    {
      "display_name": "Object Storage",
      "support_gateway_identity": true,
      "description": "",
      "name": "OBS",
      "id": "7ba5b6e7-d871-43d3-90d2-7e2beecaaae5"
    }
  ]
}
```
</details>

---
### サービスエンドポイント表示

```
GET /v2.0/gateways/serviceendpoints/{seerviceEndpointId}
X-Auth-Token: {tokenId}
```

#### リクエスト
このAPIはリクエスト本文を要求しません。

| 名前 | 種類 | 形式 | 必須 | 説明 |
|---|---|---|---|---|
| tokenId | Header | String | O | トークンID |
| serviceEndpointId | URL | UUID | O | サービスエンドポイントID |

#### レスポンス

| 名前 | 種類 | 形式 | 説明 |
|---|---|---|---|
| serviceendpoint | Body | Object | サービスエンドポイント情報オブジェクト |
| serviceendpoint.id | Body | UUID | サービスエンドポイントID |
| serviceendpoint.display_name | Body | String | コンソールに出力されるサービスエンドポイントの名前 |
| serviceendpoint.support_gateway_identity | Body | Boolean | NAT IPアドレス固定の使用有無 |
| serviceendpoint.description | Body | String | サービスエンドポイントの説明 |

<details><summary>例</summary>

```json
{
  "serviceendpoint": {
      "display_name": "Object Storage",
      "support_gateway_identity": true,
      "description": "",
      "name": "OBS",
      "id": "7ba5b6e7-d871-43d3-90d2-7e2beecaaae5"
  }
}
```
</details>

---
