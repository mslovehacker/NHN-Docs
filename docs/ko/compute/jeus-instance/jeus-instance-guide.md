## Application Service > JEUS Instance > 사용 가이드

## JEUS Instance 생성

JEUS를 사용하려면 먼저 인스턴스를 생성해야 합니다.

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image1.png)

**JEUS Instance 생성**에 있는 **생성** 버튼을 클릭하면 **Compute > Instance > 인스턴스 생성**으로 이동합니다.


### 이미지

기본 제공되는 이미지에는 CentOS 7.8 with JEUS8Fix1(Domain Administrator Server 2022.03.22), CentOS 7.8 with JEUS8Fix1(Managed Server 2022.03.22)이 포함됩니다.
Domain Administrator Server를 설치하기 위해서는 CentOS 7.8 with JEUS8Fix1(Domain Administrator Server 2022.03.22) 이미지를 사용합니다.
Managed Server를 설치하기 위해서는 CentOS 7.8 with JEUS8Fix1(Managed Server 2022.03.22) 이미지를 사용합니다.

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image2.png)


### 인스턴스 정보

* 가용성 영역: 임의의 가용성 영역 선택
* 인스턴스 이름: 생성되는 서버의 인스턴스 이름
* 인스턴스 타입
    * 원하는 타입 모두 선택가능함
* 키 페어: PEM 키를 새로 생성하거나 기존 키를 사용, 새로 생성하는 경우 다운로드하여 보관
* 블록 스토리지 타입
    * root 볼륨, 빠른 속도를 위해 SSD를 권장
    * root full이 발생하지 않도록 최소 50GB 이상 설정

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image3.png)


### 네트워크

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image4.png)

### 플로팅 IP

SSH 접속을 위해 플로팅 IP를 사용합니다.

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image5.png)

### 보안 그룹

인스턴스에 SSH로 접속이 필요하므로 SSH 포트(22) 접근을 허용한 보안 그룹을 생성해 사용하여야 합니다.

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image6.png)

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image7.png)



### 인스턴스 생성 완료

위 정보를 모두 입력 후 **인스턴스 생성** 버튼을 누르면 아래와 같이 인스턴스가 생성됩니다.


![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image9.png)

JEUS 는 `~/apps/jeus8`에 설치됩니다.

설치 시 아래 속성들로 설정됩니다.

| 구분 | 기본값 |
| --- | --- |
| 도메인 이름 | jeus_domain |
| WebAdmin 포트 | 9736 |
| 어드민 서버 이름 | adminServer |
| 어드민 유저 아이디 | administrator |
| 어드민 유저 비밀번호 | jeusadmin |
| 노드 매니저 | java |


## 기동 확인

JEUS를 설정하거나 제어하려면 노드 매니저를 기동한 후 WebAdmin이나 jeusadmin을 통해서 제어해야 합니다.

### 인스턴스 접속

인스턴스 생성 완료 후 SSH를 사용하여 인스턴스에 접근합니다.
인스턴스에 플로팅 IP가 연결되어 있어야 하며 보안 그룹에서 TCP 포트 22(SSH)가 허용되어야 합니다.

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image10.png)

SSH 클라이언트와 설정한 키페어를 이용해 인스턴스에 접속합니다.
SSH 연결에 대한 자세한 가이드는[SSH 연결 가이드](https://docs.toast.com/ko/Compute/Instance/ko/overview/#linux)<span style="color:#313338">를 참고하시기 바랍니다.</span>

### 노드 매니저 기동

셸로 접속하여 startNodeManager 명령어로 노드 매니저를 실행합니다.
노드 매니저끼리 통신이 필요하므로 보안 그룹에 기본 포트인 7730에 대한 허용 규칙을 추가해야 합니다.

### JEUS 기동

Domain Administrator Server는 startDomainAdminServer 명령어로 실행합니다.

```
startDomainAdminServer -uadministrator -pjeusadmin
```

### JEUS WebAdmin

다음과 같이 WebAdmin을 실행합니다.

1. DAS가 설치된 인스턴스에 플로팅 IP를 설정합니다.
2. 해당 인스턴스의 보안 그룹에 9736 포트에 대한 허용 규칙을 추가합니다.
3. 웹 브라우저에서 http://{플로팅 IP}:9736/webadmin으로 접속하면 WebAdmin 화면을 볼 수 있습니다.

