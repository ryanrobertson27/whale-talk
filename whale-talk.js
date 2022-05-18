let input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (i=0; i < input.length; i++) {
    // console.log(input[i])
    if (input.charAt(i) === 'u' || input.charAt(i) === 'e') {
        resultArray.push(input.charAt(i))
    }  
    for (j=0; j < vowels.length; j++) {
        // console.log(j)
        if (input.charAt(i) === vowels[j]) {
            // console.log(input.charAt(i))
            resultArray.push(input.charAt(i))
            
            
        }
    } 
}

let resultString = resultArray.join('').toUpperCase();

// console.log(resultArray)
console.log(resultString);

