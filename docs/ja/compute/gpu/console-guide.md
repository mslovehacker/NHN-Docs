## GPU Instanceの有効化

GPU Instanceを使用するには、先にCompute > GPU Instance作成をリクエストする必要があります。

**サービス選択 > GPU Instanceをクリックします。**

![GPU_Instance_activation_1_modify.png](http://static.toastoven.net/prod_gpu/en_TG_C1.jpg)  
[図1]

**サービス有効化確認ボタンを押します。**

![GPU_Instance_activation_2_modify.png](http://static.toastoven.net/prod_gpu/en_TG_C2.jpg)
[図2]



## GPU Instance作成リクエスト

**Compute > GPU Instanceに移動した後、GPU Instance作成ボタンを押します。**

![GPU_Instance_apply_1_modify.png](http://static.toastoven.net/prod_gpu/en_TG_C3.jpg)
[図3]

**GPU Instance作成するOSイメージ情報を確認します。**

![GPU_Instance_apply_2_modify.png](http://static.toastoven.net/prod_gpu/en_TG_C4.jpg)
[図4]

**作成するインスタンスのタイプを選択します。**
![GPU_Instance_apply_3_modify.png](http://static.toastoven.net/prod_gpu/en_TG_C5.jpg)
[図5]

**後の進行は一般Instance作成プロセスと同じです。**

インスタンス作成の詳細な内容は[Instance概要](https://docs.toast.com/en/Compute/Instance/en/overview/)を参照してください。


## GPUインスタンス情報

**GPUインスタンスタイプ別の仕様**

| インスタンスタイプ | GPUモデル | GPU   | GPUメモリ | vCPU  | メモリ |
| --------------- | :--------: | -----: | ----------: | -----: | ------: |
| g2.v100.c8m90   | V100     | 1個 | 32 GB      | 8個 | 90 GB  |
| g2.v100.c16m180 | V100     | 2個 | 64 GB      | 16個 | 180 GB |
| g2.v100.c32m360 | V100     | 4個 | 128 GB     | 32個 | 360 GB |
| g2.v100.c64m720 | V100     | 8個 | 256 GB     | 64個 | 720 GB |
| g2.t4.c4m32     | T4       | 1個 | 16 GB      | 4個 | 32 GB  |
| g2.t4.c8m64     | T4       | 2個 | 32 GB      | 8個 | 64 GB  |
| g2.t4.c16m128   | T4       | 4個 | 64 GB      | 16個 | 128 GB |
| g2.t4.c32m256   | T4       | 8個 | 128 GB     | 32個 | 256 GB |
| g2.t4.c64m384   | T4       | 12個 | 192 GB     | 64個 | 384 GB |



## GPU Instance接続

**インスタンスの作成が完了したら接続情報通りに接続します。**


インスタンスの作成完了後、SSHを使用してインスタンスにアクセスします。
インスタンスにFloating IPが接続されていて、セキュリティグループでTCPポート22(SSH)が許可されている必要があります。
SSHクライアントと、設定したキーペアを利用して、インスタンスに接続します。

SSH接続の詳細は、[SSH接続ガイド](https://docs.toast.com/en/Compute/Instance/en/overview/#how-to-access-linux-instances)を参照してください。


## GPU情報の確認

**インスタンスに接続してnvidia-smiコマンドを実行し、GPU情報を確認します。**

```
# GPU情報の確認
shell > nvidia-smi
```

![GPU_active_3.png](http://static.toastoven.net/prod_gpu/nvidia-smi_stress2_1_70.png)
[図6]

1. バージョン情報
    * NVIDIA Driver Version：440.33.01
    * CUDA Version：10.2
2. GPU情報
    * 使用可能なGPUの数：GPU 0～7 (8個使用)
    * GPUモデル名：Tesla V100-SXM2
    * Persistence mode状態：Persistence_mode On
    * GPUの現在温度：Temp 52C
    * 現在の電力使用量 / 最大電力使用量：Pwr Usage/Capacity 298W / 300W
    * 現在のメモリ使用量 / 最大メモリ使用量：Memory-Usage 29283MiB / 32480MiB
    * GPU Utilization ：GPU-util 100%
3. Processes情報
    * GPU別PID、Process name、GPU Memory Usage情報
    * Type情報
        * C = compute = CUDA or OpenCL
        * G = graphics = DirectX or OpenGL

**nvccコマンドでCUDAのバージョンを確認します。**

```
# CUDAバージョン情報確認
/usr/local/cuda/bin/nvcc  --version

nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2020 NVIDIA Corporation
Built on Thu_Jun_11_22:26:38_PDT_2020
Cuda compilation tools, release 11.0, V11.0.194
Build cuda_11.0_bu.TC445_37.28540450_0
```




## 一般インスタンスとGPUインスタンスの違い

* GPUインスタンスは仕様を変更できません。
* NVIDIAとCUDAのバージョンは予告なしにアップデートされます。
