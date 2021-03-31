var images = [
    'IMAGES/1.png',
    'IMAGES/2.png',
    'IMAGES/3.png',
    'IMAGES/4.png',
    'IMAGES/5.png'
];

// function loadImages(imgArr, targetId){
    // for(var i=0; i< imgArr.length; i++) {
        // console.log(imgArr[i]);
        // var img = new Image();
            // img.src = imgArr[i];
        // document.getElementById('output').appendChild(img);
    }
}

// loadImages(images);

// <button onclick="loadImages(images)">Start</button>
$(document).ready(function(){
  
    // var magic8Ball = {};
    // images.listofanswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
   
    images.listofanswers = ["IMAGES/1.png","IMAGES/2.png","IMAGES/3.png"];

    magic8Ball.getAnswer = function(question)
    {
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
      
      $("#8ball").effect( "shake" );
      $("#answer").text( answer );
      $("#answer").fadeIn(3000);
    //   $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      // $("#8ball").attr("src", "./IMAGES/1.png","./IMAGES/2.png","./IMAGES/3.png");
  
      console.log(question);
      console.log(answer);
    };
    $("#answer").hide();
  
    var onClick = function()
    {
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
      var question = prompt("What do you want to know?");
      images.getAnswer(question);
    };
    
    $("#questionButton").click( onClick );
  });