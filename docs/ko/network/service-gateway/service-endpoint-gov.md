서비스 게이트웨이를 이용하여 NHN Cloud 내부 네트워크로 통신할 수 있는 서비스 목록 및 각 서비스별 엔드포인트입니다.

### 리전 코드

* 리전 서비스는 각 리전별로 엔드포인트 주소가 다르므로 `{region code}`에 아래의 리전 코드를 기입해야 합니다.

| 리전 | 리전 코드 |
| --- | ----- |
| 한국(판교) | kr1 |
| 한국(평촌) | kr2 |

### 서비스 게이트웨이 연동 서비스

* 아래 서비스로 서비스 게이트웨이를 생성하면 인터넷을 경유하지 않고, NHN Cloud 내부 네트워크로 접근할 수 있습니다.
    * 서비스 게이트웨이를 생성하는 방법은 [Service Gateway > 콘솔 사용 가이드](/Network/Service%20Gateway/ko/console-guide-gov/)를 참고하세요.
    * 아래 기재되지 않은 서비스는 [고객 센터](https://www.gov-nhncloud.com/kr/support/inquiry)로 문의하세요.
* 서비스 게이트웨이를 생성할 수 있는 서비스 및 엔드포인트 주소입니다.
    * `/etc/hosts` 파일에 서비스 게이트웨이의 IP 주소와 접근하고자 하는 서비스 엔드포인트 주소를 추가해야 URL로 접속할 수 있습니다.
        * 예시) 192168.1.42 kr1-api-object-storage.gov-nhncloudservice.com

| 서비스 | 서비스 게이트웨이 엔드포인트 이름 | 엔드포인트 주소 |
| --- | ------------------ | -------- |
| [IaaS API Identity (gov-nhncloudservice.com)](/Compute/Compute/ko/identity-api-gov/#token) | IaaS API Identity (gov-nhncloudservice.com) | https://api-identity-infrastructure.gov-nhncloudservice.com |
| [IaaS API Key-Manager](/Network/Load%20Balancer/ko/public-api-gov/) | IaaS API Key-Manager | https://{region code}-api-key-manager-infrastructure.gov-nhncloudservice.com |
| [IaaS API Compute](/Compute/Instance/ko/public-api-gov/) | IaaS API Compute | https://{region code}-api-instance-infrastructure.gov-nhncloudservice.com |
| [IaaS API Network](/Network/VPC/ko/public-api-gov/) | IaaS API Network | https://{region code}-api-network-infrastructure.gov-nhncloudservice.com |
| [IaaS API Volume v2](/Storage/Block%20Storage/ko/public-api-gov/) | IaaS API Volume v2 | https://{region code}-api-block-storage-infrastructure.gov-nhncloudservice.com |
| [IaaS API Container - Infra](/Container/NKS/ko/gov-public-api/) | IaaS API Container - Infra | https://{region code}-api-kubernetes-infrastructure.gov-nhncloudservice.com |
| [NHN Container Registry(NCR)](/Container/NCR/ko/public-api-gov/) | NHN Container Registry(NCR)<br>API Gateway | 사용자 레지스트리 URI<br>https://{region code}-ncr.api.gov-nhncloudservice.com |
| [NHN Container Service(NCS)](/Container/NCS/ko/public-api) | API Gateway | https://{region code}-ncs.api.gov-nhncloudservice.com |
| [DNS Plus](/Network/DNS%20Plus/ko/api-guide-gov/) | API Gateway | https://dnsplus.api.gov-nhncloudservice.com |
| [Object Storage](/Storage/Object%20Storage/ko/api-guide-gov/) | Object Storage | https://{region code}-api-object-storage.gov-nhncloudservice.com |
| [RDS for MySQL](/Database/RDS%20for%20MySQL/ko/api-guide-v3.0-gov) | API Gateway | https://{region code}-rds-mysql.api.gov-nhncloudservice.com |
| [RDS for MariaDB](/Database/RDS%20for%20MariaDB/ko/api-guide-v3.0-gov/) | API Gateway | https://{region code}-rds-mariadb.api.gov-nhncloudservice.com |
| [Security Monitoring](/Security/Security%20Monitoring/ko/Overview-gov/) | API Gateway | https://{region code}-secmon.api.gov-nhncloudservice.com |
| [CDN](/Contents%20Delivery/CDN/ko/api-guide-v2.0-gov/) | API Gateway | https://cdn.api.gov-nhncloudservice.com |
| [API Gateway](/Application%20Service/API%20Gateway/ko/api-guide-v1.0-gov/) | API Gateway | https://{region code}-apigateway.api.gov-nhncloudservice.com |
| [Log & Crash Search](/Data%20&%20Analytics/Log%20&%20Crash%20Search/ko/api-guide/) | Log & Crash Search | http://api-logncrash.gov-nhncloudservice.com |
| [Pipeline](/Dev%20Tools/Pipeline/ko/api-guide-gov/) | API Gateway | https://{region code}-pipeline.api.gov-nhncloudservice.com |
| [Certificate Manager](/Management/Certificate%20Manager/ko/api-guide-v1.1-gov/) | API Gateway | https://certmanager.api.gov-nhncloudservice.com |
| [CloudTrail](/Governance%20&%20Audit/CloudTrail/ko/api-guide-gov/) | CloudTrail<br>API Gateway | https://cloud-trail.api.gov-nhncloudservice.com |
| [Resource Watcher](/Governance%20&%20Audit/Resource%20Watcher/ko/api-v2-guide-gov/) | API Gateway | https://resource-watcher.api.gov-nhncloudservice.com | 
| [API Authentication](/nhncloud/ko/public-api/api-authentication-gov/) | API Gateway | https://oauth.api.gov-nhncloudservice.com | 
| [Framework API](/nhncloud/ko/public-api/framework-api-gov/) |  API Gateway | https://core.api.gov-nhncloudservice.com | 

