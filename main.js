'use strict';

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function startGame() {
    alert('Новая игра!!! угадай число от 1 до 100');
    let desiredNumber = 42;
    let tryCount = 10;

    let getAnswer = function (mess) {

        // console.log(tryCount);

        // console.log(mess);
        if (mess === undefined) {
            mess = 'Введите число от 1 до 100';
        }
        let answer = prompt(mess);

        let finishGame = function (mess) {
            if (confirm(mess)) {
                startGame();
            } else {
                alert('конец игры');
            }
        };

        function checkAnswer() {
            if (desiredNumber === +answer) {
                finishGame('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            } else if (desiredNumber > +answer) {
                getAnswer(`Загаданное число больше, осталось ${tryCount} попыток`);
            } else if (desiredNumber < +answer) {
                getAnswer(`Загаданное число меньше, осталось ${tryCount} попыток`);
            }
        }

        if (answer === null) {
            alert('Игра закончена!');

        } else if (answer === '') {
            getAnswer('Вы ничего не ввели, введите число от 1 до 100');
        } else if (+answer === 0 || +answer > 100) {
            getAnswer('Введите число от 1 до 100');
        }
        else if (!isNumber(answer)) {
            getAnswer('Это не число, введи число');
        } else if (isNumber(answer)) {
            tryCount--;
            if (tryCount === 0) {
                finishGame('Попытки закончились, хотите сыграть еще?');
            } else {
                checkAnswer();
            }
        }
    };
    getAnswer();
}
startGame();
