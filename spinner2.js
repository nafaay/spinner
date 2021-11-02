// Refactor spinner1.js I made a recursive function that exit when delay is > 2000

let delay = 0
delay = 50;
const arrCharacters = ['\r|   ', '\r/   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']

const printChar = function(){
    if(delay > 2000){
        return;
    }
    for(let char of arrCharacters){
        delay += 200;
        setTimeout(() => {
            process.stdout.write(char);
        }, delay);
    }

    printChar();
}

printChar();
