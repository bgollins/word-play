$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var sentenceInput = $("input#sentence").val();
    var sentenceArray = sentenceInput.split(' ');
    var wordLength = sentenceArray.map(function(sentence){
	       return sentence.length;
      });

    console.log(sentenceArray);

    sentenceArray.forEach(function(xx) {
      if (xx.length >= 3){
        $(".result").append("<li>" + xx + "</li>");
        //console.log("it works!");
      };
    });
  });
});
