DBインスタンスの各種性能指標およびDBインスタンス、バックアップ、パラメータグループとセキュリティグループで発生した各種イベントをモニタリングできます。

## サーバーダッシュボード

サーバーダッシュボードを通して、性能指標をチャート形式で視覚化して確認できます。指標は1分毎に収集され、最長1年間保管されます。各集計単位の保管期間は下記の通りです。

| 集計単位 | 保管期間 |
| --- |------|
| 1分 | 1年   |

チャートは、任意のレイアウトで配置することができます。レイアウトを複数作成して目的に応じて管理できます。

### レイアウト

チャートを表示するためにレイアウトを先に構成する必要があります。レイアウトは複数のチャートで構成され、各チャートの位置とサイズを保存します。
RDS for MS-SQLは**基本システム指標**、**基本SQLサーバー指標**の2つの基本レイアウトを提供します。基本レイアウトはユーザーが修正、削除できません。

### チャート

DBインスタンスの各種性能指標をチャート形式で確認できます。性能指標毎に異なる形のチャートで構成されています。
基本的なシステム指標以外にSQL Serverの`sys.dm_os_performance_counters`で提供する性能指標をチャートで提供しています。

| チャート | 指標(単位) | 備考 |
| --- | --- | --- |
| CPU使用率 | cpu used (%) | |
| CPU詳細 | cpu user (%)<br> cpu system (%)<br> cpu interrupt (%)<br> cpu privileged (%)<br> cpu processor (%) | |
| メモリ使用量 | memory used (%) | |
| メモリ詳細 | memory used (bytes)<br> memory free (bytes) | |
| メモリPage詳細 | pages (count)<br> page read (count)<br> page write (count) | |
| メモリPage Fault | page faults (count) | |
| メモリPool Page | memory pool paged (bytes) <br> memory pool nonpaged (bytes) | |
| メモリStandby Cache詳細 | core (bytes)<br> normal priority (bytes)<br> reserve (bytes) | |
| メモリCache Fault | cache faults (count) | |
| メモリTransition Fault | transition faults (count) | |
| メモリDemand Zero Fault | zero faults (count) | |
| スワップ使用率 | swap used (%) | |
| スワップ使用量 | swap used (bytes)<br> swap total (bytes) | |
| ディスク使用率 | storage used (%) | |
| ディスク転送量 | disk read (bytes)<br> disk write (bytes) | |
| Disk Queue Length | queue length (count) | |
| ディスクFree | disk free (bytes) | |
| ディスクTime詳細 | disk time (%)<br> disk idle (%)<br> disk read (%)<br> disk write (%) | |
| ディスクSplit IO | split io (counts) | |
| ネットワーク転送量 | nic incoming (bytes)<br> nic outgoing (bytes) | Windowsで使用する基本的なネットワーク転送が発生します。 |
| ネットワーク転送率(pps) | nic incoming (pps)<br> nic outgoing (pps) | Windowsで使用する基本的なネットワーク転送が発生します。 |
| ネットワークDiscarded Packet | nic incoming (pps)<br> nic outgoing (pps) | |
| ネットワークError Packet | nic incoming (pps)<br> nic outgoing (pps) | |
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
| Database Connection Status | Database Connection Status | 接続不可：0、接続可能：1 |
| システムContext Switch | context switches (count) | |
| システムプロセス | processes (count) | |
| システムコール | system call (count) | |
| システムUp Time | uptime | |
| システムThread | treads (count) | |
| プロセスHandle | sql server (count)<br> sql server vss (count) | |
| プロセスプロセッサー時間 | sql server (%)<br> sql server vss (%) | |
| プロセスThread | sql server (count)<br> sql server vss (count) | |
| プロセスPrivateメモリサイズ | sql server (bytes)<br> sql server vss (bytes) | |
| プロセスVirtualメモリサイズ | sql server (bytes)<br> sql server vss (bytes) | |
| プロセスWorking Setメモリサイズ | sql server (bytes)<br> sql server vss (bytes) | |


## 通知グループ

通知グループを利用して性能指標の通知を受け取ることができます。
通知グループに監視対象インスタンスと通知を受け取るユーザーグループを指定します。
監視設定を行い、通知を受け取る性能指標のしきい値と条件を設定します。
設定された指標が監視設定の条件を満たすと接続されたユーザーグループに通知を送信します。
通知グループに設定された通知タイプによってはSMSフックはメールで通知を送信します。

### 監視設定

監視設定は項目と比較方法、しきい値、持続時間で構成されます。監視設定の持続時間は重要な要素です。持続時間は監視対象が指定したしきい値に到達した後、その状態が持続する時間を条件に指定する時に使用します。例えば、CPU使用率のしきい値が90%以上で持続時間が5分の場合、該当通知グループと関連するサーバーのCPU使用率が90%以上の状態が5分以上持続した時、ユーザーグループに定義されたユーザー通知を送ります。CPU使用率が90%以上でも5分以内に90%未満に下がった場合は通知が発生しません。

## ユーザーグループ

通知を受け取るユーザーをグループで管理できます。通知対象は必ずプロジェクトメンバーに登録されている必要があります。
ユーザーグループに属すユーザーがプロジェクトメンバーから除外された場合、ユーザーグループに属していても通知を受け取れません。

> [注意]実名認証を行っておらず携帯電話情報がない場合、SMS通知を受け取れません。

## イベント

イベントはRDS for MS-SQLまたはユーザーにより発生した重要事件を意味します。イベントは、イベントのタイプと発生日時、原本ソースとメッセージで構成されます。イベントはWebコンソールで照会可能です。購読することでメール、SMS、Webフックを通してイベント発生通知を受信することができます。イベントのタイプと発生可能なイベントは、下記の通りです。

| イベントタイプ | イベントコード | イベントメッセージ |
| --- | --- | --- |
| DB_INSTANCE | DB_INSTANCE_CREATE_START | DBインスタンスの作成開始 |
| DB_INSTANCE | DB_INSTANCE_CREATE_END | DBインスタンスの作成完了 |
| DB_INSTANCE | DB_INSTANCE_CREATE_FAIL | DBインスタンスの作成失敗 |
| DB_INSTANCE | DB_INSTANCE_SERVER_CREATE_START | DBインスタンスサーバー作成開始 |
| DB_INSTANCE | DB_INSTANCE_SERVER_CREATE_END | DBインスタンスサーバー作成終了 |
| DB_INSTANCE | DB_INSTANCE_SERVER_CREATE_FAIL | DBインスタンスサーバー作成失敗 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_START | DBインスタンスバックアップ開始 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_END | DBインスタンスバックアップ完了 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_FAIL | DBインスタンスバックアップ失敗 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_TO_OBS_START | オブジェクトストレージにDBインスタンスのバックアップ開始 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_TO_OBS_END | オブジェクトストレージにDBインスタンスのバックアップ終了 |
| DB_INSTANCE | DB_INSTANCE_BACKUP_TO_OBS_FAIL | オブジェクトストレージにDBインスタンスのバックアップ失敗 |
| DB_INSTANCE | DB_INSTANCE_LOG_BACKUP_FAIL | DBインスタンスログのバックアップ失敗 |
| DB_INSTANCE | DB_INSTANCE_DELETED | DBインスタンスの削除 |
| DB_INSTANCE | DB_INSTANCE_DELETED_FAIL | DBインスタンスの削除失敗 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_START | DBインスタンス復元開始 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_END | DBインスタンス復元完了 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_FAIL | DBインスタンス復元失敗 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_START | DBインスタンス修正開始 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_END | DBインスタンス修正完了 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_FAIL | DBインスタンス修正失敗 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_SECURITY_GROUP_START | DBインスタンスセキュリティグループ変更開始 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_SECURITY_GROUP_END | DBインスタンスセキュリティグループ変更完了 |
| DB_INSTANCE | DB_INSTANCE_MODIFY_SECURITY_GROUP_FAIL | DBインスタンスセキュリティグループ変更失敗 |
| DB_INSTANCE | DB_INSTANCE_REBOOT_START | DBインスタンス再起動開始 |
| DB_INSTANCE | DB_INSTANCE_REBOOT_END | DBインスタンス再起動完了 |
| DB_INSTANCE | DB_INSTANCE_REBOOT_FAIL | DBインスタンス再起動失敗 |
| DB_INSTANCE | DB_INSTANCE_FORCE_RESTART | DBインスタンスの強制再起動 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_HA_START | DBインスタンス高可用性構成の復旧開始 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_HA_END | DBインスタンス高可用性構成の復旧完了 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_HA_FAIL | DBインスタンス高可用性構成の復旧失敗 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_WITNESS_START | DBインスタンスの監視サーバー復旧開始 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_WITNESS_END | DBインスタンスの監視サーバー復旧完了 |
| DB_INSTANCE | DB_INSTANCE_RECOVER_WITNESS_FAIL | DBインスタンスの監視サーバー復旧失敗 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_FROM_OBS_START | オブジェクトストレージからバックアップ復元開始 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_FROM_OBS_END | オブジェクトストレージからバックアップ復元完了 |
| DB_INSTANCE | DB_INSTANCE_RESTORE_FROM_OBS_FAIL | オブジェクトストレージからバックアップ復元失敗 |
| DB_INSTANCE | DB_INSTANCE_HYPERVISOR_MIGRATION_START | ハイパーバイザマイグレーション開始 |
| DB_INSTANCE | DB_INSTANCE_HYPERVISOR_MIGRATION_END | ハイパーバイザマイグレーション完了 |
| DB_INSTANCE | DB_INSTANCE_HYPERVISOR_MIGRATION_FAIL | ハイパーバイザマイグレーション失敗 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_HA_START | DBインスタンス高可用性構成の変更開始 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_HA_END | DBインスタンス高可用性構成の変更完了 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_HA_FAIL | DBインスタンス高可用性構成の変更失敗 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PASSWORD_START | DBインスタンスパスワード変更開始 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PASSWORD_END | DBインスタンスパスワード変更完了 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PASSWORD_FAIL | DBインスタンスパスワード変更失敗 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PORT_START | DBインスタンスポート変更開始 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PORT_END | DBインスタンスポート変更完了 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PORT_FAIL | DBインスタンスポート変更失敗 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PARAMETER_GROUP_START | DBインスタンスパラメータグループ変更開始 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PARAMETER_GROUP_END | DBインスタンスパラメータグループ変更完了 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_PARAMETER_GROUP_FAIL | DBインスタンスパラメータグループ変更失敗 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLAVOR_START | DBインスタンスタイプ変更開始 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLAVOR_END | DBインスタンスタイプ変更完了 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLAVOR_FAIL | DBインスタンスタイプ変更失敗 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_STORAGE_SIZE_START | DBインスタンスストレージサイズ変更開始 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_STORAGE_SIZE_END | DBインスタンスストレージサイズ変更完了 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_STORAGE_SIZE_FAIL | DBインスタンスストレージサイズ変更失敗 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLOATING_IP_START | DBインスタンスFloating IP使用有無変更開始 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLOATING_IP_END | DBインスタンスFloating IP使用有無変更完了 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_FLOATING_IP_FAIL | DBインスタンスFloating IP使用有無変更失敗 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_BACKUP_CONFIG_START | DBインスタンスバックアップ設定変更開始 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_BACKUP_CONFIG_END | DBインスタンスバックアップ設定変更完了 |
| DB_INSTANCE | DB_INSTANCE_CHANGE_BACKUP_CONFIG_FAIL | DBインスタンスバックアップ設定変更失敗 |
| DB_INSTANCE | DB_INSTANCE_STATUS_CHANGED_TO_AVAILABLE | DBインスタンス状態正常化 |
| DB_INSTANCE | DB_INSTANCE_STATUS_CHANGED_TO_FAIL_TO_CONNECT | DBインスタンス接続不可 |
| DB_INSTANCE | DB_INSTANCE_STATUS_CHANGED_TO_STORAGE_FULL | DBインスタンスストレージ不足 |
| DB_INSTANCE | DB_INSTANCE_STATUS_CHANGED_TO_ERROR | DBインスタンスエラー |
| DB_INSTANCE | HA_AUTOMATIC_FAILOVER_START | 高可用性DBインスタンス自動フェイルオーバー開始 |
| DB_INSTANCE | HA_AUTOMATIC_FAILOVER_END | 高可用性DBインスタンス自動フェイルオーバー完了 |
| DB_INSTANCE | HA_AUTOMATIC_FAILOVER_FAIL | 高可用性DBインスタンス自動フェイルオーバー失敗 |
| DB_INSTANCE | HA_AUTOMATIC_PROMOTE_END | 高可用性DBインスタンス昇格完了 |
| DB_INSTANCE | HA_AUTOMATIC_PROMOTE_FAIL | 高可用性DBインスタンス昇格失敗 |
| BACKUP | BACKUP_START | バックアップ開始 |
| BACKUP | BACKUP_END | バックアップ完了 |
| BACKUP | BACKUP_FAIL | バックアップ失敗 |
| BACKUP | BACKUP_DELETED | バックアップ削除 |
| BACKUP | BACKUP_EXPORT_OBS_START | オブジェクトストレージにバックアップのエクスポート開始 |
| BACKUP | BACKUP_EXPORT_OBS_END | オブジェクトストレージにバックアップのエクスポート終了 |
| BACKUP | BACKUP_EXPORT_OBS_FAIL | オブジェクトストレージにバックアップのエクスポート失敗 |
| PARAMETER_GROUP | PARAMETER_GROUP_CREATED | パラメータグループ作成 |
| PARAMETER_GROUP | PARAMETER_GROUP_MODIFIED | パラメータグループ修正 |
| PARAMETER_GROUP | PARAMETER_GROUP_DELETED | パラメータグループ削除 |
| DB_SECURITY_GROUP | DB_SECURITY_GROUP_CREATED | DBセキュリティグループ作成 |
| DB_SECURITY_GROUP | DB_SECURITY_GROUP_MODIFIED | DBセキュリティグループ修正 |
| DB_SECURITY_GROUP | DB_SECURITY_GROUP_DELETED | DBセキュリティグループ削除 |
| NOTIFICATION_GROUP | NOTIFICATION_GROUP_EVENT_CREATED | DBインスタンスイベント発生 |

### イベント購読

イベントタイプ、コードおよびソースで区分してイベントを購読できます。イベントタイプで購読すると、イベントタイプに含まれるすべてのイベントコードの通知を受信します。通知があまりにも広範囲の場合、イベントコードとソースに細分化して購読できます。 

プロジェクトのメンバーのみ、通知を受信するユーザーに選択できます。基本的にメールでイベント通知が送信され、実名認証により携帯電話番号が登録された場合にのみSMSで追加イベント通知が送信されます。メールとSMS以外にもWebフックを登録すると、事前に定義したフォーマットでHTTPリクエストを送ります。Webフックのフォーマットは下記の通りです。

#### Method, URL
```
POST {ユーザーが登録したWebフックURL}
Content-Type: application/json;charset=UTF-8
```

#### Request Body
```json
{
    "name": "イベント購読名",
    "source": "イベントソース",
    "sourceId": "イベントソースID",
    "category": "イベントタイプ",
    "code": "イベントコード"
}
```
