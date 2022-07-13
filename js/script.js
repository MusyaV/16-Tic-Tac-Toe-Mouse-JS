// Create gameBoard
const grid = document.querySelector('.grid');
const pic = document.querySelector('.pic');
let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
// 2 игрока и текст
const player_1 = document.createElement('div');
player_1.classList.add('pl_1');

const player_2 = document.createElement('div');
player_2.classList.add('pl_2');

pic.appendChild(player_1);
pic.appendChild(player_2);

const hod_1 = document.createElement('div');
hod_1.classList.add('hod_1');
hod_1.innerText = '';

const hod_2 = document.createElement('div');
hod_2.classList.add('hod_2');
hod_2.innerText = '';

pic.appendChild(hod_1);
pic.appendChild(hod_2);

const textDiv = document.querySelector('.text_1');
let text = document.createElement('div');
text.classList.add('text');
text.innerText = 'Сейчас должны ходить крестики';
textDiv.appendChild(text);

// функция drawGameBoard()
window.addEventListener('load', function drawGameBoard() {
    // рисуем массив gameBoard
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            const divElem = document.createElement('div');
            divElem.classList.add('elem');
            divElem.innerText = '';
            grid.appendChild(divElem);
        }
    }

    // делаем следующий ход
    grid.addEventListener('click', function nextMove(event) {
        if (text.innerText === 'Сейчас должны ходить крестики') {
            event.target.innerHTML = 'X';
            text.innerText = 'Сейчас должны ходить нолики';
            hod_1.innerText = 'Крестики';
            player_1.style.border = '15px solid orange';
            player_2.style.border = '7px solid orange';
            event.target.style.backgroundColor = 'yellow';
            event.target.style.border = '4px solid black';
            hod_2.innerText = '';
            gameOver()

        } else {
            event.target.innerHTML = 'O';
            text.innerText = 'Сейчас должны ходить крестики';
            hod_2.innerText = 'Нолики';
            player_2.style.border = '15px solid orange';
            player_1.style.border = '7px solid orange';
            event.target.style.backgroundColor = 'yellow';
            event.target.style.border = '4px solid black';
            hod_1.innerText = '';
            gameOver()

        }

    })
})

function gameOver() {
    let arrCell = document.querySelectorAll('.elem');
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        // крестики
        if (arrCell[`${element.one}`].textContent == 'X' && arrCell[`${element.two}`].textContent == 'X' && arrCell[`${element.three}`].textContent == 'X') {
            text.innerText = 'Ура!..Победили крестики!!!';
            arrCell[`${element.one}`].style.backgroundColor = 'orangered';
            arrCell[`${element.two}`].style.backgroundColor = 'orangered';
            arrCell[`${element.three}`].style.backgroundColor = 'orangered';
            text.style.color = 'orangered';
        }

        // нолики
        if (arrCell[`${element.one}`].textContent == 'O' && arrCell[`${element.two}`].textContent == 'O' && arrCell[`${element.three}`].textContent == 'O') {
            text.innerText = 'Ура!..Победили нолики!!!';
            arrCell[`${element.one}`].style.backgroundColor = 'orangered';
            arrCell[`${element.two}`].style.backgroundColor = 'orangered';
            arrCell[`${element.three}`].style.backgroundColor = 'orangered';
            text.style.color = 'orangered';
        }
    }
    // никто
    for (let i = 0; i < arrCell.length; i++) {
        if (arrCell[0].style.backgroundColor == 'yellow'
            && arrCell[1].style.backgroundColor == 'yellow'
            && arrCell[2].style.backgroundColor == 'yellow'
            && arrCell[3].style.backgroundColor == 'yellow'
            && arrCell[4].style.backgroundColor == 'yellow'
            && arrCell[5].style.backgroundColor == 'yellow'
            && arrCell[6].style.backgroundColor == 'yellow'
            && arrCell[7].style.backgroundColor == 'yellow'
            && arrCell[8].style.backgroundColor == 'yellow'
            && text.innerText !== 'Ура!..Победили крестики!!!'
            && text.innerText !== 'Ура!..Победили нолики!!!') {
            text.style.left = '70px'
            text.innerText = 'Победителя нет';
            arrCell[0].style.backgroundColor = 'red'
            arrCell[1].style.backgroundColor = 'red'
            arrCell[2].style.backgroundColor = 'red'
            arrCell[3].style.backgroundColor = 'red'
            arrCell[4].style.backgroundColor = 'red'
            arrCell[5].style.backgroundColor = 'red'
            arrCell[6].style.backgroundColor = 'red'
            arrCell[7].style.backgroundColor = 'red'
            arrCell[8].style.backgroundColor = 'red'
        }
    }
}

const numbers = [
    {
        one: 0,
        two: 1,
        three: 2
    },
    {
        one: 3,
        two: 4,
        three: 5
    },
    {
        one: 6,
        two: 7,
        three: 8
    },
    {
        one: 0,
        two: 3,
        three: 6
    },
    {
        one: 1,
        two: 4,
        three: 7
    },
    {
        one: 2,
        two: 5,
        three: 8
    },
    {
        one: 0,
        two: 4,
        three: 8
    },
    {
        one: 2,
        two: 4,
        three: 6
    }
];

document.querySelector('button').addEventListener('click', () => {
    window.location.reload();
})
