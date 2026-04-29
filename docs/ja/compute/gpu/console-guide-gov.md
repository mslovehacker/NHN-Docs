## GPU Instanceの有効化

GPU Instanceを使用するには、先にCompute > GPU Instance作成をリクエストする必要があります。

**サービス選択 > GPU Instanceをクリックします。**

![GPU_Instance_activation_1_modify.png](http://static.toastoven.net/prod_gpu/en_GPU_Instance_activation_1_modify.png)  

**サービス有効化確認ボタンをクリックします。**

![GPU_Instance_activation_2_modify.png](http://static.toastoven.net/prod_gpu/en_GPU_Instance_activation_2_modify.png)



## GPU Instance作成リクエスト

**Compute > GPU Instanceに移動し、申請(1：1お問い合わせ)ボタンをクリックします。**

![GPU_Instance_apply_1_modify.png](http://static.toastoven.net/prod_gpu/en_GPU_Instance_apply_1_modify.png)


**お問い合わせのタイトルと内容を入力し、確認ボタンをクリックします。**

![GPU_Instance_apply_2_modify.png](http://static.toastoven.net/prod_gpu/en_GPU_Instance_apply_2_modify.png)


**GPU Instance作成をリクエストする時に入力する内容**

```
GPUを使用するための関連情報を入力します。
=============================================================================
* 顧客TOAST ID email (ex. email@toast.com) :

* 顧客プロジェクトID (ex. ae1bfd024d8841a295988638d90979a4)：
   Network > VPC > サブネット > プロジェクトIDで確認できます。

* アベイラビリティゾーン(ex. pub-a)：
  pub-a、pub-bのどちらかを選択できます。

* インストールするインスタンスの名前(ex. gpu-instance-001)：
   20文字以内で作成してください。英数字、'-'、'.'のみ入力できます。

* インスタンスのタイプと数(ex. g2.c8m96 1台)：
   g2.c8m96：8 Core、Memory 96 GB + GPU 1個
   g2.c16m192：16 Core、Memory 192 GB + GPU 2個

* インストールするインスタンスで使用するキーペア名(ex. gpu_connect_key)：
 希望するキーペアがない場合は作成してください。

* インスタンスのブロックストレージのタイプとサイズ(GB) (ex. HDD 100 GB)：
 ブロックストレージのタイプ：SSDとHDDから選択できます。
 ブロックストレージのサイズは20GB～1000GBで作成できます。

* 接続する必要があるSubnet情報(ex. Default Network / 7245176d-1402-47fa-87a6-2c2eafe8807b)
 ネットワーク名 / ID / 複数可能

=============================================================================


GPUインスタンスを使用するための情報です。
=============================================================================
* サービスはすぐに利用できず、事前相談を行った後に使用できます。事前相談は、2～3日程かかる場合があります。

* GPUインスタンスはUbuntu 18.04にインストールされます。

* GPUインスタンスのIPは自動的に割り当てられます。

* GPUインスタンスの作成が完了すると、案内メールが送信されます。

=============================================================================
```

* 顧客TOAST ID email：GPUインスタンスの作成をリクエストするID情報を入力します。
* 顧客プロジェクトID：下記の図のように**Network > VPC > サブネット > プロジェクトID**で確認できます。
* アベイラビリティゾーン：pub-a、pub-bのどちらかを選択できます。
* インストールするインスタンスの名前：20文字以内で作成してください。英数字、'-'、'.'のみ入力できます。
* GPUインスタンスのタイプとインスタンス数

| インスタンスのタイプ | GPU数 | Core数 | メモリ容量(GB) |
| --- | --- | --- | --- |
| g2.c8m96 | 1 | 8 | 96 |
| g2.c16m192 | 2 | 16 | 192 |

* インストールするインスタンスで使用するキーペア名：希望するキーペアがない場合は作成してください。
* インスタンスのブロックストレージのタイプとサイズ(GB)：ブロックストレージのタイプはHDDとSSDから選択可能で、ブロックストレージのサイズは20GB～1000GBで作成可能です。
* 接続する必要があるSubnet情報：下記の図のように**Network > VPC > サブネット > サブネット名、CIDR**で確認できます。
* インスタンス作成の詳細は、[Instance概要](http://docs.toast.com/ko/Compute/Instance/ko/overview/)を参照してください。


![GPU_Instance_subnetID_1](http://static.toastoven.net/prod_gpu/en_GPU_Instance_subnetID_1.png)


**GPUインスタンスを使用するための情報**

* サービスはすぐに利用できず、事前相談を行った後に使用できます。事前相談は2～3日程かかる場合があります。

* GPUインスタンスはUbuntu 18.04にインストールされます。

* GPUインスタンスのIPは自動的に割り当てられます。

* GPUインスタンスの作成が完了すると案内メールが送信されます。


## GPU Instance接続

インスタンスの作成完了後、SSHを使用してインスタンスにアクセスします。
インスタンスにFloating IPが接続されていて、セキュリティグループでTCPポート22(SSH)が許可されている必要があります。

SSHクライアントと設定したキーペアを利用して、インスタンスに接続します。
SSH接続の詳細は、[SSH接続ガイド](https://docs.toast.com/ko/Compute/Instance/ko/overview/#linux)を参照してください。



## GPU情報確認

```
# GPU情報確認
shell > nvidia-smi
```

![GPU_assign_1.png](http://static.toastoven.net/prod_gpu/GPU_assign_1.png)


* GPU：0 (GPU 1個割当)
* Name：Tesla V100-SXM2 (GPUモデル)
* Persistence_mode：On (Persistence mode enable状態)
* Temp：30C (現在のGPU温度)
* Pwr Usage/Capacity：36W / 300W (現在の電力使用量 / 最大電力使用量)
* Memory-Usage：32480MiB (GPU最大割当メモリ)
* GPU-Util：0% (GPU Util使用率)

## 一般インスタンスとGPUインスタンスの違い

* GPUインスタンスは仕様変更ができません。

