### 2026. 03. 13.

#### 기능 추가

##### Service Gateway
* Service Gateway 생성 시 사용자가 NAT IP를 고정하여 생성할 수 있도록 개선되었습니다.

##### Load Balancer
* 리스너별 사용자 정의 응답 설정 기능이 추가되었습니다.
* X-Forwarded-* 헤더 활성/비활성화 기능이 추가되었습니다.
* 로드 밸런서의 CPU 사용량, 리스너 단위의 통계, 소켓 연결 상태 등의 지표를 Cloud Monitoring 서비스를 통해 확인할 수 있도록 추가되었습니다.
* Public API에 Load Balancer 관련 API가 추가되었습니다. [Load Balancer API 가이드](/Network/Load%20Balancer/ko/public-api-ngsc/)를 참고하세요.

##### Private DNS
* Public API에 Private DNS 관련 API가 추가되었습니다. [Private DNS API 가이드](/Network/Private%20DNS/ko/public-api-ngsc/)를 참고하세요.

##### Flow Log
* Region peering gateway, Project peering gateway, Colocation gateway, 로드 밸런서의 네트워크 인터페이스를 대상으로 Flow Log를 생성할 수 있도록 기능이 추가되었습니다.
* Public API에 Flow Log DNS 관련 API가 추가되었습니다. [Flow Log API 가이드](/Network/Flow%20Log/ko/public-api-ngsc/)를 참고하세요.

##### Traffic Mirroring
* Public API에 Traffic Mirroring 관련 API가 추가되었습니다. [Traffic Mirroring API 가이드](/Network/Traffic%20Mirroring/ko/public-api-ngsc/)를 참고하세요.

##### NAT Gateway
* Public API에 NAT Gateway 관련 API가 추가되었습니다. [NAT Gateway API 가이드](/Network/NAT%20Gateway/ko/public-api-ngsc/)를 참고하세요.

##### Security Groups
* Public API에 Security Groups 연결 정보 조회 API가 추가되었습니다. [Security Groups API 가이드](/Network/Security%20Groups/ko/public-api-ngsc/)를 참고하세요.
* 보안 규칙 대량 생성, 보안 규칙 목록 다운로드 기능이 추가되었습니다.

##### Internet Gateway
* Public API에 Internet Gateway 관련 API가 추가되었습니다. [Internet Gateway API 가이드](/Network/Internet%20Gateway/ko/public-api-ngsc/)를 참고하세요.

##### Colocation Gateway
* Public API에 Colocation Gateway 관련 API가 추가되었습니다. [Colocation Gateway API 가이드](/Network/Colocation%20Gateway/ko/public-api-ngsc/)를 참고하세요.

##### Floating IP
* 플로팅 IP에 레이블 설정 기능이 추가되었습니다. [Floating IP 콘솔 사용 가이드](/Network/Floating%20IP/ko/console-guide/)를 참고하세요.


#### 기능 개선

##### Load Balancer 
* 여러 개의 SSL 인증서 등록/관리 기능이 콘솔에서 지원됩니다. 

##### Flow Log
* Flow Log의 파일을 OBS에 저장할 때, 폴더와 파일 이름을 자유롭게 편집할 수 있도록 개선되었습니다.


### 2025. 03. 13.

#### 기능 개선

##### Service Gateway

- Service Gateway 생성 시 사용자가 IP 주소를 지정하여 생성할 수 있도록 개선하였습니다.

##### Load Balancer

- L7 정책에서 L7 Redirect URL을 사용자가 더 세분화하여 설정할 수 있도록 개선하였습니다.
- 멤버 그룹별로 고정된 포트 번호가 아닌 각 멤버별로 지정된 포트 번호에 대하여 상태 확인을 할 수 있도록 개선되었습니다.

##### Flow Log

- Transit Hub의 연결을 대상으로 Flow Log를 생성할 수 있도록 기능이 추가되었습니다.
- Flow Log 수집 대상에 VPC 및 Subnet이 추가되었습니다.

##### Routing

- 라우트에 설명 항목이 추가되었습니다. 라우트 생성 또는 변경 시 값을 입력할 수 있으며, 라우트 정보에 표시됩니다.
- 라우트의 CIDR, 게이트웨이 항목을 변경하는 기능이 추가되었습니다.

### 2025. 01. 24.

- 신규 서비스 출시
