## PostgreSQL Instance 생성

PostgreSQL을 사용하기 위해서 먼저 인스턴스를 생성해야 합니다.

![postgresql_guide_ko_01_20201218.png](https://static.toastoven.net/prod_postgresql/postgresql_guide_ko_01_20201218.png)

**PostgreSQL Instance 생성** 버튼을 클릭하면 **Compute > Instance > 인스턴스 생성**으로 이동합니다.

PostgreSQL 버전은 다음과 같이 4가지 종류가 제공됩니다.
* PostgreSQL 10
* PostgreSQL 11
* PostgreSQL 12
* PostgreSQL 13

![postgresql_guide_ko_02_20201218.png](https://static.toastoven.net/prod_postgresql/postgresql_guide_ko_02_20201218.png)

PostgreSQL 버전을 선택하고 추가 설정을 완료한 후 인스턴스를 생성합니다. 인스턴스 생성에 대한 자세한 내용은 [Instance 개요](http://docs.toast.com/ko/Compute/Instance/ko/overview/)를 참고하시기 바랍니다.

`This guide is created based on Ver. 13.`  
`If you are using a different version, please makes changes accordingly in consideration of the version.`

## How to start/stop PostgreSQL

```
#Start postgresql service
shell> systemctl start postgresql-13

#Stop postgresql service
shell> systemctl stop postgresql-13

#Restart postgresql service
shell> systemctl restart postgresql-13
```

## Log in to PostgreSQL

In the beginning after creating an image, log in as shown below.
<br>

```
#Switch account to postgres and log in
shell> su - postgres
shell> psql
```

## Create PostgreSQL instance and perform initial setup

### 1\. Change port

The image port provided is 5432, the default PostgreSQL port. Port change is recommended for security purposes.
<br>

```
shell> vi /var/lib/pgsql/13/data/postgresql.conf


#Specify the port to be used in the postgresql.conf file.

port =name of the port to use


#Save vi editor


#Restart postgresql service

shell> systemctl restart postgresql-13


#Log in with the changed port as shown below

shell> psql -p[changed port number]
```

### 2\. Change server log timezone

The default timezone recorded in the server log is set to UTC. It is recommended to change it to match the local time of the SYSTEM.
<br>

```
shell> vi /var/lib/pgsql/13/data/postgresql.conf


#Specify the timezone to be used in the postgresql.conf file.

log_timezone = timezone to use


#Save vi editor


#Restart postgresql service

shell> systemctl restart postgresql-13


#Log in to postgresql

shell> psql


#Check the changed settings

postgres=# SHOW log_timezone;
```

### 3\. Cancel public schema permission

Since all users are provided with CREATE and USAGE permissions for public schema by default, users who can log in to the DB can create objects in public schema. It is recommended to cancel the permissions so that no users can create objects in public schema.
<br>

```
#Log in to postgresql

shell> psql


#Run permission cancellation command

postgres=# REVOKE CREATE ON SCHEMA public FROM PUBLIC;
```

### 4\. Allow remote login

To allow logins other than local host, you need to change the listen_addresses variable and client authentication setup file.
<br>

```
shell> vi /var/lib/pgsql/13/data/postgresql.conf


#Specify the address to be used in the postgresql.conf file.
#To allow all IPv4 addresses, 0.0.0.0
#To allow all IPv6 addresses, ::
#To allow all addresses, *

listen_addresses = address to allow


#Save vi editor


shell> vi /var/lib/pgsql/13/data/pg_hba.conf


#Client authentication control per IP address format
#Since old client library is not supported by scram-sha-256, it needs to be changed to md5

# TYPE  DATABASE        USER            ADDRESS                 METHOD
# IPv4 local connections:
host    all             all             127.0.0.1/32            scram-sha-256
host    allowed DB           allowed user          allowed address                   scram-sha-256
# IPv6 local connections:
host    all             all             ::1/128                 scram-sha-256
host    allowed DB           allowed user          allowed address                   scram-sha-256


#Restart postgresql service

shell> systemctl restart postgresql-13
```

## PostgreSQL directory description

PostgreSQL directory and file description is as follows:

| Name           | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| postgresql.cnf | /var/lib/pgsql/{version}/data/postgresql.cnf                 |
| initdb.log     | PostgreSQL database cluster creation log - /var/lib/pgsql/{version}/initdb.log |
| DATADIR        | PostgreSQL data file path - /var/lib/pgsql/{version}/data/   |
| LOG            | PostgreSQL log file path - /var/lib/pgsql/{version}/data/log/\*.log |
