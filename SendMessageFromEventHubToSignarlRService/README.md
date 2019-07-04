# Event Hub からメッセージを受信して、SignalR Serviceに送る 

* Visual Studioで、ReceiveEHMtoSendSR/ReceiveEHMtoSendSR.slnを開く。
* ローカルで動かすときは、
  * Event Hub接続文字列とSignalR Service接続文字列をlocal.setting.jsonに記入する。（下表参照）
* クラウドで動かすときは、
  * デプロイした Azure Functions の Web Socket をオンにする。
    * Function AppのConfiguration > General settingsにある、Web socketsをOn
  * Azure Functions の 概要→Function Appの設定→アプリケーション設定の管理で、+新しいアプリケーション設定をクリックして、Event Hub と SignalR Service の接続文字列を登録する。（下表参照）
    * Function AppのConfiguration > Application settingsに、Event HubとSignalR Service の接続文字列を登録

|項目|変数名|解説|
|:--|:--|:--|
|Event Hub接続文字列|EventHubConnectionString|Functionがメッセージを取り出すEvent Hubの接続文字列です。|
|SignalR Service接続文字列|SignalRConnectionString|Functionがメッセージを送るSignalR Serviceの接続文字列です。|

> このプロジェクトは、 Visual Studio の Function テンプレートで、 Event Hub Triggerで作成して、編集  
> 作成の際、Event Hub への接続文字列の入力を求められるが、そこでは、receiverConnectionString と入力する事。（実際の接続文字列そのものを入力してはいけない）
