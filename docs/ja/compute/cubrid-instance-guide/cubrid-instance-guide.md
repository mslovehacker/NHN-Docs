## CUBRID Instance作成

CUBRIDを使用するには、まずインスタンスを作成する必要があります。

![cubrid_instance_image_1.jpg](http://static.toastoven.net/prod_cubrid_instance/cubrid_instance_image_1.jpg)

**CUBRID Instance作成**の**作成** ボタンをクリックすると**Compute > Instance > インスタンス作成**に移動します。

CUBRIDのバージョンは、次の2種類が提供されます。

![cubrid_instance_image_2.jpg](http://static.toastoven.net/prod_cubrid_instance/cubrid_instance_image_2.jpg)

* CUBRID 10.2.4
    * CUBRID-10.2.4.8884-d6808c1-Linux.x86\_64.rpm
* CUBRID 11.0.2
    * CUBRID-11.0.2.0291-a507059-Linux.x86\_64.rpm

CUBRIDイメージを選択し、追加設定を完了してインスタンスを作成します。
インスタンス作成についての詳細は[Instance概要](http://docs.toast.com/ko/Compute/Instance/ko/overview/)を参照してください。

インスタンス作成完了後、SSHを使用してインスタンスにアクセスします。
インスタンスにFloating IPが接続されていて、セキュリティグループでTCPポート22(SSH)が許可されている必要があります。

![cubrid_instance_image_3.jpg](http://static.toastoven.net/prod_cubrid_instance/cubrid_instance_image_3.jpg)

SSHクライアントと設定したキーペアを利用してインスタンスに接続します。
SSH接続の詳細については[SSH接続ガイド](https://docs.toast.com/ko/Compute/Instance/ko/overview/#linux)を参照してください。

## CUBRIDサービスの起動/停止方法

“cubrid” LinuxアカウントにログインしてCUBRIDサービスを次のように開始または終了できます。
```
# CUBRIDサービス/サーバーの起動
shell> sudo su - cubrid
shell> cubrid service start 
shell> cubrid server start demodb

# CUBRIDサービス/サーバーの終了
shell> sudo su - cubrid
shell> cubrid server stop demodb
shell> cubrid service stop 

# CUBRIDサービス/サーバーの再起動
shell> sudo su - cubrid
shell> cubrid server restart demodb
shell> cubrid service restart 

# CUBRIDブローカーの開始/終了/再起動
shell> sudo su - cubrid
shell> cubrid broker start
shell> cubrid broker stop
shell> cubrid broker restart
```

## CUBRID接続

イメージ作成後、最初は以下のように接続します。
```
shell> sudo su - cubrid
shell> csql -u dba demodb@localhost
```

## CUBRIDインスタンス作成後の初期設定

### 1\. パスワード設定

初期インストール後、CUBRID dbaアカウントのパスワードは指定されていません。そのため、インストール後に必ずパスワードを設定する必要があります。
```
shell> csql -u dba -c "ALTER USER dba PASSWORD 'new_password'" demodb@localhost
```

### 2\. ブローカーポート\(port\)の変更

**query_editor**のブローカーポートはデフォルト値が**30000**に設定され、**broker1**のブローカーポートはデフォルト値が**33000**に設定されます。
セキュリティ上、ポートの変更を推奨します。

##### 1)ブローカーファイルの修正

以下のファイルを開き、以下のように変更するポートアドレスを入力します。
```
shell> vi /opt/cubrid/conf/cubrid_broker.conf

[%query_editor]
BROKER_PORT             =[変更するportアドレス]

[%BROKER1]
BROKER_PORT             =[変更するportアドレス]
```

##### 2)ブローカーの再起動

ポートの変更を適用するためにブローカーを再起動します。
```
shell> cubrid broker restart
```

### 3\. マネージャサーバーポート\(port\)変更

マネージャサーバーポートはデフォルト値が **8001**に設定されます。 
セキュリティ上、ポート変更を推奨します。

##### 1)  cm.confファイルの修正

以下のファイルを開き、次のように変更するポートアドレスを入力します。
```
shell> vi /opt/cubrid/conf/cm.conf

cm_port =[変更するportアドレス]
```

##### 2)マネージャサーバーの再起動

ポートの変更を適用するためにマネージャを再起動します。
```
shell> cubrid manager stop
shell> cubrid manager start
```

## CUBRIDディレクトリの説明

CUBRIDディレクトリおよびファイルの説明は次のとおりです。

| 名前 | 説明 |
| --- | --- |
| database.txt | CUBRIDデータベース位置情報ファイルパス - /opt/cubrid/databases |
| CONF PATH | CUBRIDサーバー、ブローカー、マネージャ環境変数ファイルパス - /opt/cubrid/conf |
| LOG PATH | CUBRIDプロセスログファイルパス - /opt/cubrid/log |
| SQL\_LOG | CUBRID SQL Queryファイルパス /opt/cubrid/log/broker/sql\_log |
| ERROR\_LOG | CUBRID ERROR SQL Queryファイルパス - /opt/cubrid/log/broker/error\_log |
| SLOW\_LOG | CUBRID Slow Queryファイルパス - /opt/cubrid/log/broker/sql\_log |

### cubrid.conf説明

サーバー設定用ファイルです。運営するデータベースのメモリ、同時ユーザー数に応じたスレッド数、ブローカーとサーバー間の通信ポートなどを設定可能です。

| 名前 | 説明 |
| --- | --- |
| service  | CUBRIDサービス開始時に自動的に開始するプロセスを登録するパラメータです。 <br>デフォルトでserver、broker、managerプロセスが登録されています。 |
| cubrid\_port\_id | マスタープロセスが使用するポートです。 |
| max\_clients | 1つデータベースサーバープロセスが同時に接続できるクライアントの最大数です。 |
| data\_buffer\_size | データベースサーバーがメモリ内にキャッシュするデータバッファのサイズを設定するためのパラメータです。 <br>必要なメモリサイズがシステムメモリの2/3以内になるように設定することを推奨します。 |

### broker.confの説明

ブローカー設定ファイルです。運営するブローカーが使用するポート、応用サーバー(CAS)数、SQL LOGなどを設定可能です。

| 名前 | 説明 |
| --- | --- |
| BROKER\_PORT | ブローカーが使用するポートです。実際のJDBCなどのドライバーで表示されるポートは該当ブローカーのポートです。 |
| MAX\_NUM\_APPL\_SERVER | 該当ブローカーに同時接続できるCASの最大数を設定するパラメータです。 |
| MIN\_NUM\_APPL\_SERVER | 該当ブローカーへの接続リクエストがなくてもデフォルトで待機しているCASプロセスの最小数を設定するパラメータです。 |
| LOG\_DIR | SQLログが保存されるディレクトリを指定するパラメータです。 |
| ERROR\_LOG\_DIR | ブローカーのエラーログが保存されるディレクトリを指定するパラメータです。 |

### cm.confの説明

CUBRIDマネージャ設定ファイルです。運営するマネージャサーバープロセスが使用するポート、モニタリング収集サイクルなどを設定可能です。

| 名前 | 説明 |
| --- | --- |
| cm\_port | マネージャサーバープロセスが使用するポートです。 |
| cm\_process\_monitor\_interval | モニタリング情報の収集サイクルです。 |
| support\_mon\_statistic | 累積モニタリングを使用するかどうかを設定するパラメータです。 |
| server\_long\_query\_time | サーバーの診断項目のうちslow\_query項目を設定する場合、何秒以上を遅いクエリと判別するかを決定するパラメータです。 |
