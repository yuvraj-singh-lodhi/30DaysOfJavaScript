function captalizedWords(inputString){
    let words = inputString.split(' ');

    let captalizedWords = words.map(words => words.charAt(0).toUpperCase() + words.slice(1));

    let resultString = captalizedWords.join(' ');

    return resultString;
}

let inputString = "the quick brown fox";
let result = captalizedWords(inputString);
console.log(result);
