## Application Service > WebtoB Instance > 사용 가이드

## WebtoB Instance 생성


WebtoB를 사용하려면 먼저 인스턴스를 생성해야 합니다.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image1.png)

**WebtoB Instance 생성**에 있는 **생성** 버튼을 클릭하면 **Compute > Instance > 인스턴스 생성**으로 이동합니다.


### 이미지

기본 제공되는 이미지는 CentOS 7.8 with WebtoB5Fix4 (2022.03.22)입니다.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image2.png)


### 인스턴스 정보

* 가용성 영역: 임의의 가용성 영역 선택
* 인스턴스 이름: 생성되는 서버의 인스턴스 이름
* 인스턴스 타입
    * 원하는 타입 모두 선택 가능함
* 키 페어: PEM 키를 새로 생성하거나 기존 키를 사용, 새로 생성하는 경우 다운로드하여 보관
* 블록 스토리지 타입
    * root 볼륨, 빠른 속도를 위해 SSD를 권장
    * root full이 발생하지 않도록 최소 50GB 이상 설정

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image3.png)


### 네트워크

인스턴스에 연결할 서브넷을 선택합니다.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image4.png)

### 플로팅 IP

SSH 접속을 위해 플로팅 IP를 사용합니다.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image5.png)

### 보안 그룹

인스턴스에 SSH로 접속이 필요하므로 SSH 포트(22) 접근을 허용한 보안 그룹을 생성해 사용하여야 합니다.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image6.png)

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image7.png)



### 인스턴스 생성 완료

위 정보를 모두 입력한 후 **인스턴스 생성** 버튼을 누르면 아래와 같이 인스턴스가 생성됩니다.


![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image9.png)

WebtoB 는 `~/apps/webtob` 에 설치됩니다.


## 기동 확인

### 인스턴스 접속

인스턴스 생성 완료 후 SSH를 사용하여 인스턴스에 접근합니다.
인스턴스에 플로팅 IP가 연결되어 있어야 하며 보안 그룹에서 TCP 포트 22(SSH)가 허용되어야 합니다.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image10.png)

SSH 클라이언트와 설정한 키페어를 이용해 인스턴스에 접속합니다.
SSH 연결에 대한 자세한 가이드는 [SSH 연결 가이드](https://docs.toast.com/ko/Compute/Instance/ko/overview/#linux)<span style="color:#313338">를 참고하시기 바랍니다.</span>

### 환경 설정 파일 컴파일

wscfl 명령어를 이용하여 설정 파일을 컴파일합니다.

```
wscfl -i http.m
```

### WebtoB 기동

wsboot를 이용하여 WebtoB를 기동합니다.

```
wsboot
```

wsadmin을 이용하여 상태를 확인하거나 제어할 수 있습니다.
