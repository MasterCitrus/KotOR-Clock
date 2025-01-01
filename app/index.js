import * as document from "document";
import clock from "clock";
import { preferences } from "user-settings";
import { FitFont } from "fitfont";
import { zeroPad } from "../common/utils";
import { battery } from "power";

let charButton = document.getElementById("characterButton");
let clockButton = document.getElementById("clockButton");
let someButton = document.getElementById("somethingButton");

let statsscreen = document.getElementById("statsscreen");
let clockscreen = document.getElementById("clockscreen");
let somescreen = document.getElementById("somescreen");

let title = new FitFont({
    id:"titleText",
    font:"Old_Republic_15",
    halign:"middle",
    valign:"middle",
    letterspacing: 0
})

let time = new FitFont({
    id:"time",
    font:"Old_Republic_60",
    halign:"middle",
    valign:"middle",
    letterspacing: 0
})

let batteryText = new FitFont({
    id:"batteryText",
    font:"Old_Republic_10",
    halign:"middle",
    valign:"middle",
    letterspacing: 0
})

title.text = "Clock";

charButton.addEventListener("click", (evt) => {
    title.text = "Stats";
    clockscreen.style.display = "none";
    somescreen.style.display = "none";
    statsscreen.style.display = "inline"
    console.log("Stats button pressed");
})

clockButton.addEventListener("click", (evt) => {
    title.text = "Clock";
    clockscreen.style.display = "inline";
    somescreen.style.display = "none";
    statsscreen.style.display = "none"
    console.log("Clock button pressed");
})

someButton.addEventListener("click", (evt) => {
    title.text = "Some";
    somescreen.style.display = "inline";
    statsscreen.style.display = "none"
    clockscreen.style.display = "none";
    console.log("Some button pressed");
})

clock.granularity = "seconds";

clock.ontick = (evt) => {
    let today = evt.date;
    let hours = today.getHours();
    if(preferences.clockDisplay === "12h") {
        hours = hours % 12 || 12;
    }
    else {
        hours = zeroPad(hours);
    }
    let mins = zeroPad(today.getMinutes());
    time.text = `${hours}:${mins}`;
    batteryText.text = `${battery.chargeLevel}%`;
}