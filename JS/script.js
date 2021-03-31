$(document).ready(function(){
  
    var magic8Ball = {};
    magic8Ball.listofanswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
   
    // magic8Ball.listofanswers = ["./IMAGES/1.png","./IMAGES/2.png","./IMAGES/3.png"];

    magic8Ball.getAnswer = function(question)
    {
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answers = this.listofanswers[randomAnswer];
      
      $("#8ball").effect( "shake" );
      $("#answers").text( answers );
      $("#answers").fadeIn(3000);
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      // $("#8ball").attr("src", "IMAGES/01.png");
  
      console.log(question);
      console.log(answer);
    };
    $("#answers").hide();
  
    var onClick = function()
    {
      // $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
      var question = prompt("What do you want to know?");
      magic8Ball.getAnswer(question);
    };

    // $("#answer").hide();
    
    $("#questionButton").click( onClick );
  });