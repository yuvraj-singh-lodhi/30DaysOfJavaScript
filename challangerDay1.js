function reverseNumber(x){
    let reversed = 0;

    while(x>0){
        let digit = x% 10;

        reversed = reversed * 10 + digit;

        x = Math.floor(x/10);
    }
    return reversed
}

let x = 32243;
let reversed = reverseNumber(x);
console.log(reversed);