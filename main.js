'use strict';

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// alert('Угадай число от 1 до 100');

function startGame() {
    let desiredNumber = 42;
    console.log(desiredNumber);

    let getAnswer = function (mess) {

        console.log(mess);
        if (mess === undefined) {
            mess = 'Введите число от 1 до 100';
        }
        let answer = prompt(mess);
        console.log('answer: ', answer);

        function checkAnswer() {
            if (desiredNumber === +answer) {
                console.log('good');
                alert('Ты победил');
            } else if (desiredNumber > +answer) {
                console.log('Загаданное число больше');
                getAnswer('Загаданное число больше');
            } else if (desiredNumber < +answer) {
                console.log('Загаданное число меньше');
                getAnswer('Загаданное число меньше');
            }
        }

        if (answer === null) {
            alert('Игра закончена!');
        }
        else if (!isNumber(answer)) {
            getAnswer('Это не число, введи число');
            console.log('не Число');
        } else if (isNumber(answer)) {
            checkAnswer();
            console.log('число');
        }
    };
    getAnswer();
}

startGame();
