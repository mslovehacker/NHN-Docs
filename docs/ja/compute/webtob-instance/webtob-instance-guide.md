## Application Service > WebtoB Instance > 使用ガイド

## WebtoB Instance作成


WebtoBを使用するには、まずインスタンスを作成する必要があります。

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image1.png)

**WebtoB Instance作成**の**作成**ボタンをクリックすると**Compute > Instance > インスタンス作成**に移動します。


### イメージ

基本提供されるイメージはWebtoB5Fix4 with CentOS 7.8です。

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image2.png)


### インスタンス情報

* アベイラビリティゾーン：任意のアベイラビリティゾーンを選択
* インスタンス名：作成されるサーバーのインスタンス名
* インスタンスタイプ
    * 任意のタイプを選択可能
* キーペア：PEMキーを新しく作成するか、既存のキーを使用。新しく作成する場合はダウンロードして保管
* ブロックストレージタイプ
    * rootボリューム、 SSDを推奨(高速なため)
    * root fullが発生しないように50GB以上に設定

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image3.png)


### ネットワーク

インスタンスに接続するサブネットを選択します。

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image4.png)

### Floating IP

SSH接続のためにFloating IPを使用します。

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image5.png)

### セキュリティグループ

インスタンスにSSHで接続する必要があるため、SSHポート(22)アクセスを許可したセキュリティグループを作成して使用する必要があります。

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image6.png)

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image7.png)



### インスタンス作成完了

上記の情報をすべて入力した後、**インスタンス作成**ボタンを押すと、以下のようにインスタンスが作成されます。


![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image9.png)

WebtoBは`~/apps/webtob`にインストールされます。


## 起動確認

### インスタンス接続

インスタンスの作成が完了したら、SSHを使用してインスタンスにアクセスします。
インスタンスにFloating IPが接続されていて、セキュリティグループでTCPポート22(SSH)が許可されている必要があります。

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image10.png)

SSHクライアントと設定したキーペアを利用してインスタンスに接続します。
SSH接続の詳細については、[SSH接続ガイド](https://docs.toast.com/ko/Compute/Instance/ko/overview/#linux)<span style="color:#313338">を参照してください。</span>

### 環境設定ファイルのコンパイル

wscflコマンドを利用して設定ファイルをコンパイルします。

```
wscfl -i http.m
```

### WebtoB起動

wsbootを利用してWebtoBを起動します。

```
wsboot
```

wsadminを利用して状態の確認や制御を行うことができます。
