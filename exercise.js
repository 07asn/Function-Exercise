// Q1
function reverse(input) {
    let str = "" + input; 
    let reverse = "";
    for (let i = str.length; i > 0; i--) { 
        reverse += str.charAt(i - 1); 
    }
    return reverse;     
}
console.log(reverse(532443)); 


//Q2
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is Even`);
    }
    else{
        console.log(`${i} is Odd`);
    }
}


//Q3
function sortAlphabetically(input) {
    let str = input.toLowerCase();
    let sortedStr = '';

    while (str.length > 0) {
        let minChar = str[0];
        for (let i = 1; i < str.length; i++) {
            if (str[i] < minChar) {
                minChar = str[i];
            }
        }
        sortedStr += minChar;
        str = str.replace(minChar, '');
    }
    return sortedStr;
}
console.log(sortAlphabetically("Orange"));


//Q4
function evenDashes(num) {
    let str = "" + num;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (i < str.length - 1) {
            let currentDigit = parseInt(str[i]);
            let nextDigit = parseInt(str[i + 1]);

            if (currentDigit % 2 === 0 && nextDigit % 2 === 0) {
                result += '-'; 
            }
        }
    }
    return result;
}
console.log(evenDashes("025468")); 


//Q5
const  AgeChecker = (age) => age >= 18 ? "The user is Adult" : "The user is Minor";
console.log(AgeChecker(18)); 
console.log(AgeChecker(12)); 