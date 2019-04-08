function caesarCipher(string, number) {
    number = number % 26;
    let lowerCaseString = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newString ='';

    for (var i = 0; i < lowerCaseString.length; i++) {
        let currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + number;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        if (string[i] === string[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase()
        }
        else newString += alphabet[newIndex];
    }

    return newString;
}

const rezultat = caesarCipher('Zoo Keeper',2); //Bqq Mggrgt

console.log(rezultat);