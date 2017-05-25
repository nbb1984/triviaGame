//have to make sure window loads before javascript engages 
//I need the code to do the following: 
//listen for the player to click the start button.
//When the player clicks the start button, I need the computer to pick
//randomly from an object containing all of the trvia questions.  I then 
//need the computer to display the answers (also contained in the object
//or in a separate object).
//timer needs to begin using both setTimeout function (to set the amount
//of time the trivia game will run) and the setInterval() function in 
//order to tell the clock to update the html every second so that the user
//can tell how much time he/she has.  I need the computer to change
//the html of the trivia question every time the player answers a question.
//when I click play, I want the first question to display


window.onload = function() {
	$(".play").on("click", game.startAnew);
  $(".stop").on("click", game.stop);
  $(document).on("click", ".answer", game.answer);
  $(".skip").on("click", game.skipQuestion);

  // $(document).on("click", ".skip", game.skipQuestion);
};

  var triviaGame = [
          {question:'This former player (and namesake) of the Cleveland Indians was thought to be the first player of Native American ancestry to play professional baseball...',
          answers: {one:'Chief Yellow Horse', two:'Jim Tory', three:'Napolean Lajoie', four:'Louis Sockalexis'},
          correctAnswer: "Louis Sockalexis", 
          correctAnswerClass:"answer4"},

          {question:"You probably didn't know that Cleveland was the first city in the world to use an electric traffic signal.  Can you guess onto which iconic street the light was installed?",
          answers: {one:'Euclid Ave', two:'Detroit Ave', three:'Superior Ave', four:'Carnegie Ave'},
          correctAnswer: "Euclid Ave", 
          correctAnswerClass:"answer1"}, 

          {question:"The term Rock n' Roll was coined by which famous Cleveland DJ?",
          answers: {one:'Michael Stanley', two:'Alan Freed', three:'Alan Cox', four:'K.J. O' + "'" + 'Neal'},
          correctAnswer:'Alan Freed', 
          correctAnswerClass:"answer2"},

          {question:"Which of the following fish is NOT found in Lake Erie?",
          answers: {one:'Walleye', two:'Pike', three:'Plecostomus', four:'Flat-nosed Dase'},
          correctAnswer:'Plecostomus', 
          correctAnswerClass:"answer3"},

          {question:"The suburb of Shaker Heights was originally a planned community under the aegis of which business magnate(s)?",
          answers: {one:'John D. Rockefeller', two:'Andrew Carnegie', three:'Jeptha Wade', four:'O.P. and M.J. Van Sweringen'},
          correctAnswer: 'O.P. and M.J. Van Sweringen',
          correctAnswerClass:"answer4"},
         
          {question:"The first permanent settler of european descent in Cleveland was named...?",
          answers: {one:'Lorenzo Carter', two:'Ebenezer Adams', three:'Richard Livingston', four:'Jeptha Wade'},
          correctAnswer: 'Lorenzo Carter', 
          correctAnswerClass:"answer1"},

          {question:"Which one of these famous celebrities was NOT born or raised in Cleveland?",
          answers: {one:'Anne Heche', two:'Richard Pryor', three:'Margaret Hamilton', four:'Jesse Owens'},
          correctAnswer: 'Richard Pryor',
          correctAnswerClass: "answer2"},

          {question:"It has been rumored that Cleveland once had the largest Hungarian settlement outside of which European city?",
          answers: {one:'Bucharest', two:'Zagreb', three:'Budapest', four:'Kiev'},
          correctAnswer:'Budapest',
          correctAnswerClass: "answer3"},

          {question:"The oldest building on its original site in the city of Cleveland is now called what?",
          answers: {one:'The Church of the Covenant', two:'The Western Reserve Historical Society', three:'The Original Cleveland Clinic Building', four:'The Dunham Tavern Museum'},
          correctAnswer: 'The Dunham Tavern Museum',
          correctAnswerClass: "answer4"},

          {question:"Which of the following movies did NOT include scenes that were filmed in Cleveland?",
          answers: {one:'Citizen Kane', two:'The Deer Hunter', three:'A Christmas Story', four:'Air Force One'},
          correctAnswer: 'Citizen Kane',
          correctAnswerClass: "answer1"},

          {question:"When the Terminal Tower was completed in 1931, how many buildings elsewhere in the world were taller?",
          answers: {one:'Zero', two:'One', three:'Two', four:'Four'},
          correctAnswer:'One',
          correctAnswerClass:"answer2"},

          {question:"Which junkfood was first mass-produced in Cleveland?",
          answers: {one:'Donuts', two:'Cotton Candy', three:'Potato Chips', four:'Marshmallows'},
          correctAnswer: 'Potato Chips',
          correctAnswerClass:"answer3"},

          {question:"How many times has the Cuyahoga River caught fire?",
          answers: {one:'One Time', two:'Seven Times', three:'Sixteen Times', four:'Thirteen Times'},
          correctAnswer: 'Thirteen Times',
          correctAnswerClass:"answer4"},

          {question:"Clevelander and golfer Coburn Haskell invented the modern golf ball with a rubber-bound core ball.  The old balls were stuffed with what?",
          answers: {one:'Feathers', two:'Cork', three:'Cotton', four:'Hemp'},
          correctAnswer: 'Feathers', 
          correctAnswerClass:"answer1"},

          {question:"Which organization in the Cleveland area has been given an award for the most overplayed theme song?",
          answers: {one:'Lake Business Products', two:'The IX-Center', three:'The Cleveland Cavaliers', four:'Cedar Point'},
          correctAnswer: 'The IX-Center',
          correctAnswerClass:"answer2"},

          {question:'On September 6, 1946, the Cleveland Browns defeated the Seahawks 44-0 in their first regular season game in the AAFC. The Seahawks were from which city?',
          answers: {one:'San Diego', two:'New Orleans', three:'Miami', four:'Seattle'},
          correctAnswer: 'Miami', 
          correctAnswerClass:"answer3"} 
      ]

//Each one of these array items corresponds to the correct answer of the array item of the same index above.
 //see above.  
  

  var game = {
      
      messages : {
          getStarted: function() {$(".message-p").html('Cleveland Rocks, and so do you! Click "Play." Good Luck!')},
          thanksForPlaying: function() { $(".message-p").html('Thanks for playing.  It' + "'" + 's Cleveland vs. the world! Click "start" to play again!')},
          keepGoing: function() {$(".message-p").html("You're near the end! Keep going!")},
          correct: function() {$(".trivia-question").html("Correct! I guess you're not the mistake by the lake!")},
          incorrect: function() {$(".trivia-question").html("Incorrect! That's the biggest whiff since Ernest Minor's fumble!  The correct answer is: " + correctAnswer)},
          endGame: function() {$(".trivia-question").html("Game Over! Here is your score: " + "<p class = 'answers'>Correct Answers: " + correctScore + "</p><p>Incorrect Answers: " + incorrectScore + "</p>")},
          outOfTime: function() {$(".trivia-question").html("You ran out of time! The correct answer was: " + correctAnswer)},
          skip: function() { $(".trivia-question").html("Hey Art Modell...you skipping town again? The correct answer was: " + correctAnswer)},
          picture: function() { $(".trivia-question").html("<img src = 'assets/images/browns.png' class = 'img' alt= 'browns-mascot'>")},
          leBron: function() {$(".multiple-choice-answers").html("<img src = 'assets/images/leBron.png' class = 'img' alt= 'LeBron-James'>")},
          steveHarvey: function() {$(".multiple-choice-answers").html("<img src = 'assets/images/steveharvey.png' class = 'img' alt= 'Steve-Harvey'>")},
          choiceAnswers: function() {$(".multiple-choice-answers").html("<p class = 'answer answer1'></p><p class = 'answer answer2'></p><p class = 'answer answer3'></p><p class = 'answer answer4'></p>")},
          goodLuckJohnny: function() {$(".multiple-choice-answers").html("<img src = 'assets/images/goodluckjohnny.png' class = 'img' alt= 'Sad-Browns-Fans'>")},
      },

	  	reset: function() {
          timeRemaining = 15;
          correctScore = 0;
          incorrectScore = 0;
          questionsAnswered = 0;
          correctAnswerClass;
          correctAnswer;
          clockRunning = false;
          stopClicked = false;
          randomNumber;
          trivia = triviaGame.slice();
          playClicked = false;
          game.messages.picture();
          game.messages.choiceAnswers();
  	    	$(".time-p").html("00:00");
  	    	game.messages.getStarted();
	  	},
      //Checks to make sure the player does not restart the game before they are done.
      startAnew: function() {
          if (playClicked) {
            return;
          } else {
            playClicked = true;
            game.play();
          }
      },

      start: function() {
        if (!clockRunning) {
          timeRemaining = 15;
          clearInterval(intervalId);
          intervalId = setInterval(game.count, 1000);
          clockRunning = true;
        } 
      },

      stop: function() {
          if (stopClicked) {
            return;
          } else {
          stopClicked = true;
          skipClicked = true;
          game.clearBoard();
          }
      },

	  	count: function() {
    		timeRemaining--;
    		var realTime = game.timeDisplay(timeRemaining);
    		$(".time-p").html(realTime);
        if (timeRemaining < 1) {
          game.timeRunsOut();
          return;
        }
  		},

	  	timeDisplay: function(time) {
		    var minutes = Math.floor(time / 60);
		    var seconds = time - (minutes * 60);
		    if (seconds < 10) {
		      seconds = "0" + seconds;
		    }
		    if (minutes === 0) {
		      minutes = "00";
		    }
		    return minutes + ":" + seconds;
		  },

      answer: function(){

        if ($(this).hasClass(correctAnswerClass)) {
          correctScore++;
          questionsAnswered++;
          game.messages.correct();
          game.messages.steveHarvey();
          
          if (questionsAnswered === 16) {
          setTimeout(game.clearBoard, 2000);
          } else {
          game.clearBoard();
          }
        }

        else if ($(this).hasClass("answer")){
          game.messages.incorrect();
          game.messages.leBron();
          game.nextQuestion();
        }    
      },
      
      skipQuestion: function () {
          if (!skipClicked ){
            skipClicked = true;
            game.messages.skip();
            game.messages.leBron();
            game.nextQuestion();
            } else {      
            return;
            }
      },

      timeRunsOut: function () {
          game.nextQuestion();
          game.messages.outOfTime();
          game.messages.goodLuckJohnny();
      },
      nextQuestion: function () {
          incorrectScore++;
          questionsAnswered++;
          console.log(questionsAnswered);
          if (questionsAnswered === 16) {
          setTimeout(game.clearBoard, 2000);
          } else {
          game.clearBoard();
          }          
      },
      
      clearBoard: function(){
          $(".time-p").html("00:15");
          clearInterval(intervalId);
          clockRunning = false;
          if (questionsAnswered === 16 || stopClicked) {
              game.messages.thanksForPlaying();
              game.messages.endGame();
              game.messages.goodLuckJohnny();
              setTimeout(game.reset, 5000);
          } else {
            setTimeout(game.play, 2000);
          }
      }, 

      play: function() {
            game.messages.choiceAnswers();
            skipClicked = false;
            game.start();
            if (questionsAnswered > 12) {
              game.messages.keepGoing();
            }
            randomNumber = Math.floor(Math.random()*trivia.length);            
            var question = trivia[randomNumber].question;
            var answerChoices = trivia[randomNumber].answers;
            correctAnswer = trivia[randomNumber].correctAnswer;
            correctAnswerClass = trivia[randomNumber].correctAnswerClass;
            $(".trivia-question").html(question);
            $(".answer1").html(answerChoices.one);
            $(".answer2").html(answerChoices.two);
            $(".answer3").html(answerChoices.three);
            $(".answer4").html(answerChoices.four);
            trivia.splice(randomNumber, 1);
      }

    }
      var trivia = triviaGame.slice();
      var intervalId;
      var timeRemaining = 15;
      var correctScore = 0;
      var incorrectScore = 0;
      var correctAnswer;
      var correctAnswerClass;
      var questionsAnswered = 0;
      var clockRunning = false;
      var randomNumber;
      var stopClicked = false;
      var skipClicked = false; 
      var playClicked = false;
