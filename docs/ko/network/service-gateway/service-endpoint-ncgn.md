서비스 게이트웨이를 이용하여 NHN Cloud 내부 네트워크로 통신할 수 있는 서비스 목록 및 각 서비스별 엔드포인트입니다.

### 서비스 게이트웨이 연동 서비스

* 아래 서비스로 서비스 게이트웨이를 생성하면 인터넷을 경유하지 않고, NHN Cloud 내부 네트워크로 접근할 수 있습니다.
    * 서비스 게이트웨이를 생성하는 방법은 [Service Gateway > 콘솔 사용 가이드](/Network/Service%20Gateway/ko/console-guide-ngsc/)를 참고하세요.
    * 아래 기재되지 않은 서비스는 [고객 센터](https://gncloud.go.kr/kr/support/inquiry)로 문의하세요.
* 서비스 게이트웨이를 생성할 수 있는 서비스 및 엔드포인트 주소입니다.
    * `/etc/hosts` 파일에 서비스 게이트웨이의 IP 주소와 접근하고자 하는 서비스 엔드포인트 주소를 추가해야 URL로 접속할 수 있습니다.
        * 예시) 192168.1.42 api-object-storage.gncloud.go.kr

| 서비스 | 서비스 게이트웨이 엔드포인트 이름 | 엔드포인트 주소 |
| --- | ------------------ | -------- |
| IaaS API Identity | IaaS API Identity | https://api-identity-infrastructure.gncloud.go.kr |
| [NHN Container Registry(NCR)](/Container/NCR/ko/overview-ncgn/) | NHN Container Registry(NCR) | 사용자 레지스트리 URI |
| [Object Storage](/Storage/Object%20Storage/ko/api-guide-ncgn/) | Object Storage | https://{region code}-api-object-storage.gncloud.go.kr |
