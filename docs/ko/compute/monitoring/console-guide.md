## 인스턴스 상태 확인

인스턴스 상태를 확인하려면 먼저 **Compute > Monitoring > Server Details**에서 모니터링할 인스턴스를 추가합니다.

**Server 이름**에서 서버를 선택하고 **추가** 버튼을 클릭하면 상세 정보를 확인할 수 있습니다. 더 이상 정보를 확인하지 않으려면 오른쪽에 있는 **삭제** 버튼을 클릭하면 됩니다. 서버 상세 정보에서 확인할 수 있는 정보는 다음과 같습니다.

- Server 이름: 서버 이름
- IP: IP 주소
- vCPU: CPU 사용량
- 메모리: 메모리 사용량
- Disk 읽기: 초당 읽은 디스크 바이트
- Disk 쓰기: 초당 쓴 디스크 바이트
- Network In: 초당 받은 네트워크 바이트
- Network Out: 초당 전송한 네트워크 바이트
- 상태: 서버 상태
- 사용 시간: 서버 구동 시간

서버 상태 그래프를 보려면 **Graph** 탭을 선택합니다.

![[그림 2 서버 상태 그래프]](http://static.toastoven.net/prod_infrastructure/monitoring/img_102.jpg)

검색 기간에 따라 그래프에 표현되는 데이터의 주기가 1분, 5분, 30분, 2시간으로 자동 변경됩니다. 더 이상 확인하고 싶지 않은 서버 그래프가 있다면 **삭제** 버튼을 클릭합니다.

> [주의]  
> 모니터링 데이터의 보관 주기는 최대 한 달입니다. 따라서 그래프의 기간은 한 달을 넘길 수 없습니다.

## 알람로그 확인

**Compute > Monitoring > Alarm Logs**에서 알람 로그 목록을 확인할 수 있습니다.

사용자가 등록한 임곗값을 초과하여 발송한 알람 목록을 확인할 수 있습니다. 특정 VM에 대한 알람 로그를 보고 싶다면 서버 이름 또는 IP 주소를 입력한 후 **검색** 버튼을 클릭합니다.

## 알람 등록

 **Compute > Monitoring > Alarm Setting**에서 **추가**를 클릭하면 알람을 등록할 수 있습니다.

**Alarm 추가** 창에서 알람을 등록할 서버를 추가하고 임곗값과  수신자를 지정합니다.

### Server 이름 선택

알람을 등록할 서버를 검색하여 추가합니다.

### 임곗값 선택

알람을 받을 인스턴스의 시스템 자원 및 임곗값을 설정합니다. 지원하는 메트릭(metric)에는 CPU 사용량, 메모리 사용량, 네트워크 사용량 및 서버 상태(server status)가 있습니다. 각 메트릭(metric)의 설명 및 입력해야 하는 임곗값의 형태는 아래와 같습니다.

|파라미터|	설명|
|---|---|
|CPU|	CPU 사용량을 뜻합니다. 0~100(%) 중 하나의 값을 입력해야 합니다.|
|메모리|	Memory 사용량을 뜻합니다. MB 단위의 절댓값을 입력합니다.|
|Network In|	받은 네트워크 사용량을 뜻합니다. 인스턴스에 연결한 각각의 이더넷 인터페이스에 대해서 바이트 단위의 절댓값을 입력합니다.|
|Network Out|	전송한 네트워크 사용량을 뜻합니다. 인스턴스에 연결한 각각의 이더넷 인터페이스에 대해서 바이트 단위의 절댓값을 입력합니다.|
|Server 다운|	서버의 상태를 뜻합니다. 여기서 말하는 서버의 상태는 외부와 통신이 가능한 상태를 정상으로 판단합니다. 해당 Metric은 별도의 값을 입력할 필요가 없습니다.|

> [주의]  
> **Server Down**을 사용하려면 별도의 Monitoring 에이전트를 해당 인스턴스에 설치해야 하며, 해당 인스턴스는 외부와 통신이 가능한 네트워크에 연결되어 있어야 합니다.

1. **Server 이름**에서 서버를 선택하고 **추가** 버튼을 클릭합니다.
2. **+ Alarm 추가**를 클릭합니다.
3. **계랑** 목록에서 설정할 메트릭을 선택합니다.
4. **임곗값**에서 조건을 선택하고 임곗값을 지정합니다.
5. 알람 수신자를 설정하기 위해 **수신자**에서 **편집** 버튼을 클릭합니다.
6. **수신자** 대화 상자가 나타나면 프로젝트 멤버를 추가합니다.

### 수신자 설정

알람을 받을 프로젝트 멤버를 선택하고, 알람을 받을 방법을 선택합니다.

**수신자** 입력 상자에 프로젝트 멤버 이메일을 입력하고 **추가** 버튼을 클릭합니다.

![[그림 6 Receiver 설정]](http://static.toastoven.net/prod_infrastructure/monitoring/img_106.png)

## 알람 수정 및 삭제

**Compute > Monitoring > Alarm Setting**에서 알람을 수정하거나 삭제할 수 있습니다.

알람을 수정하려면 목록에서 수정하고자 하는 알람 설정을 클릭합니다. 알람 등록과는 다르게 한 번에 알람 하나만 수정할 수 있습니다. 나머지는 알람 등록과 동일합니다.  
등록한 알람은 필요에 따라 활성화하거나 비활성화할 수 있습니다. 활성화 혹은 비활성화하고자 하는 알람을 목록에서 선택한 후 **활성/비활성** 버튼을 클릭하면 해당 알람을 활성화 혹은 비활성화할 수 있습니다.
등록한 알람이 더 이상 필요 없을 때에는 **삭제** 버튼을 클릭해 해당 알람을 삭제할 수 있습니다.

## 모니터링 에이전트 설치

모니터링 에이전트는 Server Down Metric을 사용할 때만 필요합니다.

### 에이전트 다운로드

[TOAST Downloads](https://docs.toast.com/en/Download/) 페이지의 **Compute > Monitoring**에서 **Agent** 파일을 다운로드합니다.

```
[root@host-192-168-0-7 ~]# wget http://static.toastoven.net/toastcloud/sdk_download/monitor/tcc/agent-centos-0.0.2.tgz
--2014-09-17 11:35:31--  http://static.toastoven.net/toastcloud/sdk_download/monitor/tcc/agent-centos-0.0.2.tgz
Connecting to http://static.toastoven.net... connected.
HTTP request sent, awaiting response... 200 OK
Length: 168329 (164K) [application/x-gzip]
Saving to: “agent-centos-0.0.2.tgz”

100%[=======================================================>]
168,329     --.-K/s   in 0.005s

2014-09-17 11:35:31 (35.6 MB/s) - “agent-centos-0.0.2.tgz” saved [168329/168329]
```

### 에이전트 설치

모니터링 에이전트는 반드시 루트(root) 권한으로 설치해야 합니다. 설치하려면 다운로드한 파일을 압축 해제한 후, 'install.sh'를 실행하면 됩니다.

```
[root@host-192-168-0-7 ~]# tar -zxvf agent-centos-0.0.2.tgz
./agent/
./agent/ssl/
./agent/ssl/cert.pem
./agent/ssl/.svn/
./agent/ssl/.svn/entries
./agent/ssl/.svn/text-base/
./agent/ssl/.svn/text-base/key.pem.svn-base
./agent/ssl/.svn/text-base/cert.pem.svn-base
./agent/ssl/.svn/tmp/
./agent/ssl/.svn/tmp/text-base/
./agent/ssl/.svn/tmp/prop-base/
./agent/ssl/.svn/tmp/props/
./agent/ssl/.svn/prop-base/
./agent/ssl/.svn/props/
./agent/ssl/.svn/all-wcprops
./agent/ssl/key.pem
./agent/conf.d/
./agent/conf.d/client.json
./agent/conf.d/rabbitmq.json
./agent/jq
./agent/sensu.repo
./agent/install.sh
./agent/plugins/
./agent/plugins/vm_checks_update.rb
./agent/plugins/VERSION
[root@host-192-168-0-7 ~]# cd agent
[root@host-192-168-0-7 ~]# sh install.sh
```

### 에이전트 상태 확인

'service sensu-client status' 명령어를 입력하여 아래와 같이 'is running'으로 나온다면 정상적으로 동작하고 있는 것입니다.

```
[root@host-192-168-0-7 ~]# /etc/init.d/sensu-client status
sensu-client (pid 9223) is running...
```

만약 위 상태가 아닐 경우 'service sensu-client start' 명령어를 이용해 수동으로 시작할 수 있습니다.

```
[root@host-192-168-0-7 ~]# /etc/init.d/sensu-client start
Starting sensu-client [ OK ]
```

### 주의 사항
모니터링 에이전트는 오픈 소스 프로젝트인 sensu를 이용했습니다. 따라서 사용자 인스턴스에 이미 다른 sensu 에이전트가 설치되어 있다면 TOAST의 모니터링 에이전트를 사용할 수 없습니다.  
또한 /etc/sensu 안의 파일들을 임의로 변조하거나 삭제할 경우 제대로 동작하지 않을 수도 있습니다.
