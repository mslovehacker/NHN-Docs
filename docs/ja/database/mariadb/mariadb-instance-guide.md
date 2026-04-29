## MariaDB Instance作成
MariaDBを使用するには、まずインスタンスを作成する必要があります。
![image1](http://static.toastoven.net/prod_mariadb_instance/image1.jpg)
**MariaDB Instance作成**にある**作成** ボタンをクリックすると**Compute > Instance > インスタンス作成**に移動します。

![image2](http://static.toastoven.net/prod_mariadb_instance/image2.jpg)
MariaDBイメージを選択し、追加設定を完了してインスタンスを作成します。

インスタンス作成の詳細については[Instance概要](https://docs.toast.com/ko/Compute/Instance/ko/overview/)を参照してください。

インスタンスの作成が完了したらSSHを使用してインスタンスにアクセスします。
インスタンスにFloating IPが接続されていて、セキュリティグループでTCPポート22(SSH)が許可されている必要があります。

![image3](http://static.toastoven.net/prod_mariadb_instance/image3.jpg)
SSHクライアントと設定したキーペアを利用してインスタンスに接続します。 
SSH接続の詳細については[SSH接続ガイド](https://docs.toast.com/ko/Compute/Instance/ko/overview/#linux)を参照してください。


### MariaDB 起動/停止方法

``` sh
# MariaDBサービスの開始
shell> sudo systemctl start mariadb.service

# MariaDBサービスの終了
shell> sudo systemctl stop mariadb.service

# MariaDBサービスの再起動
shell> sudo systemctl restart mariadb.service
```

### MariaDB接続

イメージ作成後、最初は以下のように接続します。

``` sh
shell> mysql -u root
```

パスワード変更後は以下のように接続します。

``` sh
shell> mysql -u root -p
Enter password:
```

### MariaDBインスタンス作成後の初期設定

#### 1\. パスワード設定

初期インストール後、MariaDB rootアカウントパスワードは指定されていません。そのため、インストール後に必ずパスワードを設定する必要があります。

```
SET PASSWORD [FOR user] = password_option

MariaDB> SET PASSWORD = PASSWORD('パスワード');
```

#### 2\. ポート\(port\)の変更

初期インストール後のポートはMariaDBのデフォルトポートである3306です。セキュリティ上、ポートの変更を推奨します。

##### 1) `/etc/my.cnf.d/servfer.cnf`ファイルの修正

`/etc/my.cnf.d/server.cnf`ファイルを開き、[mariadb]の下に以下のように変更するポートアドレスを入力します。

```
shell> sudo vi /etc/my.cnf.d/server.cnf
```

```
[mariadb]
port=[変更するportアドレス]
```

##### 2)インスタンスの再起動
ポートの変更が適用されるようにインスタンスを再起動します。
```
sudo systemctl restart mariadb.service
```
