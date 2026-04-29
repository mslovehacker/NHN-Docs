# Application Service > JEUS Instance > 使用ガイド

## JEUS Instance作成

JEUSを使用するには、まずインスタンスを作成する必要があります。

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image1.png)

**JEUS Instance作成**の**作成**ボタンをクリックすると**Compute > Instance > インスタンス作成**に移動します。


### イメージ

基本提供されるイメージにはCentOS 7.8 with JEUS8Fix1(Domain Administrator Server 2022.03.22), CentOS 7.8 with JEUS8Fix1(Managed Server 2022.03.22)が含まれます。
Domain Administrator Serverをインストールするには、JEUS8Fix1(Domain Administrator Server 2022.03.22)イメージを使用します。
Managed Serverをインストールするには、CentOS 7.8 with JEUS8Fix1(Managed Server 2022.03.22)イメージを使用します。

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image2.png)


### インスタンス情報

* アベイラビリティゾーン：任意のアベイラビリティゾーンを選択
* インスタンス名：作成されるサーバーのインスタンス名
* インスタンスタイプ
    * 任意のタイプを選択可能
* キーペア：PEMキーを新しく作成するか、既存のキーを使用。新しく作成する場合はダウンロードして保管
* ブロックストレージタイプ
  * rootボリューム、 SSDを推奨(高速なため)
  * root fullが発生しないように50GB以上に設定

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image3.png)


### ネットワーク

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image4.png)

### Floating IP

SSH接続のためにFloating IPを使用します。

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image5.png)

### セキュリティグループ

インスタンスにSSHで接続する必要があるため、SSHポート(22)アクセスを許可したセキュリティグループを作成して使用する必要があります。

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image6.png)

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image7.png)



### インスタンス作成完了

上記の情報をすべて入力した後、**インスタンス作成**ボタンを押すと、以下のようにインスタンスが作成されます。


![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image9.png)

JEUSは`~/apps/jeus8にインストールされます。

インストール時、以下のプロパティで設定されます。

| 区分 | デフォルト値 |
| --- | --- |
| ドメイン名 | jeus_domain |
| WebAdminポート | 9736 |
| Adminサーバー名 | adminServer |
| AdminユーザーID | administrator |
| Adminユーザーパスワード | jeusadmin |
| ノードマネージャ | java |


## 起動確認

JEUSの設定や制御を行うにはノードマネージャを起動した後、WebAdminまたはjeusadminから制御する必要があります。

### インスタンス接続

インスタンスの作成が完了したら、SSHを使用してインスタンスにアクセスします。
インスタンスにFloating IPが接続されていて、セキュリティグループでTCPポート22(SSH)が許可されている必要があります。

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image10.png)

SSHクライアントと設定したキーペアを利用してインスタンスに接続します。
SSH接続の詳細については、[SSH接続ガイド](https://docs.toast.com/ko/Compute/Instance/ko/overview/#linux)<span style="color:#313338">を参照してください。</span>

### ノードマネージャ起動

シェルに接続してstartNodeManagerコマンドでノードマネージャを実行します。
ノードマネージャ同士の通信が必要なため、セキュリティグループに基本ポート7730の許可ルールを追加する必要があります。

### JEUS起動

Domain Administrator ServerはstartDomainAdminServerコマンドで実行します。

```
startDomainAdminServer -uadministrator -pjeusadmin
```

### JEUS WebAdmin

次のようにWebAdminを実行します。

1. DASがインストールされたインスタンスにFloating IPを設定します。
2. 該当インスタンスのセキュリティグループに9736ポートの許可ルールを追加します。
3. Webブラウザでhttp://{Floating IP}:9736/webadminに接続するとWebAdmin画面を確認できます。
