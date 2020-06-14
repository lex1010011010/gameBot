'use strict';

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

alert('Угадай число от 1 до 100');

function startGame() {
    let desiredNumber = 42;

    let getAnswer = function (mess) {

        console.log(mess);
        if (mess === undefined) {
            mess = 'Введите число от 1 до 100';
        }
        let answer = prompt(mess);

        function checkAnswer() {
            if (desiredNumber === +answer) {
                alert('Ты победил');
            } else if (desiredNumber > +answer) {
                getAnswer('Загаданное число больше');
            } else if (desiredNumber < +answer) {
                getAnswer('Загаданное число меньше');
            }
        }

        if (answer === null) {
            alert('Игра закончена!');
        } else if (+answer === 0 || +answer > 100) {
            getAnswer('Введите число от 1 до 100');
        }
        else if (!isNumber(answer)) {
            getAnswer('Это не число, введи число');
        } else if (isNumber(answer)) {
            checkAnswer();
        }
    };
    getAnswer();
}

startGame();
