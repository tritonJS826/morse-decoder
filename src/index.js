const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};

function decode(expr) {
    let exprArr = expr.split('')
    let outputString = '';
    while (exprArr.length > 0) {
      outputString += numbersArrInLetter(exprArr.splice(0,10));
    }
    return outputString;
}

function numbersArrInLetter(numbersArr) {
  let symbols = '';
    for (let i = 0; i<10;i+=2) {
      if (numbersArr[i] == '0' && numbersArr[i+1]=='0'){symbols+=''};
      if (numbersArr[i] == '1' && numbersArr[i+1]=='0'){symbols+='.'};
      if (numbersArr[i] == '1' && numbersArr[i+1]=='1'){symbols+='-'};
      if (numbersArr[i] == '*') {return ' ';};
    }
    console.log(symbols);
    // return symbols;
     return MORSE_TABLE[symbols];

}

module.exports = {
    decode
}
