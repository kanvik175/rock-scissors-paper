const COMPUTER = 'computer';
const PLAYER = 'player';
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const CHOICES = [
    {
        name: ROCK,
        loseTo: PAPER
    },
    {
        name: SCISSORS,
        loseTo: ROCK
    },
    {
        name: PAPER,
        loseTo: SCISSORS
    }
]

const WIN_PHRASES = [
    'Какой ты молодец оказывается',
    'Давай вперед, так держать',
    'Слушай, а я в тебя и не верил по началу',
    'Так держать!',
    'Вперед только вперед!'
]

const LOSE_PHRASES = [
    'Ну ты даешь',
    'Полный разгром...',
    'Да уж первый раз такое вижу...',
    'Ты что поддаешься?',
    'Трусы у тебя случайно не в горох?'
]

const STATUS = {
    WIN: 'win',
    LOSE: 'lose',
    DRAW: 'draw'
}

const MAX_POINT_NUM = 5;

const FINAL_WIN_PHRASE = 'Мои поздравления';

const FINAL_LOSE_PHRASE = 'Ну ты и лох, трусы у тебя в горох';

export { COMPUTER, PLAYER, ROCK, PAPER, SCISSORS, CHOICES, LOSE_PHRASES,
    WIN_PHRASES, STATUS, MAX_POINT_NUM, FINAL_LOSE_PHRASE, FINAL_WIN_PHRASE };