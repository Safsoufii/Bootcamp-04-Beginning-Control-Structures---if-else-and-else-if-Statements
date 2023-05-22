// TASK 4 PART 2

// take the operand input
const litres = parseInt(prompt('Enter water consumption amount in litres: '));
const kiloLitres=(litres/1000);//convert litres to kilolitres
const remainder=(kiloLitres-6);
tarriffA=15.73;
tarriffB=22.38;
tarriffC=31.77;
tarriffD=69.76;
const e=(6*tarriffA);//The first 6000 litres will cost R15.73 (tarriffA)

// using if...else if
if (kiloLitres>=0 && kiloLitres<=6) {
    console.log("R"+(kiloLitres*tarriffA).toFixed(2));
}
else if (kiloLitres>6 && kiloLitres<=10.5) {
    console.log("R"+(e+remainder*tarriffB).toFixed(2));
}
else if (kiloLitres>10.5 && kiloLitres<=35) {
    console.log("R"+(e+remainder*tarriffC).toFixed(2));
}
else if (kiloLitres>35) {
    console.log("R"+(e+remainder*tarriffD).toFixed(2));
}

/*
https://youtu.be/r4Y0i7nreNE
*/