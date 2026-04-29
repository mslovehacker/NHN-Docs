Direct Connect 서비스는 NHN Cloud의 IaaS 자원과 외부 네트워크(예. 고객사 온프레미스) 구간을 통신사에서 제공하는 전용 회선으로 연결하기 위한 접점입니다. 전용 회선을 이용하면 보다 안정적인 속도를 유지하고 외부 보안에도 안전한 통신을 이용할 수 있습니다.

## 주요 기능
Direct Connect는 다음과 같은 다양한 기능을 제공합니다.
* 다양한 속도: 최소 10Mbps부터 최대 10Gbps까지 대역폭을 제공합니다.
* 이중화 지원: 전용 회선 연결 접점의 이중화를 지원합니다.
* 우수한 보안성: NHN Cloud가 취득한 여러 보안 인증과 기술을 통해 전용 회선 연결 시 동일 데이터 센터 수준의 보안성을 제공합니다.
* 중립적 데이터센터: 고객이 선호하는 통신사 전용 회선 인입이 가능합니다.
* 다양한 통신 설정: L2, L3 기반 VLAN, BGP 등 다양한 통신 프로토콜을 지원합니다.

## 구성 환경 
Direct Connect가 지원하는 클라우드 구성 환경은 다음과 같습니다.

| 지원 항목 | 사양 |
| --- | --- |
| 대역폭 | 10Mbps~10Gbps |
| 회선 타입 | 이더넷(Ethernet) 방식 |
| 통신 방식 | L2(Vlan), L3(BGP, Static, IPsec) |
| 연결 방식 1 | 전용 연결 - 회선 사업자를 통한 전용 회선 연결 방식<br>- KT, LG U+, SK브로드밴드, 드림라인, 세종텔레콤 중 선택 가능(NHN Cloud에서 회선 계약 및 개통 진행)|
| 연결 방식 2 | 호스팅 연결 - N/W 파트너를 통한 클라우드 플랫폼 연결 방식<br>- [KINX 클라우드 허브](https://www.kinx.net/service/cloudhub/)<br>- [LG U+ 클라우드 멀티커넥트](https://www.lguplus.com/biz/all/telecom/idc/cloud-connection-service/B000000036)<br>- [드림라인 클라우드 익스체인지 플랫폼](https://www.dreamline.co.kr/service/cloud_overview.php)|

> [참고] *전용 연결은 NHN Cloud 위치 내 Direct connect 네트워크 포트 및 사용자의 네트워크 포트 간 물리적 연결입니다. NHN Cloud에서 고객이 희망하는 회선 사업자의 전용선을 확보하여 제공합니다.

> [참고] **호스팅 연결은 Direct Connect 제공 파트너의 네트워크 환경을 통해 프로비저닝하는 논리적(VLAN) 연결입니다. 고객이 직접 N/W 파트너의 클라우드 플랫폼을 신청할 수 있습니다.