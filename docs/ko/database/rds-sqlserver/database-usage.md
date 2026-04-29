RDS for MS-SQL는 안정적으로 자동화된 관리, 백업 등을 제공하기 위해 내부 관리용 데이터베이스를 사용하거나 몇 가지 사용자 권한을 제한하고 있습니다.

### 관리용 데이터베이스

`rdsadmin`은 내부 관리용 데이터베이스로서, 사용자가 삭제하거나 접근할 수 없습니다.
`rdsadmin`에는 관리용 테이블 및 저장 프로시저가 등록되어 있습니다.

### 데이터베이스 이름 변경

데이터베이스의 이름을 변경하려면 일반적인 ALTER 구문 대신, 별도의 저장 프로시저 (Stored Procedure) 를 호출해야 합니다.
아래 예제는 `FOO` 데이터베이스의 이름을 `BAR`로 변경하는 예제입니다.

```sql
EXEC [master].[dbo].[rdsp_alter_database_name] N'FOO', N'BAR'
GO
```

### 데이터베이스 삭제

데이터베이스를 삭제 하려면 일반적인 DROP 구문 대신, 별도의 저장 프로시저 (Stored Procedure) 를 호출해야 합니다.
아래 예제는 `FOO` 데이터베이스를 삭제하는 예제입니다.

```sql
EXEC [master].[dbo].[rdsp_drop_database] N'FOO'
GO
```