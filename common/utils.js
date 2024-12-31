//Utility Functions

//Pads zero on numbers if necessary
export function zeroPad(i) {
    if(i < 10) i = "0" + i;
    return i;
}

//Gets first 3 letters of day from index
export function getDay3(i) {
    switch(i){
        case 0:
            return "SUN";
        case 1:
            return "MON";
        case 2:
            return "TUE";
        case 3:
            return "WED";
        case 4:
            return "THU";
        case 5:
            return "FRI";
        case 6:
            return "SAT";
    }
}

//Gets day from index
export function getDay(i) {
    switch(i) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}

