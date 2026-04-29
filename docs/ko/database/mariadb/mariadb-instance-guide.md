## MariaDB Instance 생성
MariaDB를 사용하려면 먼저 인스턴스를 생성해야 합니다.
![image1](http://static.toastoven.net/prod_mariadb_instance/image1.jpg)
**MariaDB Instance 생성**에 있는 **생성** 버튼을 클릭하면 **Compute > Instance > 인스턴스 생성**으로 이동합니다.

![image2](http://static.toastoven.net/prod_mariadb_instance/image2.jpg)
MariaDB 이미지를 선택하고 추가 설정을 완료하여 인스턴스를 생성합니다.

인스턴스 생성에 대한 자세한 내용은 [Instance 개요](https://docs.toast.com/ko/Compute/Instance/ko/overview/)를 참고하시기 바랍니다.

인스턴스 생성 완료 후 SSH를 사용하여 인스턴스에 접근합니다.
인스턴스에 Floating IP가 연결되어 있어야 하며 보안 그룹에서 TCP 포트 22(SSH)가 허용되어야 합니다.

![image3](http://static.toastoven.net/prod_mariadb_instance/image3.jpg)
SSH 클라이언트와 설정한 키페어를 이용해 인스턴스에 접속합니다. 
SSH 연결에 대한 자세한 가이드는 [SSH 연결 가이드](https://docs.toast.com/ko/Compute/Instance/ko/overview/#linux)를 참고하시기 바랍니다.


## MariaDB 시작/정지 방법

``` sh
# MariaDB 서비스 시작
shell> sudo systemctl start mariadb.service

# MariaDB 서비스 종료
shell> sudo systemctl stop mariadb.service

# MariaDB 서비스 재시작
shell> sudo systemctl restart mariadb.service
```

## MariaDB 접속

이미지 생성 후 초기에는 아래와 같이 접속합니다.

``` sh
shell> mysql -u root
```

패스워드 변경 후에는 아래와 같이 접속합니다.

``` sh
shell> mysql -u root -p
Enter password:
```

## MariaDB 인스턴스 생성 후 초기 설정

### 1\. 비밀번호 설정

초기 설치 후 MariaDB root 계정 비밀번호는 지정되어 있지 않습니다. 그러므로 설치 후 반드시 비밀번호를 설정해야 합니다.

```
SET PASSWORD [FOR user] = password_option

MariaDB> SET PASSWORD = PASSWORD('비밀번호');
```

### 2\. 포트\(port\) 변경

초기 설치 후 포트는 MariaDB의 기본 포트인 3306입니다. 보안상 포트 변경을 권장합니다.

#### 1) `/etc/my.cnf.d/server.cnf` 파일 수정

`/etc/my.cnf.d/server.cnf` 파일을 열어서 [mariadb] 밑에 아래와 같이 변경할 포트 주소를 입력합니다.

```
shell> sudo vi /etc/my.cnf.d/server.cnf
```

```
[mariadb]
port=[변경할 port 주소]
```

#### 2) 인스턴스 재시작
포트 변경이 적용되도록 인스턴스를 재시작합니다.
```
sudo systemctl restart mariadb.service
```
