//Trivia Music Game Variables
var trivTime = 0;
var rightCount = 0;
var wrongCount = 0;
var qACount = 1;
//the start timer and questions
var timer = '';
var qA = [
    {
        question: 'This British singer recorded "Mama Used to Say" in 1982.',
        answers: ['Junior', 'Sade', 'Ziggy Marley', 'Kid Creole and the Coconuts'],
        correct: 'Junior',
        right: 'Correct!',
        wrong: 'Wrong!',
        imageUrl: 'assets/images/fb-junior.jpg'
    },
    {
        question: 'Although recording since the mid sixties, I will Do Anything for You was this reggae man only mainstream success.',
        answers: ['Bob Marley', 'Jimmy Cliff', 'Denroy Morgan', 'Carl Douglas'],
        correct: 'Denroy Morgan',
        right: 'Correct!',
        wrong: 'Wrong',
        imageUrl: 'assets/images/Denroy Morgan.jpeg'
    },
    {
        question: 'Which two rappers had the worst beef in Hip Hop history?',
        answers: ['Ja Rule v. 50 Cent', 'Kanye West v. 50 Cent', 'Biggie Smalls v. Tupac', 'LL Cool J v. Kool Moe Dee'],
        correct: 'Denroy Morgan',
        right: 'Correct!',
        wrong: 'Wrong',
        imageUrl: 'assets/images/biggie-tupac.jpg'
    },
    {
        question: 'What was the name of Destinys Childs first album?',
        answers: ["Destiny's Child", "Survivor", "The Writings On the Wall", "No, No, No"],
        correct: 'No,No,No',
        right: 'Correct!',
        wrong: 'Wrong',
        imageUrl: "assets/images/Dentiny's Child.jpg"
    },
    {
        question: "What Michael Jackson album is the second best-selling album ever?",
        answers: ["Dangerous", "Thriller", "Bad", "Off the Wall"],
        correct: 'Triller',
        right: 'Correct!',
        wrong: 'Wrong',
        imageUrl: "assets/images/michealjackson.jpg"
    },
    {
        question: "Name the first Hip Hop/ Rap single to be released and who it was by.",
        answers: ["Sugarhill Gang- Rapper s Delight", "Jay-Z", "Doctor Drey", "Ice Cube"],
        correct: "Sugarhill Gang-Rapper's Delight",
        right: 'Correct!',
        wrong: 'Wrong',
        imageUrl: "assets/images/sugarhill.jpg"
    },
    {
        question: 'Stuck In The Middle With You',
        answers: ["The Eagles", "Fleetwood Mac", "America", "Stealers Wheel"],
        correct: 'Steelers Wheel',
        right: 'Correct!',
        wrong: 'Wrong',
        imageUrl: "assets/images/Stealers-Wheel.jpg"
    },
    {
        question: "Green Onions",
        answers: ["Booker T and The MG's", "Bobby Darin", "The Four Seasons", "Three Dog Night"],
        correct: "Booker T and The MG's",
        right: 'Correct!',
        wrong: 'Wrong!',
        imageUrl: "assets/images/greenonions.jpg"
    },
    {
        question: "I'll Be There",
        answers: ["Diana Ross", "The Osmond", "The Jackson Five", "The Partrige Family"],
        correct: "The Jackson Five",
        right: 'Correct!',
        wrong: "Wrong!",
        imageUrl: "assets/images/jackson5.jpg"
    },
    {
        question: "Mr. Sandman",
        answers: ["The Supremes", "The Shangri-La's", "Mary Wells", "The Chordettes"],
        correct: "The Chordettes",
        right: 'Correct!',
        wrong: "Wrong!",
        imageUrl: "assets/images/sandman.jpg"
    }
]


//functions
var start = function () {

}
var createQuestions = function () {
    timerStart();
    var question = qA[qACount]['question'];
    var newDiv = $('<div>');
    newDiv.addClass('question');
    newDiv.text(question);
    $('.trivSection').append(newDiv);
    createAnswers();
}
var createAnswers = function () {
    var answerlength = qA[qACount]['answers'].length;
}
//button function
for (i = 0; i < answerlength; i++) {
    var answer = qA[qACount]['answers'][i];
    var newBtn = $('<button>');
    newBtn.addClass('answers');
    newBtn.text['answers'];
    $('.triviaSection').append(newBtn);
}
$(document).off('click', '.answers', checkAnswers);
$(document).on('click', '.answers', checkAnswers);
//checkAnswer function
var checkAnswer = function () {
    var userAnswer = $(this).data('type');
    var correctAnswer = qA[qACount]['correct'];
    var correctImg = qA[qACount]['imageUrl'];
    var right = qA[qACount]['right'];
    var wrong = qA[qACount]['wrong'];
    console.log(qACount);
    if (userAnswer === correctAnswer) {
        rightCount++;
        $('.trivSection').empty();
        var newImg = $('<img>');
        newImg.attr('src', correctImg);
        $('.trivSection').append(newImg);
        newDiv = $('<div>');
        //Give div class
        newDiv.addClass('rightAnswer');
        //adds CORRECT! text to div
        newDiv.text(right);
        //Add answer to DOM
        $('.trivSection').append(newDiv);
        var newDiv =

            clearInterval(timer);
        //Add 1 to question count to move to the next question
        qACount++;
    }
    if (qACount <= 10) {
        setTimeout(function () {
            $('.trivSection').empty();
            createQuestions();
        }, 3500);
    }
    else {
        //Clears out triv Section
        $('.trivSection').empty();
        var newImg = $('<img>');
        newImg.attr('src', correctImg);
        $('.trivSection').append(newImg);
        var newDiv = $('<div>');
        newDiv.addClass('wrongAnswer');
        newDiv.text('wrong');
        $('.triviaSection').append('newDiv');
        clearInterval(timer);
        qACount++;

        //timer section



        //Decrements Time

        timer = setInterval(timeDecrement, 100);
        var Decrement = function () {
            $('.display').width(trivTime + '%');
            triviaTime--;

            if (trivTime === -10) {
                userAnswer = false;
                clearInterval(timer);
                checkAnswer();
            }
            //game over function

            var gameOver = function () {
                $('.triviaSection').empty();
                $('.timerSection').empty();
            }

            var scoreDiv = $('<div>');
            scoreDiv.addClass('score');
            scoreDiv.html('Correct:' + rightCount + '<br>' + 'Wrong:' + wrongCount);
            $('.trivSection').append(scoreDiv);
            //Assign new div element to new Div
            var newDiv = $('<div>');
            //add class to new Div
            newDiv.addClass('gameOver');
            //add game over text
            newDiv.text('Game Over! Play Again ?');
            //Append game over text to DOM
            $('.trivSection').append(newDiv);
            //Create ResetButton
            var newBtn = $('<button>');
            //Give btn Class
            newBtn.addClass('blueBtn resetBtn');
            //Give btn reset Text
            newBtn.text('Reset');
            //Append
            $('.trivSection').append(newBtn);
            //Reset all value
            trivTime = 100;
            qACount = 1;
            rightCount = 0;
            wrongCount = 0;
            //When reset button is clicked.......
            $('.resetBtn').on('click', function () {
                $('.trivSection').empty()
                //Starts game over
                createQuestions();
            });


            /*Main
            ==============================================================*/
            start();
        };
    }




};

$('.startBtn').on('click', function () {
    $('.trivSection').empty();
    createQuestions();
});

var timerStart = function () {
    $('.timerSection').empty();

    //set time to 60

    trivTime = 100;
    var timeTag = $('<div>');
    timeTag.addClass('time');
    timeTag.addClass('display');
    var display = $('<div>');
    display.addClass('display');
    $('.timerSection').append('timeTag');
    $('.time').append('display');
}