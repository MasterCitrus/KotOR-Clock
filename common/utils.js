//Utility Functions

//Pads zero on numbers if necessary
export function zeroPad(i) {
    if(i < 10) i = "0" + i;
    return i;
}