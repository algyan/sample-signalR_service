# Hub というか、accessToken を供給する Functions

* Visual Studioで、SignalRDataShare/SignalRDataShare.slnを開く。
* ローカルデバッグしたいときには、local.setting.json の Event Hub と、 SignalR Service の接続文字列を、Azure Portal からコピペする。
* Visual Studio で、Azure にデプロイする。
* デプロイした Azure Functions の Web Socket をオンにする。
* Azure Functions の 概要→Function Appの設定→アプリケーション設定の管理で、+新しいアプリケーション設定をクリックして、SignalR Service の接続文字列を登録する。

|項目|変数名|解説|
|:--|:--|:--|
|SignalR Service接続文字列|AzureSignalRConnectionString|Functionが認証情報を得るSignalR Serviceの接続文字列です。|

> このプロジェクトは、 Visual Studio の Function テンプレートで Http Trigger で作成して編集 
