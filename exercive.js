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
function alphabetical(input){
    let str = "" + input; 
    let order = "";
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (str.charAt(j) > str(i)) {
                let temp = 
            }
        }
    }
}