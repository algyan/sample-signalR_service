﻿$(document).ready(function() {
    const apiBaseUrl = "< URL for Hub Function >";
    let data = { ready: false };
    textArrivedElem = document.getElementById("textArrived");
    textMessageElem = document.getElementById("textMessage");

    getConnectionInfo().then(function(info) {
        let accessToken = info.accessToken;

        const options = {
            accessTokenFactory: function() {
                if (accessToken) {
                    const _accessToken = accessToken;
                    accessToken = null;
                    return _accessToken;
                } else {
                    return getConnectionInfo().then(function(info) {
                        return info.accessToken;
                    });
                }
            }
        };

        const connection = new signalR.HubConnectionBuilder()
            .withUrl(info.url, options)
            .configureLogging(signalR.LogLevel.Information)
            .build();

        connection.on("SendData", function(obj) {
            var recieved = JSON.parse(obj);
            arrived = recieved.arrived;
            message = recieved.message;
            x = message.x;
            y = message.y;
            console.log('time:' + arrived + 'x=' + x + 'y=' + y);
            textArrivedElem.innerHTML = arrived;
            textMessageElem.innerHTML = JSON.stringify(message);
        });


        connection.onclose(function() {
            console.log('disconnected');
            setTimeout(function() { startConnection(connection); }, 2000);
        });

        console.log('connecting...');
        connection.start().then(() => data.ready = true)
            .catch(console.error);
    });

    function getConnectionInfo() {
        return $.post({
            url: `${apiBaseUrl}/api/SignalRInfo`,
            data: {}
        }).done(function(resp, textStatus, jqXHR) {
            return resp.data;
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        });
    }
});