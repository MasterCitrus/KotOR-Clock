import { settingsStorage } from "settings";
import * as messaging from "messaging";
import { me as companion } from "companion";

settingsStorage.addEventListener("change", (evt) => {
    sendValue(evt.key, evt.newValue);
});

if (companion.launchReasons.settingsChanged) {
    sendValue(KEY_COLOR, settingsStorage.getItem(KEY_COLOR));
}

function sendValue(key, value) {
    if(value) {
        sendSettingsData({
            key: key,
            value: JSON.parse(value)
        });
    }
}

function sendSettingsData(data) {
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        messaging.peerSocket.send(data);
    } else {
        console.log("No peer connection");
    }
}