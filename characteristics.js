//TASK 4 PART 1

//Request input from user
let x=prompt("Enter an uppercase letter,lowercase letter or a number");

// using if...else if
if (/^[0-9]+$/.test(x)) {
    console.log(x + " is a number.");
}

else if (/^[a-z]+$/.test(x)) {
    console.log(x + " is a lowercase.");
}

else if (/^[A-Z]+$/.test(x)) {
    console.log(x + " is a uppercase.");
}
else if (!/[a-zA-Z0-9]+/.test(x)) {
    console.log(x +" is not a letter or number.");
}

/*Sources
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Fitzgerald, M. (2012) Introducing regular expressions. Beijing: O'Reilly.
*/ 