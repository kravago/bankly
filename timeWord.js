
function timeWord(inputTime) {
    // Function that takes in a 24hr timestring and interprets into english
    let outputTime = '';

    const leftDigit = {
        '1': 'ten',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty'
    }

    const rightDigit = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six'
    }
    
    // add each digit in time to array
    for (i = 0; i < inputTime.length; i++) {
        if (inputTime[i] === undefined) {
            outputTime += '';
        } else if (i === 0 || i === 3) {
            outputTime += leftDigit[inputTime[i]] + ' ';
        } else if (i === 1 || i === 4) {
            outputTime += rightDigit[inputTime[i]] + ' ';
        }

    }

    if (parseInt(inputTime.slice(0, 2)) < 12) {
        outputTime += 'am';
    } else {
        outputTime += 'pm';
    }
    
    return outputTime;
}

module.exports = timeWord;