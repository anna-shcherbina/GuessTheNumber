'use strict'

const isNumber = function (num) {
    return (!isNaN(parseInt(num)) && isFinite(num));
};

function guessTheNumber(hiddenNumber) {
    function compareTheNumber() {

        let userNumber = prompt("Угадай число от 1 до 100");

        if (isNumber(userNumber)) {

            if (userNumber > hiddenNumber) {
                alert("Загаданное число меньше");
                compareTheNumber();
            } else if (userNumber < hiddenNumber) {
                alert("Загаданное число больше");
                compareTheNumber();
            } else if (userNumber == hiddenNumber) {
                alert("Поздравляю, Вы угадали!!!");
            };
            userNumber = +userNumber;

        } else if (userNumber === null) {
            alert("Игра окончена");
        } else {
            alert("Введи число!");
            compareTheNumber();
        };

        console.log(userNumber);
        console.log(typeof userNumber);

    };
    compareTheNumber();
}

guessTheNumber(10);
