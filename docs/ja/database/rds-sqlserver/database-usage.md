RDS for MS-SQLは安定的に自動化された管理、バックアップなどを提供するために、内部管理用データベースを使用したり、いくつかのユーザー権限を制限しています。

### 管理用データベース

`rdsadmin`は、内部管理用データベースです。ユーザーは削除やアクセスが行えません。
`rdsadmin`には管理用テーブルおよび保存 プロシージャが登録されています。

### データベース名変更

データベースの名前を変更するには一般的なALTER構文の代わりに、別の保存プロシージャ(Stored Procedure)を呼び出す必要があります。
下記の例は`FOO`データベースの名前を`BAR`に変更する例です。

```sql
EXEC [master].[dbo].[rdsp_alter_database_name] N'FOO', N'BAR'
GO
```

### データベース削除

データベースを削除するには一般的なDROP構文の代わりに、別途の保存プロシージャ(Stored Procedure)を呼び出す必要があります。
下記は`FOO`データベースを削除する例です。

```sql
EXEC [master].[dbo].[rdsp_drop_database] N'FOO'
GO
```
