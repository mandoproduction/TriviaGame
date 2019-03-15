///Trivia Music Game Variables
var trivTime = 0;
var rightCount = 0;
var wrongCount = 0;
var qACount = 1;
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
        correct:'Biggie Smalls v. Tupac',
        right:'You got it!',
        wrong: '',
        imageUrl:'assets/images/biggie-tupac.jpg'
    },
    {
        question: "What was the name of Destiny's Child's first album?",
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
        imageUrl: "..assets/images/michealjackson.gif"
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
        question: "'Stuck In The Middle With You",
        answers: ["The Eagles", "Fleetwood Mac", "America", "Stealers Wheel"],
        correct: "Steelers Wheel",
        right: 'Correct!',
        wrong: 'Wrong',
        imageUrl: "assets/images/Stealers-Wheel.jpg"
    },
    {
        question: "Green Onions",
        answers: ["Booker T and The MG's", "Bobby Darin", "The Four Seasons", "Three Dog Night"],
        correct: "Booker T and The MG's",
        right: 'Correct!',
        wrong: "Wrong!",
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

var start = function() {
    //When buttons is clicked clear trivSection
    $('.startBtn').on('click', function() {
        //Emptys trivia section
        $('.trivSection').empty();
        createQuestions();
    });
}
var createQuestions = function() {
    timerStart();
    //Get question
    var question = qA[qACount]['question'];
    //assign div element to newDiv
    var newDiv = $('<div>');
    //Add a class to newDIv
    newDiv.addClass('question');
    //Add text to question
    newDiv.text(question);
    //Add question to DOM
    $('.trivSection').append(newDiv);
    createAnswers();
}
var createAnswers = function() {
    var answerLength = qA[qACount]['answers'].length;
    for (var i = 0; i < answerLength; i++) {
        //get answers
        var answers = qA[qACount]['answers'][i];
        //Create new div to hold answers
        var newBtn = $('<button>');
        //Add class to new Div
        newBtn.addClass('answers redBtn');
        //Give buttons attribute
        newBtn.attr('data-type', answers);
        //add text to new Div
        newBtn.text(answers);
        //Add answers to DOM
        $('.trivSection').append(newBtn);
    }
    //Prevents click event from being saved
    $(document).off('click', '.answers', checkAnswer);
    $(document).on('click', '.answers', checkAnswer);
}
var checkAnswer = function() {
    //Get users answer choice
    var userAnswer = $(this).data('type');
    var correctAnswer = qA[qACount]['correct'];
    var correctImg = qA[qACount]['imageUrl'];

    var right = qA[qACount]['right'];
    var wrong = qA[qACount]['wrong'];
    console.log(qACount);
    if (userAnswer === correctAnswer) {
        //Update rightCount
        rightCount++;
        //Clears out triv Section
        $('.trivSection').empty();
        var newImg = $('<img>');
        newImg.attr('src', correctImg);
        $('.trivSection').append(newImg);
        //Create Div
        var newDiv = $('<div>');
        //Give div class
        newDiv.addClass('rightAnswer');
        //adds CORRECT! text to div
        newDiv.text(right);
        //Add answer to DOM
        $('.trivSection').append(newDiv);
        //Stops Time
        clearInterval(timer)
        //Add 1 to question count to move to the next question
        qACount++;
        if (qACount <= 10) {
            //removes CORRECT! text and continues to create next question after 3 seconds
            setTimeout(
                function () {
                    $('.trivSection').empty();
                    createQuestions();
                }, 3500);
        }
        else {
            $('.trivSection').empty();
            var newImg = $('<img>');
            newImg.attr('src', correctImg);
            $('.trivSection').append(newImg);
            //Create Div
            var newDiv = $('<div>');
            //Give div class
            newDiv.addClass('rightAnswer');
            //adds CORRECT! text to div
            newDiv.text(right);
            //Add answer to DOM
            $('.trivSection').append(newDiv);
            //Stops Time
            clearInterval(timer)
            //Reset
            setTimeout(gameOver, 3500);
        }
    }
    else {
        wrongCount++;
        //Clears out triv Section
        $('.trivSection').empty();
        var newImg = $('<img>');
        newImg.attr('src', correctImg);
        $('.trivSection').append(newImg);
        var newDiv = $('<div>');
        //Give div class
        newDiv.addClass('wrongAnswer');
        //adds Wrong! text to div
        newDiv.text(wrong);
        //Add answer to DOM
        $('.trivSection').append(newDiv);
        //Stops Time
        clearInterval(timer)
        //Add 1 to question count to move to the next question
        qACount++;

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
            //Give div class
            newDiv.addClass('wrongAnswer');
            //adds Wrong! text to div
            newDiv.text(wrong);
            //Add answer to DOM
            $('.trivSection').append(newDiv);
            //Stops Time
            clearInterval(timer);
            //Reset
            setTimeout(gameOver, 3500);
        }
    }
}
//Timer
//==========================================
var timerStart = function () {
    $('.timerSection').empty();
    //Sets time to 10
    trivTime = 10;
    //Progress Bar
    var timeTag = $('<div>');
    timeTag.addClass('time');
    timeTag.addClass('progress');
    var progressBar = $('<div>');
    progressBar.addClass('progress-bar');
    progressBar.width(trivTime + '%');

    $('.timerSection').append(timeTag);
    $('.time').append(progressBar);
    //Decrements Time
    timer = setInterval(timeDecrement, 1000);
}
var timeDecrement = function () {
    //Progress bar decrement
    $('.progress-bar').width(trivTime + '%');
    trivTime--;
    $(".timerSection").text(trivTime)
    //if time gets to 0
    if (trivTime === 0) {
        userAnswer = false;
        //Clears Time
        clearInterval(timer);
        checkAnswer();
    }

}
var gameOver = function () {
    //Remove everything in trivia section
    $('.trivSection').empty();
    //Remove everthing in timer section
    $('.timerSection').empty();
    var scoreDiv = $('<div>');
    scoreDiv.addClass('score');
    scoreDiv.html('Correct: ' + rightCount + '<br>' + 'Wrong: ' + wrongCount);
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
    newBtn.addClass('redBtn resetBtn');
    //Give btn reset Text
    newBtn.text('Reset');
    $('.trivSection').append(newBtn);
    //Reset all value
    trivTime = 100;
    qACount = 1;
    rightCount = 0;
    wrongCount = 0;
    //When reset button is clicked.......
    $('.resetBtn').on('click', function() {
        $('.trivSection').empty()
        //Starts game over
        createQuestions();
    });
}

/*Main
==============================================================*/
start();
