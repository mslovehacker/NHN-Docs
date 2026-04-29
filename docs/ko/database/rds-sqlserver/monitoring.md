DB 인스턴스의 각종 성능 지표와 DB 인스턴스, 백업, 파라미터 그룹, 보안 그룹에서 발생한 각종 이벤트를 모니터링할 수 있습니다.

## 서버 대시보드

서버 대시보드에서 성능 지표를 차트 형태로 시각화해 볼 수 있습니다. 지표는 1분에 한 번씩 수집되며 최대 1년간 보관됩니다. 집계 단위별 보관 기간은 아래와 같습니다.

| 집계 단위 | 보관 기간 |
|-------|-------|
| 1분    | 1년    |

차트는 원하는 레이아웃으로 배치할 수 있으며, 레이아웃을 여러 개 생성해 목적에 따라 관리할 수 있습니다.

### 레이아웃

차트를 보기 위해서 레이아웃을 먼저 구성해야 합니다. 레이아웃은 여러 차트로 구성되며 각 차트의 위치와 크기를 저장합니다.
RDS for MS-SQL은 **기본 시스템 지표**, **기본 SQL 서버 지표** 2개의 기본 레이아웃을 제공합니다. 기본 레이아웃은 사용자가 수정, 삭제할 수 없습니다.

### 차트

DB 인스턴스의 각종 성능 지표를 차트 형태로 볼 수 있습니다. 성능 지표마다 각기 다른 형태의 차트로 구성되어 있습니다.
기본적인 시스템 지표 이외에 SQL Server의 `sys.dm_os_performance_counters`에서 제공하는 성능 지표를 차트로 제공하고 있습니다.

| 차트 | 지표 (단위) | 비고 |
| --- | --- | --- |
| CPU 사용률 | cpu used (%) | |
| CPU 상세 | cpu user (%)<br> cpu system (%)<br> cpu interrupt (%)<br> cpu privileged (%)<br> cpu processor (%) | |
| 메모리 사용량 | memory used (%) | |
| 메모리 상세 | memory used (bytes)<br> memory free (bytes) | |
| 메모리 Page 상세 | pages (count)<br> page read (count)<br> page write (count) | |
| 메모리 Page Fault | page faults (count) | |
| 메모리 Pool Page | memory pool paged (bytes) <br> memory pool nonpaged (bytes) | |
| 메모리 Standby Cache 상세 | core (bytes)<br> normal priority (bytes)<br> reserve (bytes) | |
| 메모리 Cache Fault | cache faults (count) | |
| 메모리 Transition Fault | transition faults (count) | |
| 메모리 Demand Zero Fault | zero faults (count) | |
| 스왑 사용률 | swap used (%) | |
| 스왑 사용량 | swap used (bytes)<br> swap total (bytes) | |
| 디스크 사용률 | storage used (%) | |
| 디스크 전송량 | disk read (bytes)<br> disk write (bytes) | |
| 디스크 Queue 길이 | queue length (count) | |
| 디스크 Free | disk free (bytes) | |
| 디스크 Time 상세 | disk time (%)<br> disk idle (%)<br> disk read (%)<br> disk write (%) | |
| 디스크 Split IO | split io (counts) | |
| 네트워크 전송량 | nic incoming (bytes)<br> nic outgoing (bytes) | Windows에서 사용하는 기본적인 네트워크 전송이 발생합니다. |
| 네트워크 전송률 (pps) | nic incoming (pps)<br> nic outgoing (pps) | Windows에서 사용하는 기본적인 네트워크 전송이 발생합니다. |
| 네트워크 Discarded Packet | nic incoming (pps)<br> nic outgoing (pps) | |
| 네트워크 Error Packet | nic incoming (pps)<br> nic outgoing (pps) | |
| Batch requests/sec | Batch requests/sec (count) | |
| Buffer cache hit ratio | Buffer cache hit ratio (%) | |
| Checkpoint pages/sec | Checkpoint pages/sec (count) | |
| Errors/sec | Errors/sec (count) | |
| Full Scans/sec | Full Scans/sec (count) | |
| Latch Waits/sec | Latch Waits/sec (count) | |
| Lazy writes/sec | Lazy writes/sec (count) | |
| Lock Waits/sec | Lock Waits/sec (count) | |
| Number of Deadlocks/sec | Number of Deadlocks/sec (count) | |
| Page life expectancy | Page life expectancy (seconds) | |
| Page lookups/sec | Page lookups/sec (count) | |
| SQL Compilations/sec | SQL Compilations/sec (count) | |
| SQL Re-Compilations/sec | SQL Re-Compilations/sec (count) | |
| Transactions/sec | Transactions/sec (count) | |
| User Connections | User Connections (count) | |
| Database Connection Status | Database Connection Status | 접속 불가: 0, 접속 가능: 1 |
| 시스템 Context Switch | context switches (count) | |
| 시스템 프로세스 | processes (count) | |
| 시스템 콜 | system call (count) | |
| 시스템 Up Time | uptime | |
| 시스템 Thread | treads (count) | |
| 프로세스 Handle | sql server (count)<br> sql server vss (count) | |
| 프로세스 프로세서 시간 | sql server (%)<br> sql server vss (%) | |
| 프로세스 Thread | sql server (count)<br> sql server vss (count) | |
| 프로세스 Private 메모리 크기 | sql server (bytes)<br> sql server vss (bytes) | |
| 프로세스 Virtual 메모리 크기 | sql server (bytes)<br> sql server vss (bytes) | |
| 프로세스 Working Set 메모리 크기 | sql server (bytes)<br> sql server vss (bytes) | |


## 알림 그룹

알림 그룹을 통해 성능 지표에 대한 알림을 받을 수 있습니다.
알림 그룹에 감시 대상 인스턴스와 알림을 통보받을 사용자 그룹을 지정합니다.
감시 설정을 통해 알림을 받을 성능 지표의 임곗값과 조건을 설정합니다.
설정된 지표가 감시 설정의 조건을 충족하면 연결된 사용자 그룹에 알림을 발송하게 됩니다.
알림 그룹에 설정된 알림 유형에 따라 SMS 혹은 메일로 알림을 발송합니다.

### 감시 설정

감시 설정은 항목과 비교 방법, 임곗값, 지속 시간으로 구성됩니다. 감시 설정의 지속 시간은 중요한 요소입니다. 지속 시간은 감시 대상이 지정한 임계치에 도달한 후 그 상태가 지속되는 시간을 조건으로 지정할 때 사용합니다. 예를 들어, CPU 사용률의 임계치가 90% 이상이고 지속 시간이 5분이라면, 해당 알림 그룹과 연동된 서버의 CPU 사용률이 90% 이상인 상태가 5분 이상 지속되었을 때 사용자 그룹에 정의된 사용자들에게 알림을 보냅니다. 만약 CPU 사용률이 90% 이상이 되어도, 5분 이내에 90% 미만으로 떨어지면 알림이 발생하지 않습니다.

## 사용자 그룹

알림을 받을 사용자를 그룹으로 관리할 수 있습니다. 알림 대상은 반드시 프로젝트 멤버로 등록이 되어 있어야 합니다.
사용자 그룹에 속한 사용자가 프로젝트 멤버에서 제외되면, 사용자 그룹에 속해 있다 하더라도 알림을 받을 수 없습니다.

> [주의] 실명 인증을 하지 않아 휴대폰 정보가 없는 경우 SMS 알림을 받지 못합니다.

## 이벤트

이벤트는 RDS for MS-SQL이나 사용자에 의해 발생한 중요한 사건을 의미합니다. 이벤트는 이벤트 유형, 발생 일시, 원본 소스와 메시지로 구성됩니다. 이벤트는 웹 콘솔에서 조회 가능하며, 구독을 통해 이메일, SMS, 웹훅으로 이벤트 발생 알림을 받을 수 있습니다. 이벤트의 유형과 발생 가능한 이벤트는 아래와 같습니다.

| 이벤트 유형 | 이벤트 코드 | 이벤트 메시지 |
| --- | --- | --- |
| DB_INSTANCE | DB_INSTANCE_CREATE_START | DB 인스턴스 생성 시작 |
| DB_INSTANCE | DB_INSTANCE_CREATE_END | DB 인스턴스 생성 완료 |
| DB_INSTANCE | DB_INSTANCE_CREATE_FAIL | DB 인스턴스 생성 실패 |
| DB_INSTANCE | DB_INSTANCE_SERVER_CREATE_START | DB 인스턴스 서버 생성 시작 |
| DB_INSTANCE | DB_INSTANCE_SERVER_CREATE_END | DB 인스턴스 서버 생성 종료 |
| DB_INSTANCE | DB_INSTANCE_SERVER_CREATE_FAIL | DB 인스턴스 서버 생성 실패 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_START | DB 인스턴스 백업 시작 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_END | DB 인스턴스 백업 완료 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_FAIL | DB 인스턴스 백업 실패 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_TO_OBS_START | 오브젝트 스토리지에 DB 인스턴스 백업 시작 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_TO_OBS_END | 오브젝트 스토리지에 DB 인스턴스 백업 완료 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_TO_OBS_FAIL | 오브젝트 스토리지에 DB 인스턴스 백업 실패 |
| DB_INSTANCE | DB_INSTANCE_LOG_BACKUP_FAIL | DB 인스턴스 로그 백업 실패 |
| DB_INSTANCE | DB_INSTANCE_DELETED | DB 인스턴스 삭제 |
| DB_INSTANCE | DB_INSTANCE_DELETED_FAIL | DB 인스턴스 삭제 실패 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_START | DB 인스턴스 복원 시작 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_END | DB 인스턴스 복원 완료 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_FAIL | DB 인스턴스 복원 실패 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_START | DB 인스턴스 수정 시작 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_END | DB 인스턴스 수정 완료 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_FAIL | DB 인스턴스 수정 실패 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_SECURITY_GROUP_START | DB 인스턴스 보안 그룹 변경 시작 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_SECURITY_GROUP_END | DB 인스턴스 보안 그룹 변경 완료 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_SECURITY_GROUP_FAIL | DB 인스턴스 보안 그룹 변경 실패 |
| DB_INSTANCE | DB_INSTANCE_REBOOT_START | DB 인스턴스 재시작 시작 |
| DB_INSTANCE | DB_INSTANCE_REBOOT_END | DB 인스턴스 재시작 완료 |
| DB_INSTANCE | DB_INSTANCE_REBOOT_FAIL | DB 인스턴스 재시작 실패 |
| DB_INSTANCE | DB_INSTANCE_FORCE_RESTART | DB 인스턴스 강제 재시작 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_HA_START | DB 인스턴스 고가용성 구성 복구 시작 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_HA_END | DB 인스턴스 고가용성 구성 복구 완료 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_HA_FAIL | DB 인스턴스 고가용성 구성 복구 실패 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_WITNESS_START | DB 인스턴스 감시 서버 복구 시작 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_WITNESS_END | DB 인스턴스 감시 서버 복구 완료 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_WITNESS_FAIL | DB 인스턴스 감시 서버 복구 실패 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_FROM_OBS_START | 오브젝트 스토리지로부터 백업 복원 시작 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_FROM_OBS_END | 오브젝트 스토리지로부터 백업 복원 완료 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_FROM_OBS_FAIL | 오브젝트 스토리지로부터 백업 복원 실패 |
| DB_INSTANCE | DB_INSTANCE_HYPERVISOR_MIGRATION_START | 하이퍼바이저 마이그레이션 시작 |
| DB_INSTANCE | DB_INSTANCE_HYPERVISOR_MIGRATION_END | 하이퍼바이저 마이그레이션 완료 |
| DB_INSTANCE | DB_INSTANCE_HYPERVISOR_MIGRATION_FAIL | 하이퍼바이저 마이그레이션 실패 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_HA_START | DB 인스턴스 고가용성 구성 변경 시작 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_HA_END | DB 인스턴스 고가용성 구성 변경 완료 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_HA_FAIL | DB 인스턴스 고가용성 구성 변경 실패 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PASSWORD_START | DB 인스턴스 비밀번호 변경 시작 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PASSWORD_END | DB 인스턴스 비밀번호 변경 완료 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PASSWORD_FAIL | DB 인스턴스 비밀번호 변경 실패 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PORT_START | DB 인스턴스 포트 변경 시작 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PORT_END | DB 인스턴스 포트 변경 완료 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PORT_FAIL | DB 인스턴스 포트 변경 실패 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PARAMETER_GROUP_START | DB 인스턴스 파라미터 그룹 변경 시작 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PARAMETER_GROUP_END | DB 인스턴스 파라미터 그룹 변경 완료 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PARAMETER_GROUP_FAIL | DB 인스턴스 파라미터 그룹 변경 실패 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLAVOR_START | DB 인스턴스 타입 변경 시작 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLAVOR_END | DB 인스턴스 타입 변경 완료 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLAVOR_FAIL | DB 인스턴스 타입 변경 실패 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_STORAGE_SIZE_START | DB 인스턴스 스토리지 크기 변경 시작 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_STORAGE_SIZE_END | DB 인스턴스 스토리지 크기 변경 완료 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_STORAGE_SIZE_FAIL | DB 인스턴스 스토리지 크기 변경 실패 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLOATING_IP_START | DB 인스턴스 플로팅 IP 사용 여부 변경 시작 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLOATING_IP_END | DB 인스턴스 플로팅 IP 사용 여부 변경 완료 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLOATING_IP_FAIL | DB 인스턴스 플로팅 IP 사용 여부 변경 실패 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_BACKUP_CONFIG_START | DB 인스턴스 백업 설정 변경 시작 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_BACKUP_CONFIG_END | DB 인스턴스 백업 설정 변경 완료 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_BACKUP_CONFIG_FAIL | DB 인스턴스 백업 설정 변경 실패 |
| DB_INSTANCE | DB_INSTANCE_STATUS_CHANGED_TO_AVAILABLE | DB 인스턴스 상태 정상화 |
| DB_INSTANCE | DB_INSTANCE_STATUS_CHANGED_TO_FAIL_TO_CONNECT | DB 인스턴스 접속 불가 |
| DB_INSTANCE | DB_INSTANCE_STATUS_CHANGED_TO_STORAGE_FULL | DB 인스턴스 스토리지 부족 |
| DB_INSTANCE | DB_INSTANCE_STATUS_CHANGED_TO_ERROR | DB 인스턴스 에러 |
| DB_INSTANCE | HA_AUTOMATIC_FAILOVER_START | 고가용성 DB 인스턴스 자동 장애 조치 시작 |
| DB_INSTANCE | HA_AUTOMATIC_FAILOVER_END | 고가용성 DB 인스턴스 자동 장애 조치 완료 |
| DB_INSTANCE | HA_AUTOMATIC_FAILOVER_FAIL | 고가용성 DB 인스턴스 자동 장애 조치 실패 |
| DB_INSTANCE | HA_AUTOMATIC_PROMOTE_END | 고가용성 DB 인스턴스 승격 완료 |
| DB_INSTANCE | HA_AUTOMATIC_PROMOTE_FAIL | 고가용성 DB 인스턴스 승격 실패 |
| BACKUP | BACKUP_START | 백업 시작 |
| BACKUP | BACKUP_END | 백업 완료 |
| BACKUP | BACKUP_FAIL | 백업 실패 |
| BACKUP | BACKUP_DELETED | 백업 삭제 |
| BACKUP | BACKUP_EXPORT_OBS_START | 오브젝트 스토리지로 백업 내보내기 시작 |
| BACKUP | BACKUP_EXPORT_OBS_END | 오브젝트 스토리지로 백업 내보내기 종료 |
| BACKUP | BACKUP_EXPORT_OBS_FAIL | 오브젝트 스토리지로 백업 내보내기 실패 |
| PARAMETER_GROUP | PARAMETER_GROUP_CREATED | 파라미터 그룹 생성 |
| PARAMETER_GROUP | PARAMETER_GROUP_MODIFIED | 파라미터 그룹 수정 |
| PARAMETER_GROUP | PARAMETER_GROUP_DELETED | 파라미터 그룹 삭제 |
| DB_SECURITY_GROUP | DB_SECURITY_GROUP_CREATED | DB 보안 그룹 생성 |
| DB_SECURITY_GROUP | DB_SECURITY_GROUP_MODIFIED | DB 보안 그룹 수정 |
| DB_SECURITY_GROUP | DB_SECURITY_GROUP_DELETED | DB 보안 그룹 삭제 |
| NOTIFICATION_GROUP | NOTIFICATION_GROUP_EVENT_CREATED | DB 인스턴스 이벤트 발생 |

### 이벤트 구독

이벤트 유형, 코드 및 소스로 구분하여 이벤트를 구독할 수 있습니다. '이벤트 유형'으로 구독하면 이벤트 유형에 포함된 모든 이벤트 코드의 알림을 받습니다. 알림이 너무 광범위할 경우 이벤트 코드와 소스로 세분화해 구독할 수 있습니다. 

프로젝트 멤버만 알림을 받을 사용자로 선택할 수 있습니다. 기본적으로 이메일로 이벤트 알림이 발송되며, 실명을  인증한 휴대폰 번호가 등록된 경우에만 SMS로 추가 이벤트 알림이 발송됩니다. 메일과 SMS 이외에도 웹훅을 등록하면 사전에 정의된 양식으로 HTTP 요청을 보냅니다. 웹훅의 양식은 아래와 같습니다.

#### Method, URL
```
POST {사용자가 등록한 웹훅 URL}
Content-Type: application/json;charset=UTF-8
```

#### Request Body
```json
{
    "name": "이벤트 구독 이름",
    "source": "이벤트 소스",
    "sourceId": "이벤트 소스 아이디",
    "category": "이벤트 유형",
    "code": "이벤트 코드"
}
```
