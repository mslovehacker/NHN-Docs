> [参考] 
> NAS VolumeはNHN Cloudクラウドプラットフォームインフラストラクチャ内のサーバーでのみマウントすることができます。
> サーバーとNAS VolumeはプライベートIPアドレスで通信するように構成されており、外部からのアクセスが不可となります。

## NASの申請

1. **Storage > NAS(offline)** に移動した後、 **NASサービス利用申請** ボタンをクリックします。

2. 関連情報を入力します。
    * Volume名
        * NAS Volume名です。英数字8文字以内の名前を入力します。入力されたVolume名で実際のNas Volumeが作成されます。
    * VPC &サブネット
        * NASを連結するネットワークを選択します。
    * 申請サイズ(GB)  
        * NASは新規作成時、300GB以上から申請できます。必要な容量をスライダーを使って選択します。
* Snapshotの使用
        * Snapshot data保存は、NAS Volumeを使用します。Snapshotを利用した復旧は別途お問い合わせください。
        

3. NAS Volumeの作成が完了したら、メールでご案内します。

## Volumeの増設と削除

NAS利用内訳でVolumeの増設と削除ができます。Volumeの増設はNASの状態が**申請受付** 、**利用中** の時のみボタンが有効になります。

Volume増設方法：

1. **Volume増設**ボタンをクリックします。  

2. ダイアログで増設する追加容量情報を入力し、 **確認** ボタンをクリックします。

Volume削除方法：

1. **Volume削除** ボタンをクリックします。  

2. ダイアログで削除する情報を確認し、 **確認** ボタンをクリックします。


## Volume接続

### nfsパッケージのインストール

* Debian, Ubuntu： nfs-common, rpcbind  
  ```
  sudo apt-get install nfs-common rpcbind
  ```
* CentOS： nfs-utils、 rpcbind  
  ```
  sudo yum install nfs-utils rpcbind
  ```

### rpcbindサービスの実行

```
sudo service rpcbind start
```

### NAS volumeマウント

```
sudo mount -t nfs {nas source} {mount point}
```

* nas source： NAS volume情報 
 例) 192.168.0.241：/data
* mount point： NAS volumeをマウントするディレクトリ 
